import React from "react";
import './main-screen.css';

import Header from '../header/header.jsx';
import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";

const MainScreen = (props) => {
  const {questions, currenQuestion, score, isCorrectAnswer} = props;
  // console.log(questions)

  const categories = questions.map(question => question.category);
  let dataCurrentQuestions = questions[currenQuestion].data;
  
  let rand = Math.floor(Math.random() * 6);
  let currentAnswerData = dataCurrentQuestions[rand]
  // console.log(currentAnswer)

  return <>
    <Header 
      categories={categories}
      currenQuestion={currenQuestion}  
      score={score}
    />
    <CurrentQuestion 
      currentAnswerData={currentAnswerData}
      isCorrectAnswer={isCorrectAnswer}
    />
    <section className="answer-section">
      <Answers 
        dataCurrentQuestions={dataCurrentQuestions}
      />
      <BirdDescription 
        currentAnswerData={currentAnswerData}
      />
    </section>
    <button className="next-level-button">Next level </button>
  </>
}

export default MainScreen;