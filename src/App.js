import React from 'react';
import {connect} from "react-redux";
import {getQuestions} from "./reducer/main/selectors";
import {getCurrenCategory} from "./reducer/main/selectors";
import {getIsCorrectAnswer} from "./reducer/main/selectors";
import {getCategories} from "./reducer/main/selectors";
import {ActionCreator} from "./reducer/main/main";

import MainScreen from "./components/main-screen/main-screen.jsx";

function App(props) {

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
  questions: getQuestions(state),
  isCorrectAnswer: getIsCorrectAnswer(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  
  onNextLevelClick: (dataCurrentQuestion, currenCategory) => {
    dispatch(ActionCreator.changeCurrentCategory())
    dispatch(ActionCreator.loadCorrectAnswer(dataCurrentQuestion, currenCategory + 1))
  },

  getFirstCorrectAnswer: (questions, currenCategory) => {
    dispatch(ActionCreator.loadCorrectAnswer(questions, currenCategory))
  },  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);