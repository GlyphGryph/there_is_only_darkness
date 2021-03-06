import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from 'reducers/index';

const initialState = {
  client: {},
  server: {}
};

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
