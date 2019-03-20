import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizLoop from "./pages/QuizLoop/QuizLoop";
import Answered from "./pages/QuizLoop/Answered";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={QuizLoop} />
          <Route exact path="/quiz" component={QuizLoop} />
          <Route exact path="/answered" component={Answered} />
        </div>
      </Router>
    )
  }
}

export default App;
