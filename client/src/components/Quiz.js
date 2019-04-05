import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Questions';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import { CSSTransitionGroup } from 'react-transition-group';
import CountDownTest from "../components/timer";


function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }
    return (
        <CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >

        {/* Timer Component */}
           <div><h1><CountDownTest /></h1></div>

        <div className="quiz">
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question content={props.question} />
          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
            </CSSTransitionGroup>
    );
  }
  
  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  
  export default Quiz;