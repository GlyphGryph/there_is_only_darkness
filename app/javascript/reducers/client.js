import * as Action from '../actions/index'

const initialState = {
  stateLoaded: false,
  error: false
}

const clientReducer = (state=initialState, action)=>{
  switch(action.type){
    case Action.LOAD_INITIAL_STATE:
      return {
        ...state,
        stateLoaded: true
      }
    case Action.CREATE_WORLD_FAILURE:
      return {
        ...state,
        error: true
      }
    case Action.DESTROY_WORLD_FAILURE:
      return {
        ...state,
        error: true
      }
    case Action.SELECT_ACTIVITY_FAILURE:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
};

export default clientReducer;
