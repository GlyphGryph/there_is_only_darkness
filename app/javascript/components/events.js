import React from 'react';
import {connect} from 'react-redux';

const Event = (props)=>(
  <div>
    {props.eve}
  </div>
);

class Events extends React.Component {
  render(){
    return (
      <div id='events'>
        {this.props.events.map((eve, key) =>
          <Event eve={eve} key={key} />
        )}
      </div>
    )
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state){
  return {
    events: state.server.character.events
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
