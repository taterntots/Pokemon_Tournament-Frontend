import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../state/actions';
import TeamCard from './TeamCard';
import { GridStyle } from './Styles';

const TeamList = (props) => {

  useEffect(() => {
    props.getTeams(+localStorage.getItem('id'));
  }, [])

  return (
    <div>
      <h1>My Teams</h1>
      <GridStyle>
        {props.data.map(t => {
          return (
            <TeamCard 
              key={t.id}
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

export default connect(mapStateToProps, { getTeams })(TeamList);