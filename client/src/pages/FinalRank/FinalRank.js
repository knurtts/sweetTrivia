import React, {Component} from "react";
import "./FinalRank.css";
import LogOut from "../Auth/LogOut";

// const db = require("../models");

class FinalRank extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        let self = this;
        fetch('/users', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({users: data});
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

    render() {
        return (<>
          <nav>
            <div className="nav-wrapper" >
                
           

           

            <ul class="right waves-effect waves-light">
      <li><a href="/">Home</a></li>
      <li>
        <a href="/">Logout</a>
        </li>
      
    </ul>
  </div>
        </nav>

            <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* Leaderboard Component */}
                        <div className="card blue">
                            <div className="card-content white-text">
                                <span className="card-title">
                                    <div id="leaderboard"><h1>Leaderboard</h1></div>
                                </span>
                                {/* Display all players */}
                                {/* app.get('/players', (request, response) => {
                                pool.query('SELECT * FROM users', (error, result) => {
                                if (error) throw error;
 
                                response.send(result);
                                });
                        }); */}
                                <div className="panel panel-default p50 uth-panel">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>User ID</th>
                                                <th>Total Score</th>
                                                <th>Suite Rank</th>
                                                <th>Overall Rank</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.users.map(user =>
                                            <tr key={user.id}>
                                            <td>{user.score} </td>
                                            <td>{user.rank}</td>
                                            <td>{user.overallRank}</td>
                                            </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        {/* GameRank Component */}
                        <div className="card blue">
                            <div className="card-content white-text">
                                <span className="card-title">
                                    <h5>Game Rank</h5>
                                </span>
                                <p>
                                    6 not 7
                                </p>
                            </div>
                        </div>

                        <br/>
                        
                        

                        {/* <div className="card blue">
                            <div className="card-content white-text" id="signoutCard">
                            <a href class="waves-effect waves-light btn-large">Sign Out</a>
                            </div>
                        </div> */}



                    </div>
                </div>
            </div>
        </>);
    }
}

export default FinalRank;
