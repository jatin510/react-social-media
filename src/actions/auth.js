import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);

        if (data.success) {
          // dispatch action to save user
          dispatch(loginSuccess(data.data.user));
          return;
        }

        dispatch(loginFailed(data.message));
      });
  };
}

export function signUpStart() {
  return {
    type: SIGNUP_START,
  };
}

export function signUpFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signUpSucces(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function signUp(name, email, password, confirm_password) {
  return (dispatch) => {
    console.log('signup function');
    dispatch(signUpStart());

    const url = APIUrls.signUp();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, name, password, confirm_password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          /// dispatch success function

          localStorage.setItem('token', data.data.token);
          dispatch(signUpSucces(data.data.user));
          return;
        }

        dispatch(signUpFailed(data.message));
      });
  };
}
