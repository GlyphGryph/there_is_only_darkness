import React from 'react';
import {connect} from 'react-redux';
import * as Action from '../../actions/index';
import HeartChamber from './chamber';


class HeartChambers extends React.Component {
  render(){
    let columns = Math.floor(Math.sqrt(this.props.heart.length));
    return (
      <div>
        {this.props.heart.map((chamber, index) =>
          <React.Fragment key={index}>
            <HeartChamber id={index} />
            { ( (index % columns) == (columns-1)) ? <br /> : ''}
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state){
  return {
    selectedChamber: state.client.selectedChamber,
    heart: state.server.character.heart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeartChambers);
