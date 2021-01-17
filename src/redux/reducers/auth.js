import * as CONST from '../ActionTypes';

const initialState = {
  isLoggedIn: false,
  memberData: {},
  errorMessage: []
}

function auth(state = initialState, action) {
  switch (action.type) {
    // -----------------
    // LOGIN
    // -----------------
    case CONST.LOGIN_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoggedIn: true,
          memberData: action.data,
          errorMessage: [],
        },
      );
    case CONST.LOGIN_FAILURE:
      return Object.assign(
        {},
        state,
        {
          isLoggedIn: false,
          memberData: {},
          errorMessage: action.data.errors,
        },
      );
    // -----------------
    // LOGOUT
    // -----------------
    case CONST.LOGOUT:
      return Object.assign(
        {},
        state,
        {
          isLoggedIn: false,
          memberData: {},
          errorMessage: [],
        },
      );
    default:
      return state;
  }
}

export default auth;