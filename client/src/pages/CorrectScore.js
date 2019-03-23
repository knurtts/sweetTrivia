import React, {Component} from "react";
import "./QuizLoop/QuizLoop.css";


class CorrectScore extends Component {

    render() {
        return (<>
            <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* User Answer Component */}
                        <div className="card blue">
                            <div className="card-content white-text" id="answerCard">
                                <span className="card-title"><h5>User Answer:</h5></span>
                                <div className="card-panel yellow darken-4">
                                    <span className="white-text">
                                        The Duke
                                    </span>
                                </div>
                            </div>
                        </div>

                        <br/>
                        
                        {/* Correct Answer Component */}
                        <div className="card blue">
                            <div className="card-content white-text" id="correctAnswerCard">
                                <span className="card-title"><h5>Correct Answer:</h5></span>
                                <div className="card-panel yellow darken-4">
                                    <span className="white-text">
                                        7
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col s8 push-s2">
                            <h5 id="totalScore">Score: 45</h5>
                            <br />
                            <h5 id="playerRank">Your Rank: 8</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>);
    }
}

export default CorrectScore;
