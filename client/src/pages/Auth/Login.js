import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/Lobby');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar position="static" color="inherit" title="Sign In" />
          <Card>
            <form onSubmit={this.handleSubmit}>
            <TextField hintText="Enter Your Email Address" floatingLabelText="Email Address"
              type="text" name="email" value={email} onChange={this.handleInputChange} />
            
            <br/>
            <TextField hintText="Enter Your Password" floatingLabelText="Password"
              type="password" name="password" value={password} onChange={this.handleInputChange} />
            
            <br/>
            </form>
            
          <RaisedButton
            label= 'Log In'
            primary={true}
            onClick={this.handleSubmit}
            style={StyleSheet.button}
            />
            </Card>
            {error ? (
          
          <text>{error.message}</text>
        
    ) : null}
            </React.Fragment>    
            </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin:15
  }
}

export default withRouter(Login);
