import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './src/components';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  state = {loggedIn: null}
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAaypaKuHSilrEKz2owhmUDSN20kSjuX98",
      authDomain: "authentication-ae87c.firebaseapp.com",
      databaseURL: "https://authentication-ae87c.firebaseio.com",
      projectId: "authentication-ae87c",
      storageBucket: "authentication-ae87c.appspot.com",
      messagingSenderId: "760604700047"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />
      default: 
      return <Spinner size="large"/>
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}


export default App;