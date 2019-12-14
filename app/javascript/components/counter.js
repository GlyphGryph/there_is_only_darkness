import React from 'react';
import {connect} from 'react-redux';
import  * as Action from '../actions';

class Counter extends React.Component {
  render(){
    return (
      <div>
        <h2>Counter V2</h2>
        <div>
          <button onClick={()=>{this.props.decrement(5)}}>-5</button>
          <button onClick={()=>{this.props.decrement(1)}}>-</button>
          <span>{this.props.count}</span>
          <button onClick={()=>{this.props.increment(1)}}>+</button>
          <button onClick={()=>{this.props.increment(5)}}>+5</button>
          <button onClick={this.props.reset}>0</button>
        </div>
      </div>
    )
  };
}

const mapDispatchToProps = {
  increment: Action.increment,
  decrement: Action.decrement,
  reset: Action.reset
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
