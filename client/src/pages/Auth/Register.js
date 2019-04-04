import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './Register.css';
import axios from 'axios';
import { now } from 'moment';

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userID: '',
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
        const newUser={
          uID:data.user.uid,
          firstname:firstName,
          lastname:lastName,
          email:data.user.email,
        }
        // console.log('uid',data.user.uid)
        // console.log('EmailAddress: ',data.user.email)
        // console.log('FirstName: '+ firstName)
        // console.log('LastName: ' + lastName)

       //Add users UserID to User table in SQL
       axios.post('/api/newuser', newUser)
       .then(res => {
       this.setState({userID: res.data.id});
       console.log(this.state);

       //Add users UserID to User table in SQL
       axios.post('/api/newplayer/' + this.state.userID +'/' + this.state.gameID )
       .then(res => {
        this.props.history.push({pathname: '/Lobby', state: {userID: this.state.userID}});
      })
      .catch((error) => {
        this.setState({ error: error });
      });
     })
     .catch((error) => {
      this.setState({ error: error });
    });  
    })
    .catch((error) => {
      this.setState({ error: error });
    });
        
  };
  render() {
    const { email, password, firstName, lastName, error } = this.state;
    return (
        <div>
          <nav>
            <div className="nav-wrapper" >  

            <ul class="right waves-effect waves-light">
      <li><a href="/">Home</a></li>

    </ul>
  </div>
        </nav>
        <br/> 
        <div class="container">
        <div className = "register"> 
            <form onSubmit={this.handleSubmit}>
        <div className="row">
            <div className="input-field col s6">
                <input type="text" name="firstName" className="text black-text" value={firstName} onChange={this.handleInputChange} />
                <label for="firstName">First Name</label>
            </div>
        </div>
            <div className="row">
            <div className="input-field col s6">
                <input type="text" name="lastName"  className="text black-text" value={lastName} onChange={this.handleInputChange} />
                <label for="lastName">Last Name</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
                <input type="text" className="validate" name="email" className="text black-text" value={email} onChange={this.handleInputChange} />
                <label for="email">Email</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
                <input type="password" className="validate" name="password" className="text black-text" value={password} onChange={this.handleInputChange} />
                <label for="password">Password</label>  
            </div>
        </div> 
            <button className="waves-effect waves-orange btn-large" children="Register" />
        </form>
        </div>  

        {error ? (
            
        <text>{error.message}</text>
          
      ) : null}   
        
        </div>
          </div>
      );
    }
   }
   export default withRouter(Register);
