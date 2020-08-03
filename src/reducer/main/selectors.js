import NameSpace from "../name-spaces";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.MAIN;

export const getQuestions = (state) => {
  return state[NAME_SPACE].questions;
};

export const getCategories = createSelector(
  getQuestions,
  (questions) => questions.map(question => question.category)
)

export const getCurrenCategory = (state) => {
  return state[NAME_SPACE].currenCategory;
};

export const getDataCurrentQuestion = createSelector(
  getQuestions,
  getCurrenCategory,
  (rezultOne, rezultTwo) => {
    return rezultOne[rezultTwo].data;
  }
)

export const getCurrentAnswerVariants = createSelector(
  getDataCurrentQuestion,
  (data) => data.map(answer => answer.name)
)


export const getActiveAnswer = (state) => {
  return state[NAME_SPACE].activeAnswer;
};

export const getActiveAnswerData = createSelector(
  getDataCurrentQuestion,
  getActiveAnswer,
  (rezultOne, rezultTwo) => {
    return rezultOne.filter(
      item => item.name === rezultTwo)[0];
  }
)

export const getScore = (state) => {
  return state[NAME_SPACE].score;
};

export const getIsCorrectAnswer = (state) => {
  return state[NAME_SPACE].isCorrectAnswer;
};

export const getIsStartLevel = (state) => {
  return state[NAME_SPACE].isStartLevel;
};


export const getCorrectAnswer = (state) => {
  return state[NAME_SPACE].correctAnswer;
};
