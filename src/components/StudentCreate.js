import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { studentChange, studentCreate } from '../actions';

class StudentCreate extends Component {

  clickSave() {
    const { isim,
    soyisim,
    ogrencinumara,
    sube } = this.props;

    this.props.studentCreate({ isim, soyisim, ogrencinumara, sube });
  }
  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>;
    }
    return <Spinner size="small" />;
  }

   render() {
     console.log('gelen data ' + this.props.student);
    const { inputStyle } = styles;
    return (
      <Card>
      <CardSection>
      <TextInput
        placeholder="İsim"
        style={inputStyle}
        value={this.props.isim}
        onChangeText={isim => this.props.studentChange({ props: 'isim', value: isim })}
      />
      </CardSection>

      <CardSection>
      <TextInput
        placeholder="Soyisim"
        style={inputStyle}
        value={this.props.soyisim}
        onChangeText={soyisim => this.props.studentChange({ props: 'soyisim', value: soyisim })}
      />
      </CardSection>

      <CardSection>
      <TextInput
        placeholder="Öğrenci Numarası"
        style={inputStyle}
        value={this.props.ogrencinumara}
        onChangeText={ogrencinumara => this.props.studentChange({ props: 'ogrencinumara', value: ogrencinumara })}
      />
      </CardSection>

      <CardSection>
      <Text>Şube</Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.props.sube}
          onValueChange={sube => this.props.studentChange({ props: 'sube', value: sube })}
        >
        <Picker.Item label="A şubesi" value="asube" />
        <Picker.Item label="B şubesi" value="bsube" />
        <Picker.Item label="C şubesi" value="csube" />
        <Picker.Item label="D şubesi" value="dsube" />
        </Picker>
      </CardSection>

      <CardSection>
       {this.renderButton()}
      </CardSection>
      </Card>
    );
  }
}


const styles = {

  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1
  }

};

const mapToStateProps = ({ studentsListRespone }) => {
  const { isim,
  soyisim,
  ogrencinumara,
  sube, loading } = studentsListRespone;

  return { isim,
  soyisim,
  ogrencinumara,
  sube,
  loading };
};

export default connect(mapToStateProps, { studentChange, studentCreate })(StudentCreate);
