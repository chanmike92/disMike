import { RECEIVE_A_FRIEND, RECEIVE_ALL_FRIENDS, REMOVE_A_FRIEND } from '../actions/friend_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { RECEIVE_A_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';


const friendReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    case RECEIVE_A_FRIEND:
      return merge({}, oldState, { [action.payload.friend.id]: action.payload.friend });
    case REMOVE_A_FRIEND:
      const newState = merge({}, oldState);
      delete newState[action.friendId];
      return newState;
    default:
      return oldState;
  }
};

export default friendReducer;
