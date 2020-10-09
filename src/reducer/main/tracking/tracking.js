
const initialState = {
  gameScore: [],
}

const ActionType = {
  SAVE_RESULT_TO_GAME_SCORE: `SAVE_RESULT_TO_GAME_SCORE`,
}

const ActionCreator = {
  saveResultToGameScore: (userName, currentScore) => {
    
    let newScore = initialState.gameScore
    newScore.push({name: userName, score: currentScore})

    return {
      type: ActionType.SAVE_RESULT_TO_GAME_SCORE,
      payload: newScore
    }
  },
}

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case ActionType.SAVE_RESULT_TO_GAME_SCORE: return Object.assign({}, state, {
      gameScore: action.payload
    })

    default: 
      // do nothing
  }
  return state;
};

export {reducer, ActionCreator};