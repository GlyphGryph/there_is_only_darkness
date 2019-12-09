import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import configureStore from '../configureStore'

import Splash from './splash'
import Counter from './counter'

const store = configureStore();

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={()=> <Splash/>}/>
          <Route exact path="/second" render={()=> "Second!"}/>
          <Route exact path="/counter" render={()=> <Counter/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
