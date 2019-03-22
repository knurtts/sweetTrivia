import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizLoop from "./pages/QuizLoop/QuizLoop";
import Answered from "./pages/QuizLoop/Answered";
import firebase from './firebase';
import Navigation from './Navigation';
import "./App.css";

class App extends Component {

  state = {
    authenticated: false,
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
          <Route exact path="/" component={QuizLoop} />
          <Route exact path="/quiz" component={QuizLoop} />
          <Route exact path="/answered" component={Answered} />
          <Navigation authenticated={this.state.authenticated} />;
        </div>
      </Router>
    )
    
  }
}

export default App;
