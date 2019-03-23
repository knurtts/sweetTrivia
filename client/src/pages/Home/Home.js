import React, {Component} from "react";
import './Home.css'


class Home extends Component {
  render() {
  return (
    <>
   <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* Title */}
                        <div><h1>Game Day Trivia</h1></div>

                        {/* SignIn Component */}
                        <div className="card blue">
                            <div className="card-content white-text" id="signoutIn">
                            <a href="/login" class="waves-effect waves-light btn-large">Sign In</a>
                            </div>
                        </div>

                        {/* Register Component */}
                        <div className="card blue">
                            <div className="card-content white-text" id="register">
                            <a href="/register" class="waves-effect waves-light btn-large">Register</a>
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
