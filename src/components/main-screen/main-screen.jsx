import React from "react";
import './main-screen.css';

import Header from '../header/header.jsx';
import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";

const MainScreen = (props) => {
  const {
    questions,
    currenCategory,
    score,
    isCorrectAnswer,
    isStartLevel,
    onVariantClick,
    activeAnswer,
    correctAnswer,
  } = props;
  // console.log(questions)

  const categories = questions.map(question => question.category);
  const dataCurrentQuestion = questions[currenCategory].data;
  const currentAnswerVariants = dataCurrentQuestion.map(answer => answer.name)
  
  // let rand = Math.floor(Math.random() * 6);
  // let currentAnswerData = dataCurrentQuestion[rand]
  // console.log(activeAnswer)
  // console.log(currentAnswerData)

  let activeAnswerData = dataCurrentQuestion.filter(item => item.name === activeAnswer)[0];
  // console.log(currentAnswerVariants)

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
        currentAnswerVariants={currentAnswerVariants}
        onVariantClick={onVariantClick}
      />
      <BirdDescription 
        activeAnswerData={activeAnswerData}
        isStartLevel={isStartLevel}
      />
    </section>
    <button className="next-level-button">Next level </button>
  </>
}

export default MainScreen;