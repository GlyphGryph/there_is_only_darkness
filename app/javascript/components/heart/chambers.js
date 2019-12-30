import React from 'react';
import {connect} from 'react-redux';

const HeartChamber = (props)=>(
  <div className='heart-chamber'></div>
)

class HeartChambers extends React.Component {
  render(){
    let columns = Math.floor(Math.sqrt(this.props.heart.length));
    return (
      <div>
        {this.props.heart.map((chamber, index) =>
          <React.Fragment key={index}>
            <HeartChamber chamber={chamber}/>
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
    selected_chamber: state.client.selected_chamber,
    heart: state.server.character.heart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeartChambers);
