import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return (
    <div><h5 className="question">{props.content}</h5></div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
