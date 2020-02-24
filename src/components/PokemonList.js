import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../state/actions';
import PokemonCard from './PokemonCard';
import { GridStyle } from './Styles';

const PokemonList = (props) => {

  useEffect(() => {
    props.getPokemon(+localStorage.getItem('id'));
  }, [])

  return (
    <div>
      <h1>All Pokemon</h1>
      <GridStyle>
        {props.data.map(p => {
          return (
            <PokemonCard 
              key={p.dexNum}
              name={p.name}
              type1={p.type1}
              dexNum={p.dexNum}
            />
          )
        })}
      </GridStyle>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps, { getPokemon })(PokemonList);