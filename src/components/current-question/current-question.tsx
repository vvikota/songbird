import * as React from "react";
import "./current-question.css";
import AudioPlayer from "../player/player";
import {connect} from "react-redux";
import {getCorrectAnswer} from "../../reducer/main/selectors";
import {getIsCorrectAnswer} from "../../reducer/main/selectors";
import {getIsStartLevel} from "../../reducer/main/selectors";
import {CategoryQuestions} from "../../types";

import defaultImg from '../../assets/images/default.jpg';

interface CurrentQuestionProps {
  isPlaying: boolean;
  isCorrectAnswer: boolean;
  onPlayButtonClick: () => void;
  correctAnswer: CategoryQuestions
}

const CurrentQuestion = (props: CurrentQuestionProps) => {
  const {
    correctAnswer,
    isCorrectAnswer,
    isPlaying,
    onPlayButtonClick,
  } = props;

  const src = correctAnswer.audio

  return (
    <section className="current-question">
      <img
        className="current-question__img"
        src={isCorrectAnswer ? correctAnswer.image : defaultImg}
        alt="bird" 
      />
      <div className="current-question__player-block">
        <div className="current-question__player-title-wrapper">
          <h2 className="current-question__player-title">
            {isCorrectAnswer ? correctAnswer.name : `*****`}
          </h2>
        </div>
        
        <div className="current-question__player">
          { src ? (
            <AudioPlayer 
              isPlaying = {isPlaying}
              onPlayButtonClick = {onPlayButtonClick}
              src = {src}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state: any, ownProps: any) => Object.assign({}, ownProps, {
  correctAnswer: getCorrectAnswer(state),
  isCorrectAnswer: getIsCorrectAnswer(state),
  isStartLevel: getIsStartLevel(state),
});

export default connect(mapStateToProps)(CurrentQuestion);