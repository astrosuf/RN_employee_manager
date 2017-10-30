import React, {Component} from 'react';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'; //middleware
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

 

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAtLhg7Ixyr0veIEbsyVA8-ljhhAWxk98Y",
      authDomain: "rnemployeemanager.firebaseapp.com",
      databaseURL: "https://rnemployeemanager.firebaseio.com",
      projectId: "rnemployeemanager",
      storageBucket: "",
      messagingSenderId: "372320955583"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // second argument is defining initial state.

    return (
      <Provider store={store}> 
        <LoginForm />
      </Provider>
    );
  }
}

export default App;