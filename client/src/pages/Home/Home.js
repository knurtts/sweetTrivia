import React, {Component} from "react";
import './Home.css';



const logo = require('../../assets/images/broncos_mark_white.png');
class Home extends Component {
  
  render() {
  return (
    <>
    
    <nav>
            <div className="nav-wrapper" >
                <a href="#" className="brand-logo" center></a>
            </div>
        </nav>
   <div className="container">
                <div className="row">
                    <div className="col s12">

                    <img src={logo}/>

                        {/* Title */}
                        <div><h1>Game Day Trivia</h1></div>

                        {/* LogIn Component */}
                        <div className="">
                            <div className="card-content white-text" id="signoutIn">
                            <a href="/login" className="waves-effect waves-orange btn-large">Log In</a>
                            </div>
                        </div>

                        {/* Register Component */}
                        <div className="">
                            <div className="card-content white-text" id="register">
                            <a href="/register" className="waves-effect waves-orange btn-large">Register</a>
                            </div>
                        </div>

               </div>
               </div>
               </div>
</>
  );
};
};


export default Home;
