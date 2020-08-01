import React from "react";
import "./current-question.css";

import altPic from '../../assets/images/alt_bird.jpg';

const CurrentQuestion = (props) => {
  // console.log(props)
  const {currentAnswerData, isCorrectAnswer} = props;

  return <section className="current-question">
    <img
      className="current-question__img"
      src={isCorrectAnswer ? currentAnswerData.image : altPic}
      alt="bird" 
    />
    <div className="current-question__player-block">
      <div className="current-question__player-title-wrapper">
        <h2 className="current-question__player-title">
          {isCorrectAnswer ? currentAnswerData.name : `*****`}
        </h2>
      </div>
      
      <div className="current-question__player">
        Player
      </div>
    </div>

  </section>
}

export default CurrentQuestion;