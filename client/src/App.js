import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuizLoop from "./pages/QuizLoop/QuizLoop";
import Answered from "./pages/QuizLoop/Answered";
import Lobby from "./pages/Lobby/Lobby";
import Time from "./pages/Time"
import Login from "./pages/Auth/Login"
import "./App.css";
import CorrectScore from "./pages/CorrectScore/CorrectScore";
import FinalRank from "./pages/FinalRank/FinalRank";
import firebase from './firebase';
import Navigation from './Navigation';
import ProtectedRoute from './ProtectedRoute';


class App extends Component {

  state = {
    // authenticated: false,
  };

  componentDidMount() {
    console.log(this.state.authenticated);
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
      console.log(this.state.authenticated);
    });
  }
  
  render() {
    return (
      
      <Router>
        <div>
          <Route exact path="/home" component={Home} />
          
          <Route exact path="/quiz" component={QuizLoop} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/time" component={Time} />
          <Route exact path="/correctScore" component={CorrectScore} />
          <Route exact path="/answered" component={Answered} />
          <Route exact path="/finalRank" component={FinalRank} />
          {/* <Route authenticated={this.props.authenticated} path="/lobby" component={() => this.props.authenticated ? <Lobby /> : <Login />} /> */}
          {/* <Route authenticated={this.props.authenticated} path="/quiz" component={QuizLoop} /> */}
          {/* <ProtectedRoute authenticated={this.props.authenticated} path="/answered" component={Answered} /> */}
          {/* <ProtectedRoute authenticated={this.props.authenticated} path="/lobby" component={Lobby} /> */}
         
          {/* <ProtectedRoute authenticated={this.props.authenticated} path="/correctScore" component={CorrectScore} /> */}
         
          {/* <ProtectedRoute authenticated={this.props.authenticated} path="/finalRank" component={FinalRank} /> */}
          <Navigation authenticated={this.state.authenticated} />;
        </div>
      </Router>
    )
    
  }
}

export default App;
