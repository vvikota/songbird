import React from "react";
import "./current-question.css";
import AudioPlayer from "../player/player";

import altPic from '../../assets/images/alt_bird.jpg';

const CurrentQuestion = (props) => {
  // console.log(props)
  const {
    correctAnswer,
    isCorrectAnswer,
    isPlaying,
    onPlayButtonClick,
    // src
  } = props;

  const src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`
  // console.log(src);

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
        <AudioPlayer 
          isPlaying = {isPlaying}
          onPlayButtonClick = {onPlayButtonClick}
          src = {src}
        />
      </div>
    </div>

  </section>
}

export default CurrentQuestion;