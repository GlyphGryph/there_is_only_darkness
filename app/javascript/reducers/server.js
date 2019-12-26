import * as Action from '../actions/constants'

const initialState = {
  character: {},
  world: {},
  region: {}
}

const serverReducer = (state=initialState, action)=>{
  switch(action.type){
    case Action.LOAD_INITIAL_STATE:
      return {
        ...action.gameState,
        stateLoaded: true
      }
    case Action.API_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.gameState
      }
    default:
      return state
  }
};

export default serverReducer;
