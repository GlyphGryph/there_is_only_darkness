import React from 'react'
import {connect} from 'react-redux';
import * as Action from '../actions/index';

class StartMenu extends React.Component {
  render(){
    return (
      <div id='start-menu'>
        <button className="create-world-button" onClick={this.props.createWorld}>
          Create World
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createWorld: Action.createWorld
}

function mapStateToProps(state){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
