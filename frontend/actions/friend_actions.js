import * as APIUtil from '../util/friend_api_util';
export const RECEIVE_A_FRIEND = 'RECEIVE_A_FRIEND';
export const REMOVE_A_FRIEND = 'REMOVE_A_FRIEND';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND_ERRORS = 'RECEIVE_FRIEND_ERRORS';

export const receiveAllFriends = (users) => {

  return {
    type: RECEIVE_ALL_FRIENDS,
    users
  };
};

export const receiveAFriend = (user) => {

  return {
    type: RECEIVE_A_FRIEND,
    user
  };
};

export const receiveErrors = (errors) => {

  return {
    type: RECEIVE_FRIEND_ERRORS,
    errors
  };
};

export const removeAFriend = (id) => {

  return {
    type: REMOVE_A_FRIEND,
    id
  };
};

export const fetchAFriend = () => dispatch => {

  return APIUtil.fetchAllFriends().then((users) => dispatch(receiveAllFriends(users)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const fetchAllFriends = () => dispatch => {

  return APIUtil.fetchAllFriends().then((users) => dispatch(receiveAllFriends(users)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const addNewFriend = (id) => dispatch => {

  return APIUtil.addNewFriend(id).then((payload) => dispatch(receiveAFriend(payload)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const acceptFriend = (id) => dispatch => {

  return APIUtil.addNewFriend(id).then((payload) => dispatch(receiveAFriend(payload)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};


export const deleteFriend = (id) => dispatch => {

  return APIUtil.deleteFriend(id).then(() => dispatch(removeAFriend(id)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
