import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

const initialState = {
  things: [
    {id: 1, name: 'test_thing_1', description: "This is a test thing."}
  ],
  count: 0
};

function rootReducer(state=initialState, action){
  console.log(action.type);
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.amount
      };
    case 'DECREMENT':
      return {
        count: state.count - action.amount
      };
    case 'RESET':
      return {
        count: 0
      }
    case 'GET_THINGS_SUCCESS':
      return {
        things: action.things
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
