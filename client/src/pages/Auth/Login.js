import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import axios from 'axios';


class Login extends Component {
  state = {
    email: '',
    password: '',
    gameID: '',
    uID: '',
    gameID: '',
    userID: '',
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
      .then((data) => {
        this.setState({uID:data.user.uid})
        console.log('uID ' , this.state.uID);

      //Get active GameID
      axios.get('/api/gameid')
      .then(res => {
        this.setState({gameID: res.data[0].id});
       console.log('gameID' , this.state.gameID);

      //Get User ID
      axios.get('/api/getuserid/' + this.state.uID)
      .then(res => {
        this.setState({userID: res.data.id});
       console.log('userID' , this.state.userID);
      
      //Check if user exists in player table for particular game
      axios.get('/api/checkplayer/' + this.state.userID +'/' + this.state.gameID)
      .then(res => {
        console.log('user exists' , res.data[0].id); 
        let checkUser = res.data[0].id
        if(checkUser === ""){
          //Add gameID and users userID to Player table in SQL
       axios.post('/api/newplayer/' + this.state.userID +'/' + this.state.gameID )
       .then(res => {
        this.props.history.push({pathname: '/Lobby', state: {userID: this.state.userID}});
      });
        }else{
          this.props.history.push({pathname: '/Lobby', state: {userID: this.state.userID}}); 
        }
      })
      
      });
  });      
});
  
  };
  render() {
    const { email, password, error } = this.state;
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
            <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" className="validate text white-text" name="email" value={email} onChange={this.handleInputChange} />
                <label for="email">Email</label>
              </div>
            </div>
              <div className="row">
                <div className="input-field col s6">
                  <input type="password" name="password" className=" text white-text" value={password} onChange={this.handleInputChange} />
                  <label for="password">Password</label>  
              </div>
            </div>   
              <button className="waves-effect waves-orange btn-large" children="Log In" />
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
