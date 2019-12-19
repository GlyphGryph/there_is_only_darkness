import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';

import Game from './game';

const initialState = {
  stateLoaded: false
};
const store = configureStore(initialState);

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=> <Game/>}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
