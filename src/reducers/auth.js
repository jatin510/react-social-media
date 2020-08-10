import { LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/actionTypes';

const initialState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false,
};
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, inProgress: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        error: false,
        inProgress: false,
      };

    case LOGIN_FAIL:
      return { ...state, inProgress: false, error: action.error };
    default:
      return state;
  }
}
