import React, {Component} from "react";
import CountDownTest from "../../components/timer";
import axios from "axios";
import io from "socket.io-client";

// const socketUrl = "https://gamedaytrivia.herokuapp.com";
const socketUrl = "http://localhost:3001";

class QuizLoop extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            questions: null
        }
    }

    componentWillMount() {
        this.initSocket();
    }

    componentDidMount() {
        const { socket } = this.state;

        // socket.emit("userConnected")
        axios.get("/api/getquestions")
            .then(data => {
                console.log("questions", data);
            });

        this.getQuestions();

    }

    initSocket = () => {
        const socket = io(socketUrl);
        socket.on("connect", () => {
            console.log("CONNECTED");
        });

        this.setState({socket});
    }

    getQuestions = () => {
        const { socket } = this.state;
        socket.on("gotquestions", (questions) => {
            // console.log("Questions:",questions);
            console.log("placeholder");
            // this.setState({questions});
        });

        socket.on("answerscreen", () => {
            console.log("Answer signal...");
        });

        socket.on("nextquestion", () => {
            console.log("Question signal...")
        });

        socket.on("gotoleaderboards", () => {
            console.log("End of game");
        });
    }
    

    render() {
        return (<>
          <nav>
            <div className="nav-wrapper" >
                
           

           

            
  </div>
        </nav>
        
            <div className="container">
                <div className="row">
                    <div className="col s12">

                        {/* Timer Component */}
                        <div><h1><CountDownTest socket={this.state.socket}/></h1></div>

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