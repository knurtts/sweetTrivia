import React, { Component } from 'react';
//import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
//import Dashboard from './Dashboard';
import Lobby from './pages/Lobby/Lobby'
import ProtectedRoute from './ProtectedRoute';
import LogOut from './pages/Auth/LogOut';

class Navigation extends Component {
 render() {
   return (
     <Router>
       <div>

             <NavLink to="/">Home</NavLink>
             {this.props.authenticated ? (
               <span>
                 <NavLink to="/lobby">Lobby</NavLink>
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
           <ProtectedRoute authenticated={this.props.authenticated} path="/lobby" component={Lobby} />
         </Switch>
       </div>
     </Router>
   );
 }
}

export default Navigation;