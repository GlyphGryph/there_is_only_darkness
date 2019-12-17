import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';

import StartMenu from './start_menu';

const store = configureStore();

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=> <StartMenu/>}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App
