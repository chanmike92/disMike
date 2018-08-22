import * as APIUtil from '../util/user_api_util';
export const RECEIVE_CURRENT_USER_SESSION = 'RECEIVE_CURRENT_USER_SESSION';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_A_USER = 'RECEIVE_A_USER';

export const receiveAUser = (user) => {
  return {
    type: RECEIVE_A_USER,
    user
  };
};

export const receiveAllUsers = (users) => {

  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveCurrentUserSession = (payload) => {

  return {
    type: RECEIVE_CURRENT_USER_SESSION,
    payload
  };
};

export const fetchCurrentUserSession = (id) => dispatch => {

  return APIUtil.fetchCurrentUser(id).then((payload) => dispatch(receiveCurrentUserSession(payload)));
};

export const fetchAllUsers = (id) => dispatch => {
  return APIUtil.fetchAllUsers(id).then((users) =>
  dispatch(receiveAllUsers(users)));
};

export const fetchAUser = () => dispatch => {
  return APIUtil.fetchAUser().then((user) =>
  dispatch(receiveAUser(user)));
};

export const updateAUser = (formData, id) => dispatch => {
  return APIUtil.updateAUser(formData, id).then((payload) =>
  dispatch(receiveCurrentUserSession(payload)));
};

export const searchUsers = (username) => dispatch => {
  return APIUtil.searchUser(username).then((payload) =>
  dispatch(receiveCurrentUserSession(payload)));
};
