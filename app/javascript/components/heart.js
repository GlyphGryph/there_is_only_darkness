import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../actions/index';
import {pageReader} from '../helpers/page_reader';

class Heart extends React.Component {
  render(){
    return (
      <div id='heart'>
        Heart Placeholder Text
        <button
          onClick={()=>{this.props.switchToView('region')}}
          className='exit-heart-button'
        >
          Exit Heart
        </button>

      </div>
    )
  }
}

const mapDispatchToProps = {
  switchToView: Action.switchToView
}

function mapStateToProps(state){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Heart);
