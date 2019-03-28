import React from "react";

function QuestionCard (props) {
    return(
        <div className="card blue">
            <div className="card-content white-text">
                <span className="card-title">
                    <h4>Question</h4>
                </span>
                <p>
                    {props.question}
                </p>
            </div>
        </div>
    )
}

export default QuestionCard;