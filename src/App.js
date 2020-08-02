import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "./reducer";

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
  currenCategory: state.currenCategory,
  questions: state.questions,
  score: state.score,
  isCorrectAnswer: state.isCorrectAnswer,
  isStartLevel: state.isStartLevel,
  activeAnswer: state.activeAnswer,
  correctAnswer: state.correctAnswer,
});

const mapDispatchToProps = (dispatch) => ({
  onNextLevelClick: () => dispatch(ActionCreator.changeCurrentQuestion()),
  onVariantClick: (answer) => dispatch(ActionCreator.chooseVariant(answer))
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);