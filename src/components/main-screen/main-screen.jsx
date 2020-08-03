import React from "react";
import './main-screen.css';

import Header from '../header/header.jsx';
import CurrentQuestion from "../current-question/current-question.jsx";
import Answers from "../answers/answers.jsx";
import BirdDescription from "../bird-description/bird-description.jsx";

class MainScreen extends React.PureComponent {

  render() {
    const {
      questions,
      currenCategory,
      score,
      isCorrectAnswer,
      isStartLevel,
      onVariantClick,
      correctAnswer,
      categories,
      answerVariants,
      activeAnswerData,
      onNextLevelClick,
    } = this.props;

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
        onClick={() => onNextLevelClick(questions, currenCategory)}
      >
        Next level
      </button>
    </>
  }

  componentDidMount(){
    this.props.getFirstCorrectAnswer(this.props.questions, 0)
  }
}

export default MainScreen;