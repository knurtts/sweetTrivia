import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton';

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, firstName, lastName  } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log('uid',data.user.uid)
        console.log('EmailAddress: ',data.user.email)
        console.log('FirstName: '+ firstName)
        console.log('LastName: ' + lastName)

        this.props.history.push('/Lobby');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, firstName, lastName, error } = this.state;
    return (
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar position="static" color="inherit" title="Register" />
          <Card>
            <form onSubmit={this.handleSubmit}>
            <TextField hintText="Enter Your First Name" floatingLabelText="First Name"
              type="text" name="firstName" value={firstName} onChange={this.handleInputChange} />
           
            <br/> 
            <TextField hintText="Enter Your Last Name" floatingLabelText="Last Name"
              type="text" name="lastName" value={lastName} onChange={this.handleInputChange} />
             
            <br/>
            <TextField hintText="Enter A Password" floatingLabelText="Password"
              type="password" name="password" value={password} onChange={this.handleInputChange} />
            
            <br/> 
            <TextField hintText="Enter Your Email Address" floatingLabelText="Email Address"
              type="text" name="email" value={email} onChange={this.handleInputChange} />
            
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

export default withRouter(Register);
