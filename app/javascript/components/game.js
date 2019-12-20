import React from 'react'
import {connect} from 'react-redux';
import StartMenu from './start_menu';
import WorldMenu from './world_menu';
import Region from './region';
import * as Action from '../actions/index';

const World = (props)=>(
  <div id='World'>
    <WorldMenu />
    <Region />
  </div>
)

const LoadedGame = (props)=>{
  return (
    <div className='wrapper'>
      {props.worldExists ? <World /> : <StartMenu />}
    </div>
  )
}
const UnloadedGame = (props)=>(
  <div id='text-body'>
    Game Loading...
  </div>
)

class Game extends React.Component {
  componentDidMount(){
    this.props.loadInitialState()
  }

  render(){
    return (
      <div id='game'>
        {this.props.stateLoaded ? <LoadedGame worldExists={this.props.worldExists} /> : <UnloadedGame />}
      </div>
    )
  }
}

const mapDispatchToProps = {
  loadInitialState: Action.loadInitialState
}

function mapStateToProps(state){
  return {
    stateLoaded: state.stateLoaded,
    worldExists: state.worldExists
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
