import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../actions/index';
import HeartDescription from './heart/description';
import HeartSelection from './heart/selection';
import HeartChambers from './heart/chambers';

class Heart extends React.Component {
  render(){
    return (
      <div id='heart'>
        <HeartDescription />
        <HeartChambers />
        <HeartSelection />
        <div>
          <button
            onClick={()=>{this.props.switchToView('region')}}
            className='exit-heart-button'
          >
            Exit Heart
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  switchToView: Action.switchToView
}

function mapStateToProps(state){
  return {
    tutorial_progression: state.client.tutorial_progression,
    tutorial_complete: state.server.character.heart_tutorial_complete,
    heart: state.server.character.heart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Heart);
