import { RECEIVE_A_USER, RECEIVE_ALL_USERS,  RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { RECEIVE_A_FRIEND, RECEIVE_ALL_FRIENDS, REMOVE_A_FRIEND, INVITE_A_FRIEND, UPDATE_A_FRIEND } from '../actions/friend_actions';
import { RECEIVE_A_SERVER, RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER, DELETE_CURRENT_USER } from '../actions/session_actions';
import { CLEAR_STATE } from '../actions/channel_actions';
import { merge } from 'lodash';


const userReducer = (oldState = {}, action) => {
  let newState;
  let newFriend;
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return merge({}, oldState, action.users);
    case RECEIVE_A_FRIEND:
      newState = merge({}, oldState);

      newFriend = merge({}, oldState[action.user.id], action.user, {friendship_status: 'PENDING RECEIVE'});
      return merge({}, oldState, newState, { [newFriend.id]: newFriend } );
    case INVITE_A_FRIEND:
      newState = merge({}, oldState);
      newFriend = merge({}, oldState[action.user.id], action.user, {friendship_status: 'PENDING ACCEPT'});
      return merge({}, oldState, newState, { [newFriend.id]: newFriend } );
    case UPDATE_A_FRIEND:
      newState = merge({}, oldState);
      newFriend = merge({}, oldState[action.user.id], action.user, {friendship_status: 'ACCEPTED'});
      return merge({}, oldState, newState, { [newFriend.id]: newFriend } );
    case REMOVE_A_FRIEND:
      newState = merge({}, oldState);

      const removedFriend = merge(newState[action.id], {friendship_status: null});

      return merge(newState, { [action.id]: removedFriend });
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER_SESSION:

      return merge({}, oldState, action.payload.users, action.payload.dmusers, action.payload.friends);
    case RECEIVE_ALL_USERS:
      return merge({}, oldState, action.users);
    case RECEIVE_A_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_A_SERVER:
      return merge({}, oldState, action.payload.users);
    case RECEIVE_ALL_SERVERS:

      return merge({}, oldState, action.payload.users);
    case CLEAR_STATE:
      return {};
    case DELETE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default userReducer;
