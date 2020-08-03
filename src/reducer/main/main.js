import questions from "../../mock/mockData";

const initialState = {
  questions: [],
  currenCategory: 0,
  score: 0,
  isCorrectAnswer: false,
  isStartLevel: true,
  activeAnswer: ``,
  correctAnswer: ``,
}

const ActionType = {
  CHANGE_CURRENT_CATEGORY: `CHANGE_CURRENT_CATEGORY`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  LOAD_CORRECT_ANSWER: `LOAD_CORRECT_ANSWER`,
  CHOOSE_VARIANT: `CHOOSE_VARIAN`,
  CHANGE_ANSWER_STATUS: `CHANGE_ANSWER_STATUS`,
  INCREMENT_SCORE: `INCREMENT_SCORE`,
}

const ActionCreator = {
  changeCurrentCategory: () => ({
    type: ActionType.CHANGE_CURRENT_CATEGORY,
    payload: 1,
  }),

  loadQuestions: () => ({
    type: ActionType.LOAD_QUESTIONS,
    payload: questions,
  }),

  loadCorrectAnswer: (data, currenCategory) => {
    const curentCategoryData = data[currenCategory].data; 
    const random = Math.floor(Math.random() * 6);
    const currentAnswerData = curentCategoryData[random];

    return {
      type: ActionType.LOAD_CORRECT_ANSWER,
      payload: currentAnswerData,
    }
  },

  chooseVariant: (answer) => ({
    type: ActionType.CHOOSE_VARIANT,
    payload: answer,
  }),

  changeAnswerStatus: () => ({
    type: ActionType.CHANGE_ANSWER_STATUS,
  }),

  incrementScore: (numberOfPoints) => ({
    type: ActionType.INCREMENT_SCORE,
    payload: numberOfPoints,
  })
}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CATEGORY: return Object.assign({}, state, {
      currenCategory: state.currenCategory + action.payload,
      isStartLevel: true,
      isCorrectAnswer: false,
    });

    case ActionType.LOAD_QUESTIONS: return Object.assign({}, state, {
      questions: action.payload
    });

    case ActionType.CHOOSE_VARIANT: return Object.assign({}, state, {
      isStartLevel: false,
      activeAnswer: action.payload
    });

    case ActionType.LOAD_CORRECT_ANSWER: return Object.assign({}, state, {
      correctAnswer: action.payload
    });

    case ActionType.CHANGE_ANSWER_STATUS: return Object.assign({}, state, {
      isCorrectAnswer: true
    });

    case ActionType.INCREMENT_SCORE: return Object.assign({}, state, {
      score: state.score + action.payload,
    });

    default: 
      // do nothing
  }

  return state;
};

export {reducer, ActionCreator};