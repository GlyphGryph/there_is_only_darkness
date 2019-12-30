import React from 'react';
import {connect} from 'react-redux';

class HeartSelection extends React.Component {
  render(){
    return (<div>You have entered your many chambered heart.</div>)
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state){
  return {
    selected_chamber: state.client.selected_chamber,
    heart: state.server.character.heart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeartSelection);
