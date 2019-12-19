import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import * as Action from 'actions/index'

function rootReducer(state=initialState, action){
  console.log(action.type);
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
    default:
      return state
  }
}

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}
