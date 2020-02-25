import React, { useState } from 'react';
import { connect } from 'react-redux';
import { CardStyle } from './Styles';
import Button from '@material-ui/core/Button';

const PokemonCard = (props) => {
  console.log(props.name);
  return (
    <div>
      <CardStyle>
        <h2>Dex# {props.dexNum}</h2>
        <h2>{props.name}</h2>
        <h2>{props.type1}</h2>
        <Button variant='contained' color='primary'>Add to Team</Button>
      </CardStyle>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps)(PokemonCard);