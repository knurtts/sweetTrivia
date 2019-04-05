import React, {Component} from "react";
import CountDownTest from "../../components/timer";
import axios from "axios";
import io from "socket.io-client";
import quizQuestions from '../../api/quizQuestions';
import Quiz from "../../components/Quiz";
import Result from "../../components/Result";
import Answered from "./Answered";

// const socketUrl = "https://gamedaytrivia.herokuapp.com";
const socketUrl = "http://localhost:3001";

class QuizLoop extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            counter: 0,
          questionId: 1,
          question: '',
          answerOptions: [],
          answer: '',
          answersCount: {
            Right: 0,
            Wrong: 0,
            Maybe: 0
          },
          result: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentWillMount() {
        this.initSocket();
        const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  
      
        this.setState({
          question: quizQuestions[0].question,
          answerOptions: shuffledAnswerOptions[0]
        });
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

    

      shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      };
    
      handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
    
        if (this.state.questionId < quizQuestions.length) {
          setTimeout(() => this.setNextQuestion(<Answered/>), 300);
        } else {
          setTimeout(() => this.setResults(this.getResults()), 300);
        }
      }
    
      setUserAnswer(answer) {
        this.setState((state, props) => ({
          answersCount: {
            ...state.answersCount,
            [answer]: state.answersCount[answer] + 1
          },
          answer: answer
        }));
      }
    
      setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
    
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizQuestions[counter].question,
          answerOptions: quizQuestions[counter].answers,
          answer: ''
        });
      }
    
      getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map(key => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);
    
        return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
      }
    
      setResults(result) {
        if (result.length === 1) {
          this.setState({ result: result[0] });
        } else {
          this.setState({ result: 'Undetermined' });
        }
      }
      renderQuiz() {
        return (
          <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
          />
        );
      }
    
      renderResult() {
        return <Result quizResult={this.state.result} />;
      }

    render() {
        return (<>
          <nav>
            <div className="nav-wrapper" >
            
  </div>
        </nav>

           
        {/*Pulls in the quiz and answer components */}
        {this.state.result ? this.renderResult() : this.renderQuiz()}  

            
            
        </>);

        
    }
}

export default QuizLoop;