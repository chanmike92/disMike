import * as APIUtil from '../util/channel_api_util';
export const RECEIVE_A_FRIEND = 'RECEIVE_A_FRIEND';
export const REMOVE_A_FRIEND = 'REMOVE_A_FRIEND';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';
export const RECEIVE_FRIEND_ERRORS = 'RECEIVE_FRIEND_ERRORS';

export const receiveAllFriends = (friends) => {

  return {
    type: RECEIVE_ALL_FRIENDS,
    friends
  };
};

export const receiveAFriend = (payload) => {

  return {
    type: RECEIVE_A_FRIEND,
    payload
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

export const fetchAllFriends = () => dispatch => {

  return APIUtil.fetchAllFriends().then((friends) => dispatch(receiveAllFriends(friends)), (errors) => {

    return dispatch(receiveErrors(errors.responseJSON));});
};

export const addNewFriend = (id) => dispatch => {

  return APIUtil.addNewFriend(id).then((payload) => dispatch(receiveAFriend(payload)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};


export const deleteFriend = (id) => dispatch => {

  return APIUtil.deleteFriend(id).then(() => dispatch(removeAFriend(id)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
};
