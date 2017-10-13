import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
 

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
    return (
      <Provider store={createStore(reducers)}> 
        <View>
          <Text>Still Awesome</Text>
        </View>
      </Provider>
    );
  }
}

export default App;