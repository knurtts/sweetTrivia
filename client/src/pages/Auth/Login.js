import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';



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
      <div>
        <nav>
            <div className="nav-wrapper" >
                <a href="#" className="brand-logo" center>Log In</a>
            </div>
        </nav>
        <br/>
        <div class="container">
            <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" className="validate" name="email" value={email} onChange={this.handleInputChange} />
                <label for="email">Email</label>
              </div>
            </div>
              <div className="row">
                <div className="input-field col s6">
                  <input type="password" name="password" value={password} onChange={this.handleInputChange} />
                  <label for="password">Password</label>  
              </div>
            </div>   
              <button className="waves-effect waves-light btn-large" children="Log In" />
            </form>
            {error ? (
         
         <text>{error.message}</text>
       
   ) : null}
          
        </div>
          </div> 
    );
    
  }
  
 }
 export default withRouter(Login);
