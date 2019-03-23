import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import { Container, Flex, Box, Input, Button, Subhead, Text } from 'rebass';
import firebase from './firebase';

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

        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, firstName, lastName, error } = this.state;
    return (
      <container>
        
            Register
          
        {error ? (
          
              <text>{error.message}</text>
           
        ) : null}
        
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleInputChange} />
              <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleInputChange} />
              <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleInputChange} />
              <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
              
              
              

              <button waves='light' children="Register" />
            </form>
          
      </container>

      
    );
  }
}

export default withRouter(Register);
