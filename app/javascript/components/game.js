import React from 'react'
import {connect} from 'react-redux';
import StartMenu from './start_menu';
import WorldMenu from './world_menu';
import Region from './region';
import Events from './events';
import * as Action from '../actions/index';

const Heart = ()=> (<div>HEART PLACEHOLDER</div>)

const RegionView = ()=>(<div className='view'><Events /><Region /></div>)
const HeartView = ()=>(<div className='view'><Heart /></div>)

const ErrorComponent = ()=>(
  <div id='error'>
    It broke
  </div>
)

const GameWrapper = (props)=>(
  <div id='game'>
    {props.children}
  </div>
)

class Game extends React.Component {
  componentDidMount(){
    this.props.loadInitialState()
  }

  render(){
    if(this.props.error){
       return (<ErrorComponent />)
    }else if(!this.props.stateLoaded){
      return (<GameWrapper>
        <div id='text-body'>
          Game Loading...
        </div>
      </GameWrapper>)
    }else if(!this.props.worldExists){
      return (<GameWrapper><StartMenu /></GameWrapper>)
    }else if(this.props.view=='region'){
      return (
        <GameWrapper>
          <WorldMenu />
          <RegionView />
        </GameWrapper>
      )
    }else if(this.props.view=='heart'){
      return (
        <GameWrapper>
          <WorldMenu />
          <HeartView />
        </GameWrapper>
      )
    }else{
      return (<ErrorComponent />)
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
    character: state.server.character,
    view: state.client.view
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
