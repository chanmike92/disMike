import * as APIUtil from '../util/user_api_util';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_A_USER = 'RECEIVE_A_USER';

export const receiveAUser = (payload) => {

  return {
    type: RECEIVE_A_USER,
    payload
  };
};

export const receiveAllUsers = (users) => {

  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};


export const fetchAllUsers = (id) => dispatch => {
  return APIUtil.fetchAllUsers(id).then((users) =>
  dispatch(receiveAllUsers(users)));
};

export const fetchAUser = () => dispatch => {
  return APIUtil.fetchAUser().then((payload) =>
  dispatch(receiveAUser(payload)));
};
