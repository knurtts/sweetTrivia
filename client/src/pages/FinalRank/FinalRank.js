import React, {Component} from "react";
import "./FinalRank.css";
import LogOut from "../Auth/LogOut";
import axios from 'axios';



class FinalRank extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
            // sortDirection: "descending",
            // data: this.state.data.sort(descending)
        };
    }

    componentDidMount() {
        axios.get("/api/leaderboards")
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      }

    //   sortData() {
    //       if(this.state.sortDirection === "descending") {
    //           this.setState({
    //               sortDirection: "ascending",
    //               data: this.props.score.sort(sortAscending)
    //           });
    //       } else {
    //           this.setState({
    //               sortDirection: "descending",
    //               data: this.props.score.sort(sortDescending)
    //           });
    //       }
    //   }

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
                                <ul>
                                    { this.state.users.map(user => <li>{user.name}</li>)}
                                </ul>
                                <div className="panel panel-default p50 uth-panel">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Total Score</th>
                                                <th>Overall Rank</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.users.map(user =>
                                            <tr key={user.id}>
                                            <td>{user.User.firstname}{user.User.lastname}</td>
                                            <td>{user.score} </td>
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
