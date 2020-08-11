import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};
export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_START:
    case LOGIN_START:
      return { ...state, inProgress: true };

    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        error: false,
        inProgress: false,
      };

    case SIGNUP_FAILED:
    case LOGIN_FAILED:
      return { ...state, inProgress: false, error: action.error };

    default:
      return state;
  }
}
