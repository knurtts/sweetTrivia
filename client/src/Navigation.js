import React, { Component } from 'react';
//import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
//import Dashboard from './Dashboard';
import Lobby from './pages/Lobby/Lobby';
import QuizLoop from './pages/QuizLoop/QuizLoop';
import Answered from './pages//QuizLoop/Answered';
import ProtectedRoute from './ProtectedRoute';
import CorrectScore from './pages/CorrectScore/CorrectScore';
import FinalRank from './pages/FinalRank/FinalRank';
import LogOut from './pages/Auth/LogOut';

class Navigation extends Component {
 render() {
   return (
     <Router>
       <div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route authenticated={this.props.authenticated} path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* <ProtectedRoute authenticated={this.props.authenticated} path="/lobby" component={Lobby} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/quiz" component={QuizLoop} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/answered" component={Answered} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/correctScore" component={CorrectScore} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/finalRank" component={FinalRank} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;