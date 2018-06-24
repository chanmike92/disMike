import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_CURRENT_USER_SESSION = 'RECEIVE_CURRENT_USER_SESSION';
export const RECEIVE_CURRENT_SERVER = 'RECEIVE_CURRENT_SERVER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';

export const receiveCurrentUser = (user) => {

  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveCurrentUserSession = (payload) => {

  return {
    type: RECEIVE_CURRENT_USER_SESSION,
    payload
  };
};

export const deleteCurrentUser = () => {

  return {
    type: DELETE_CURRENT_USER,
    user: null,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = (user) => dispatch => {

  return APIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const login = (user) => dispatch => {

  return APIUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchCurrentUserSession = () => dispatch => {

  return APIUtil.fetchCurrentUser().then((payload) => dispatch(receiveCurrentUser(payload)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {

  return APIUtil.logout().then(() => dispatch(deleteCurrentUser()), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
