import React from 'react';
import {connect} from 'react-redux';
import Activity from './activity';

class Region extends React.Component {
  render(){
    return (
      <div id='region'>
        <div>
          {this.props.book.map((page, index) =>
            <div key={index}>{page.text}</div>
          )}
        </div>
        
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
    book: state.server.region.book,
    activities: state.server.region.activities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Region);
