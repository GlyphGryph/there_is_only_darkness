import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../actions/index';
import {pageReader} from '../helpers/page_reader';

class HeartDescription extends React.Component {
  render(){
    return (
      <div>
        <div>You have entered your many chambered heart.</div>
        <div>Your heart is still and quiet</div>
      </div>
    )
  }
}

class Heart extends React.Component {
  render(){
    return (
      <div id='heart'>
        <HeartDescription />
        <div>
          HEART GRID - Floor(sqrt(# of chambers)) width, then as tall as needed
        </div>
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
