import React from 'react';
import {connect} from "react-redux";
import {getQuestions} from "./reducer/main/selectors";
import {getCurrenCategory} from "./reducer/main/selectors";
import {getScore} from "./reducer/main/selectors";
import {getIsCorrectAnswer} from "./reducer/main/selectors";
import {getIsStartLevel} from "./reducer/main/selectors";
import {getActiveAnswer} from "./reducer/main/selectors";
import {getCorrectAnswer} from "./reducer/main/selectors";
import {getCategories} from "./reducer/main/selectors";
import {getDataCurrentQuestion} from "./reducer/main/selectors";
import {getCurrentAnswerVariants} from "./reducer/main/selectors";
import {getActiveAnswerData} from "./reducer/main/selectors";
import {ActionCreator as MainActionCreator} from "./reducer/main/main";

import MainScreen from "./components/main-screen/main-screen.jsx";

function App(props) {
  // console.log(props)
  // const {questions} = props;

  return (
    <div className="App">
      <MainScreen
        {...props}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currenCategory: getCurrenCategory(state),
  currenCategoryData: getDataCurrentQuestion(state),
  answerVariants: getCurrentAnswerVariants(state),
  questions: getQuestions(state),
  score: getScore(state),
  isCorrectAnswer: getIsCorrectAnswer(state),
  isStartLevel: getIsStartLevel(state),
  activeAnswer: getActiveAnswer(state),
  correctAnswer: getCorrectAnswer(state),
  categories: getCategories(state),
  activeAnswerData: getActiveAnswerData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onVariantClick: (answer) => {
    dispatch(MainActionCreator.chooseVariant(answer))
  },

  changeAnswerStatus: () => {
    dispatch(MainActionCreator.changeAnswerStatus())
  },
  
  onNextLevelClick: (dataCurrentQuestion, currenCategory) => {
    dispatch(MainActionCreator.changeCurrentCategory())
    dispatch(MainActionCreator.loadCorrectAnswer(dataCurrentQuestion, currenCategory + 1))
  },


  getFirstCorrectAnswer: (questions, currenCategory) => {
    dispatch(MainActionCreator.loadCorrectAnswer(questions, currenCategory))
  },  

  incrementScore: (numberOfPoints) => {
    dispatch(MainActionCreator.incrementScore(numberOfPoints))
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);