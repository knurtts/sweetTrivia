import React, {Component} from "react";
import "./QuizLoop/QuizLoop.css";


class FinalRank extends Component {

    render() {
        return (<>
            <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* Leaderboard Component */}
                        <div><h1>Leaderboard</h1></div>

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
                        
                        {/* SignOut Component */}
                        <div className="card blue">
                            <div className="card-content white-text" id="signoutCard">
                            <a class="waves-effect waves-light btn-large">Sign Out</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>);
    }
}

export default FinalRank;
