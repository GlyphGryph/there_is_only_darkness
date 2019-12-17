import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import * as Action from 'actions/menu'

const initialState = {
  world_exists: false
};

function rootReducer(state=initialState, action){
  console.log(action.type);
  switch(action.type){
    case Action.CREATE_WORLD_SUCCESS:
      return {
        ...state,
        world_exists: action.gameState.world_exists
      }
    default:
      return state
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}
