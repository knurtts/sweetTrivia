import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizLoop from "./pages/QuizLoop/QuizLoop";
import Answered from "./pages/QuizLoop/Answered";
import "./App.css";
import CorrectScore from "./pages/CorrectScore";
import FinalRank from "./pages/FinalRank";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={QuizLoop} />
          <Route exact path="/quiz" component={QuizLoop} />
          <Route exact path="/answered" component={Answered} />
          <Route exact path="/correctScore" component={CorrectScore} />
          <Route exact path="/finalRank" component={FinalRank} />
        </div>
      </Router>
    )
  }
}

export default App;
