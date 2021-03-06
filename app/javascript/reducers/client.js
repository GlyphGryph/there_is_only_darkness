import * as Action from '../actions/constants'

const initialState = {
  stateLoaded: false,
  error: false,
  view: 'region',
  heart_tutorial_progression: 0,
  selected_chamber: null
}

const clientReducer = (state=initialState, action)=>{
  switch(action.type){
    case Action.LOAD_INITIAL_STATE:
      return {
        ...state,
        stateLoaded: true
      }
    case Action.CREATE_WORLD_REQUEST:
      return {
        ...initialState,
        stateLoaded: true
      }
    case Action.API_REQUEST_FAILURE:
      return {
        ...state,
        error: true
      }
    case Action.SWITCH_TO_VIEW:
      return {
        ...state,
        view: action.view
      }
    case Action.SELECT_CHAMBER:
      return {
        ...state,
        selectedChamber: action.selectedChamber
      }
    default:
      return state
  }
};

export default clientReducer;
