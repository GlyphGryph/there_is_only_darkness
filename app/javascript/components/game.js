import React from 'react'
import {connect} from 'react-redux';
import StartMenu from './start_menu';
import WorldMenu from './world_menu';
import Region from './region';
import Events from './events';
import * as Action from '../actions/index';

const World = (props)=>(
  <div id='World'>
    <WorldMenu />
    <Events />
    <Region />
  </div>
);

const LoadedGame = (props)=>{
  return (
    <div className='wrapper'>
      {props.worldExists ? <World /> : <StartMenu />}
    </div>
  )
};

const UnloadedGame = (props)=>(
  <div id='text-body'>
    Game Loading...
  </div>
);

const ErrorComponent = ()=>(
  <div id='error'>
    It broke
  </div>
)

class Game extends React.Component {
  componentDidMount(){
    this.props.loadInitialState()
  }

  render(){
    if(this.props.error){
      return (
        <ErrorComponent />
      )
    }else{
      return (
        <div id='game'>
          {this.props.stateLoaded ? <LoadedGame worldExists={this.props.worldExists} /> : <UnloadedGame />}
        </div>
      )
    }
  }
}

const mapDispatchToProps = {
  loadInitialState: Action.loadInitialState
}

function mapStateToProps(state){
  return {
    stateLoaded: state.client.stateLoaded,
    error: state.client.error,
    worldExists: state.server.worldExists,
    character: state.server.character
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
