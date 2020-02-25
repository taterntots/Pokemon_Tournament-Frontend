import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CardStyle } from './Styles';

const NavBar = () => {
  return (
    <div>
      <CardStyle>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <NavLink to='/pokemon'>Pokemon</NavLink>
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

export default connect(mapStateToProps)(NavBar);