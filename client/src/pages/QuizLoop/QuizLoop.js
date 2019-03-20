import React, {Component} from "react";


class QuizLoop extends Component {
    render() {
        return (<>
            <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* Timer Component */}
                        <div><h1>Insert timer</h1></div>

                        {/* Question Card */}
                        <div className="card blue">
                            <div className="card-content white-text">
                                <span className="card-title">
                                    <h4>Question 1:</h4>
                                </span>
                                <p>
                                    How much wood could a woodchuck chuck, if a woodchuck could chuck wood?
                                </p>
                            </div>
                        </div>

                        <br/>
                        
                        {/* Question Cards */}
                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                7
                            </span>
                        </div>

                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                14 pounds
                            </span>
                        </div>

                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                No one has ever seen a woodchuck
                            </span>
                        </div>

                        <div className="card-panel yellow darken-4">
                            <span className="white-text">
                                What is a woodchuck? Why would it chuck wood? What is chucking?
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>);
    }
}

export default QuizLoop;