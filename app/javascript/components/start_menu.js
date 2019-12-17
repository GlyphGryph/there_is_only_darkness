import React from 'react'
import {connect} from 'react-redux';
import * as MenuActions from '../actions/menu';

class StartMenu extends React.Component {
  render(){
    return (
      <div>
        <button className="CreateWorldButton" onClick={this.props.createWorld}>
          Create World
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createWorld: MenuActions.createWorld
}

function mapStateToProps(state){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
