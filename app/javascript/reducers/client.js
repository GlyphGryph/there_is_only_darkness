import * as Action from '../actions/constants'

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
    case Action.API_REQUEST_FAILURE:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
};

export default clientReducer;
