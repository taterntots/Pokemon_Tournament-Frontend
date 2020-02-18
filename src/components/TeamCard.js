import React, { useState } from 'react';
import { connect } from 'react-redux';

const TeamCard = (props) => {
  return (
    <div>
      <h2>{props.team_name}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps)(TeamCard);