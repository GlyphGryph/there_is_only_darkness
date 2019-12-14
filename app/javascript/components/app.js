import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';

import Splash from './splash';
import Counter from './counter';
import Greeter from './greeter';
import Things from './things';

const store = configureStore();

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=> <Splash/>}/>
            <Route exact path="/greeter" render={()=> <Greeter name='Joe' />}/>
            <Route exact path="/counter" render={()=> <Counter/>}/>
            <Route exact path="/things" render={()=> <Things/>}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App
