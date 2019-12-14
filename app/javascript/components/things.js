import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../actions';

const Thing = ({thing})=>{
  return (
    <li>{thing.name} - {thing.description}</li>
  );
};

class Things extends React.Component {
  render(){
    return (
      <div>
        <h1>"Things Page!"</h1>
        <ul>
          {this.props.things.map((thing) =>
            <Thing thing={thing} key={thing.id}/>
          )}
        </ul>
        <button className="getThingsButton" onClick={()=>this.props.getThings()}>
          Get Things
        </button>
      </div>
    );
  };
}

const mapDispatchToProps = {
  getThings: Action.getThings
}

function mapStateToProps(state){
  return {
    things: state.things
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Things);
