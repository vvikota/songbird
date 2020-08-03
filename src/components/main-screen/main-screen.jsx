import React from "react";
import './main-screen.css';

import Header from '../header/header.jsx';
import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";

const MainScreen = (props) => {
  // console.log(props)
  const {
    // questions,
    currenCategory,
    score,
    isCorrectAnswer,
    isStartLevel,
    onVariantClick,
    // activeAnswer,
    correctAnswer,
    categories,
    // currenCategoryData,
    answerVariants,
    activeAnswerData
  } = props;
  // console.log(currenCategoryData)
  const activeClassForButton = isCorrectAnswer ? ` next-level-button--active` : ``;

  return <>
    <Header 
      categories={categories}
      currenCategory={currenCategory}  
      score={score}
    />
    <CurrentQuestion 
      correctAnswer={correctAnswer}
      isCorrectAnswer={isCorrectAnswer}
    />
    <section className="answer-section">
      <Answers 
        answerVariants={answerVariants}
        onVariantClick={onVariantClick}
      />
      <BirdDescription 
        activeAnswerData={activeAnswerData}
        isStartLevel={isStartLevel}
      />
    </section>
    <button
      className={`next-level-button` + activeClassForButton}
    >
      Next level
    </button>
  </>
}

export default MainScreen;