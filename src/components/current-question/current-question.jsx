import React from "react";
import "./current-question.css";
import AudioPlayer from "../player/player";

import altPic from '../../assets/images/alt_bird.jpg';

const CurrentQuestion = (props) => {
  // console.log(props)
  const {correctAnswer, isCorrectAnswer} = props;

  return <section className="current-question">
    <img
      className="current-question__img"
      src={isCorrectAnswer ? correctAnswer.image : altPic}
      alt="bird" 
    />
    <div className="current-question__player-block">
      <div className="current-question__player-title-wrapper">
        <h2 className="current-question__player-title">
          {isCorrectAnswer ? correctAnswer.name : `*****`}
        </h2>
      </div>
      
      <div className="current-question__player">
        <AudioPlayer />
      </div>
    </div>

  </section>
}

export default CurrentQuestion;