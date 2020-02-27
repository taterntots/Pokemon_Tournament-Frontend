import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { CardStyle } from './Styles';
import Button from '@material-ui/core/Button';

const PokemonCard = (props) => {
  console.log(props.name);

  const ClickHandler = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Click the button to add a Pokemon to the team'
    })
    alert('The information was sent to google analytics that this button was clicked');
  }

  return (
    <div>
      <CardStyle>
        <h2>Dex# {props.dexNum}</h2>
        <h2>{props.name}</h2>
        <h2>{props.type1}</h2>
        <Button onClick={ClickHandler} variant='contained' color='primary'>Add to Team</Button>
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