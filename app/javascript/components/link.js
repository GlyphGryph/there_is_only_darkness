import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../actions/index';

class Link extends React.Component {
  render(){
    return (
      <span className="page-link">[{this.props.number}] {this.props.text}</span>
    )
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
