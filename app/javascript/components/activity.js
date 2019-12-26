import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../actions/index';


class Activity extends React.Component {
  constructor(props) {
    super(props);
    let id = this.props.activity
    let name = "Unknown"

    switch(id){
      case "walk":
        name = "Walk Through Darkness"
        break;
      case "heart":
        name = "Enter Heart"
        break;
    }
    this.state = {
      id,
      name
    };
  }

  className(value){
    return `activity ${value}-activity`
  }
  
  render(){
    return (
      <button
        onClick={()=>{this.props.selectActivity(this.state.id)}}
        className={this.className(this.state.id)}
      >
        {this.state.name}
      </button>
    )
  }
}

const mapDispatchToProps = {
  selectActivity: Action.selectActivity
}

function mapStateToProps(state){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
