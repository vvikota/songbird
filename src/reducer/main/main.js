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

  loadCorrectAnswer: (data, currenCategory) => {
    
    const curentCategoryData = data[currenCategory].data; 
    const random = Math.floor(Math.random() * 6);
    const currentAnswerData = curentCategoryData[random];

    return {
      type: `LOAD_CORRECT_ANSWER`,
      payload: currentAnswerData,
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
      currenCategory: state.currenCategory + action.payload,
      isStartLevel: true,
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