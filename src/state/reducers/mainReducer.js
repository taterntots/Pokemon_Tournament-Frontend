import * as types from '../types'; // types can be used as 'types.<YOUR-TYPE>'

// STATE starts here
const initialState = {
  data: [],
  fetchingData: false,
  isPosting: false,
  isLoggedIn: false,
  id: '',
  error: '',
};

// Reducer
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        isPosting: false
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isPosting: true
      };

    case types.REGISTER_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    case types.LOGIN_START:
      return {
        ...state,
        fetchingData: true,
        error: ''
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        isLoggedIn: true,
        id: action.payload,
        error: ''
      }
    case types.LOGIN_FAIL:
      return {
        error: action.payload
      }
    case types.LOGOUT:
      return {
        isLoggedIn: false
      }
    case types.GET_TEAMS_START:
      return {
        ...state,
        fetchingData: true
      }
    case types.GET_TEAMS_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        data: action.payload
      }
    case types.GET_TEAMS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case types.GET_POKEMON_START:
      return {
        ...state,
        fetchingData: true
      }
    case types.GET_POKEMON_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        data: action.payload
      }
    case types.GET_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};

export default mainReducer;