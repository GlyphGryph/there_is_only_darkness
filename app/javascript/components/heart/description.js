import React from 'react';
import {connect} from 'react-redux';

class HeartDescription extends React.Component {
  render(){
    return (
      <div>Your heart is still and quiet</div>
    )
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state){
  return {
    heart: state.server.character.heart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeartDescription);
