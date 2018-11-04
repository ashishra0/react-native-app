import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from '../components';


class LoginForm extends Component {
  state={email: '', password: '', error: '', loading: false}
  
  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginFail() {
    this.setState({error: 'Authentication Failed', loading: false});
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderSpinner() {
    if(this.state.loading){
      return <Spinner size="small"/>
    }

    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="johndoe@example.com"
            label="Email"
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
           />
        </CardSection>
        <CardSection>
        <Input 
          label="Password"
          placeholder="password"
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry
        />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderSpinner()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export default LoginForm;