import questions from "../../mock/mockData";

const initialState = {
  questions: [],
  currenCategory: 0,
  score: 0,
  isCorrectAnswer: true,
  isStartLevel: true,
  activeAnswer: ``,
  correctAnswer: ``,
}

const ActionCreator = {
  changeCurrentCategory: () => ({
    type: `CHANGE_CURRENT_CATEGORY`,
    payload: 1,
  }),

  loadQuestions: () => ({
    type: `LOAD_QUESTIONS`,
    payload: questions,
  }),

  loadCorrectAnswer: () => {
    // console.log(initialState.currenCategory)
    const dataCurrentQuestion = questions[initialState.currenCategory].data;
    const rand = Math.floor(Math.random() * 6);
    const currentAnswerData = dataCurrentQuestion[rand]

    return {
      type: `LOAD_CORRECT_ANSWER`,
      payload: currentAnswerData,
      // payload: 1,
    }
  },

  chooseVariant: (answer) => ({
    type: `CHOOSE_VARIANT`,
    payload: answer,
  }),

}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case `CHANGE_CURRENT_CATEGORY`: return Object.assign({}, state, {
      currenCategory: state.currenCategory + action.payload
    });

    case `LOAD_QUESTIONS`: return Object.assign({}, state, {
      questions: action.payload
    });

    case `CHOOSE_VARIANT`: return Object.assign({}, state, {
      isStartLevel: false,
      activeAnswer: action.payload
    });

    case `LOAD_CORRECT_ANSWER`: return Object.assign({}, state, {
      correctAnswer: action.payload
    });

    default: 
      // do nothing
  }

  return state;
};

export {reducer, ActionCreator};