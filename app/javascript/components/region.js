import React from 'react';
import {connect} from 'react-redux';
import Activity from './activity';
import {pageReader} from '../helpers/page_reader';


const ActivityBar = (props)=>{
  if(props.activities.length > 0){
    return (
      <div id='activity-bar'>
        <p>What can I do here?</p>
        {props.activities.map((activity) =>
          <Activity activity={activity} key={activity}/>
        )}
      </div>
    )
  } else {
    return null
  }
};

class Region extends React.Component {
  render(){
    return (
      <div id='region'>
        <div className='region-description'>
          {pageReader(this.props.page)}
        </div>
        
        <ActivityBar activities={this.props.activities}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state){
  return {
    page: state.server.region.page,
    activities: state.server.region.activities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Region);
