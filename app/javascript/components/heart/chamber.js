import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/index';

class HeartChamber extends React.Component {
  render(){
    const chamber = this.props.heart[this.props.id]
    return (
      <div className='heart-chamber' onClick={()=>{this.props.selectChamber(this.props.id)}}>
        {this.props.selectedChamber == this.props.id ? 'SELECTED!' : ''}
      </div>
    )
  }
}

const mapDispatchToProps = {
  selectChamber: Action.selectChamber
}

function mapStateToProps(state){
  return {
    selectedChamber: state.client.selectedChamber,
    heart: state.server.character.heart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeartChamber);
