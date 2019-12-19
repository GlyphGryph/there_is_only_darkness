import React from 'react'
import {connect} from 'react-redux';
import * as Action from '../actions/index';

class WorldMenu extends React.Component {

  render(){
    return (
      <div id='start-menu'>
        <button className="destroy-world-button" onClick={this.props.destroyWorld}>
          Destroy World
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  destroyWorld: Action.destroyWorld
}

function mapStateToProps(state){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMenu);
