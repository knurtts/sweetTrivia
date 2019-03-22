import React, { Component } from 'react';
//import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import LogOut from './LogOut';

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          
              <NavLink to="/">Home</NavLink>
              {this.props.authenticated ? (
                <span>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <LogOut />
                </span>
              ) : (
                <span>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                </span>
              )}
            

          <Switch>
            <Route exact path="/" component={Home} />
            <Route authenticated={this.props.authenticated} path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
