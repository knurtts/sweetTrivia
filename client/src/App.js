import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizLoop from "./pages/QuizLoop/QuizLoop";
import Answered from "./pages/QuizLoop/Answered";
import Lobby from "./pages/Lobby/Lobby";
import "./App.css";
import CorrectScore from "./pages/CorrectScore";
import FinalRank from "./pages/FinalRank";
import SignIn from "./pages/QuizLoop/SignIn";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/quiz" component={QuizLoop} />
          <Route exact path="/answered" component={Answered} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/correctScore" component={CorrectScore} />
          <Route exact path="/finalRank" component={FinalRank} />
        </div>
      </Router>
    )
  }
}

export default App;
