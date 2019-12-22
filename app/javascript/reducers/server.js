import * as Action from '../actions/index'

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
    case Action.CREATE_WORLD_SUCCESS:
      return {
        ...state,
        ...action.gameState
      }
    case Action.DESTROY_WORLD_SUCCESS:
      return {
        ...state,
        ...action.gameState
      }
    case Action.SELECT_ACTIVITY_SUCCESS:
      return {
        ...state,
        ...action.gameState
      }
    default:
      return state
  }
};

export default serverReducer;
