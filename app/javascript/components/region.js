import React from 'react';
import {connect} from 'react-redux';
import Activity from './activity';

class Region extends React.Component {
  render(){
    return (
      <div id='region'>
        <p>{this.props.description}</p>
        
        <div id='activity-bar'>
          <p>What can I do here?</p>
          {this.props.activities.map((activity) =>
            <Activity activity={activity} key={activity}/>
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state){
  return {
    description: state.server.region.description,
    activities: state.server.region.activities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Region);
