import React from "react";
import './main-screen.css';

import Header from '../header/header.jsx';
import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";

const MainScreen = (props) => {
  // console.log(props)
  const {questions, currenQuestion, score} = props;

  const categories = questions.map(question => question.category);
  // console.log(questions[])

  return <>
    <Header 
      categories={categories}
      currenQuestion={currenQuestion}  
      score={score}
    />
    <CurrentQuestion />
    <section className="answer-section">
      <Answers />
      <BirdDescription />
    </section>
    <button className="next-level-button">Next level </button>
  </>
}

export default MainScreen;