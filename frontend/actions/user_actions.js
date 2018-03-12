import * as APIUtil from '../util/users_api_util';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (user) => {

  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveAllUsers = (users) => {

  return {
    type: RECEIVE_SESSION_ERRORS,
    users
  };
};


export const fetchAllUsers = () => {
  return APIUtil.fetchAllUsers().then((users) => dispatch(receiveAllUsers(users)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};
