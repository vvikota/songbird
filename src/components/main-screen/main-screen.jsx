import React from "react";
import './main-screen.css';

import Header from '../header/header.jsx';
import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";

const MainScreen = () => {
  return <>
    <Header />
    <CurrentQuestion />
    <section className="answer-section">
      <Answers />
      <BirdDescription />
    </section>
    <button className="next-level-button">Next level </button>
  </>
}

export default MainScreen;