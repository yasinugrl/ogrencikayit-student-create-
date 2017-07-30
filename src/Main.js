import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCN6h1vsmG5TL03CwIQF-QOkoTk2RG1EHk',
    authDomain: 'ogrencikayit-5847b.firebaseapp.com',
    databaseURL: 'https://ogrencikayit-5847b.firebaseio.com',
    projectId: 'ogrencikayit-5847b',
    storageBucket: 'ogrencikayit-5847b.appspot.com',
    messagingSenderId: '79763668109'
  });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
