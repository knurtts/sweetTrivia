import React, {Component} from "react";
import CountDownTest from "../../components/timer";
import axios from "axios";
import io from "socket.io-client";
let socket = io(`http://localhost:3001`);


class QuizLoop extends Component {
    
    state = {
        questions: []
    };

    getQuestion = () => {
        axios.get("/api/getquestions").then((questions) => {
                console.log(questions.data);
            });
    };

    // componentDidMount() {
    //     socket.on("event", data => {
    //         console.log(data);
    //     });
    // };


    render() {
        return (<>
            <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* Timer Component */}
                        <div><h1><CountDownTest/></h1></div>

                        {/* Question Card */}
                        

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