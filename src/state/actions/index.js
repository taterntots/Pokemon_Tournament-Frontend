import * as types from '../types'; // types can be used as 'types.<YOUR-TYPE>'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// ACTIONS LIVE HERE
export const register = payload => dispatch => {
  console.log(payload, 'register');
  dispatch({ type: types.REGISTER_START });
  axiosWithAuth()
    .post('/auth/register', payload)
    .then(res => {
      // console.log(res.data);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      window.localStorage.setItem('token', res.data.token);
      // history.push('/');
    })
    .catch(err => {
      console.log(err, `Wouldn't it be nice if I worked?`);
      dispatch({ type: types.REGISTER_FAIL, payload: err });
    });
};

export const login = (credentials) => dispatch => {
  // console.log(credentials);
  dispatch({ type: types.LOGIN_START });
  return axiosWithAuth()
  .post('/auth/login', credentials)
  .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.id });
      // history.push('/journal');
  })
  .catch(err => {
      // console.log(err);
      dispatch({ type: types.LOGIN_FAIL, payload: err })
  })
}

export const logout = (credentials) => dispatch => {
  dispatch({ type: types.LOGOUT });
  return axiosWithAuth()
  .put(`auth/logout`, credentials)
  .then((res) => {
      // console.log(res);
  })
  .catch((err) => {
      // console.log(err);
  })
}

export const getTeams = (id) => dispatch => {
  // console.log();
  dispatch({ type: types.GET_TEAMS_START });
  return axiosWithAuth()
  .get(`/users/${id}/teams`)
  .then(res => {
      // console.log(res);
      dispatch({ type: types.GET_TEAMS_SUCCESS, payload: res.data });
  })
  .catch(err => {
      // console.log(err);
      dispatch({ type: types.GET_TEAMS_FAIL, payload: err })
  })
}

export const getPokemon = () => dispatch => {
  // console.log();
  dispatch({ type: types.GET_POKEMON_START });
  return axiosWithAuth()
  .get(`/pokemon`)
  .then(res => {
      // console.log(res);
      dispatch({ type: types.GET_POKEMON_SUCCESS, payload: res.data });
  })
  .catch(err => {
      // console.log(err);
      dispatch({ type: types.GET_POKEMON_FAIL, payload: err })
  })
}