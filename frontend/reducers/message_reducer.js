import { RECEIVE_ALL_MESSAGES, RECEIVE_A_MESSAGE, CLEAR_MESSAGES } from '../actions/message_actions';
import { RECEIVE_A_CHANNEL, CLEAR_STATE } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER_SESSION, RECEIVE_A_USER } from '../actions/user_actions';
import { RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { merge } from 'lodash';


const messageReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER_SESSION:
      return merge({}, oldState, action.payload.messages);
    case RECEIVE_ALL_SERVERS:
      return merge({}, oldState, action.payload.messages);
    // case RECEIVE_CURRENT_USER:
    //   return merge({}, oldState, action.payload.messages);
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case CLEAR_MESSAGES:
      return {};
    case RECEIVE_A_MESSAGE:
      return merge({}, oldState, { [action.message.id]: action.message });
    case RECEIVE_A_CHANNEL:
      return merge({}, oldState, action.payload.messages);
    case RECEIVE_A_USER:
      return merge({}, oldState, action.payload.messages);
    case CLEAR_STATE:
      return {};
    default:
      return oldState;
  }
};

export default messageReducer;
