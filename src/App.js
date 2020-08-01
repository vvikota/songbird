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
  currenQuestion: state.currenQuestion,
  questions: state.questions,
  score: state.score,
  isCorrectAnswer: state.isCorrectAnswer,
});

const mapDispatchToProps = (dispatch) => ({
  onNextLevelClick: () => dispatch(ActionCreator.changeCurrentQuestion()),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);