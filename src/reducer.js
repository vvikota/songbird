import questions from "./mock/mockData";

const initialState = {
  currenQuestion: 0,
  questions: [],
  score: 0,
  isCorrectAnswer: false,
}

const ActionCreator = {
  changeCurrentQuestion: () => ({
    type: `CHANGE_CURRENT_QUESTION`,
    payload: 1,
  }),

  loadQuestions: () => ({
    type: `LOAD_QUESTIONS`,
    payload: questions,
  }),

}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case `CHANGE_CURRENT_QUESTION`: return Object.assign({}, state, {
      currenQuestion: state.currenQuestion + action.payload
    });

    case `LOAD_QUESTIONS`: return Object.assign({}, state, {
      questions: action.payload
    });

    default: 
      // do nothing
  }

  return state;
};

export {reducer, ActionCreator};