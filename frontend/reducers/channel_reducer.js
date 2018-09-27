import { RECEIVE_A_CHANNEL,RECEIVE_NEW_CHANNEL, RECEIVE_ALL_CHANNELS, REMOVE_A_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER, DELETE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { RECEIVE_A_MESSAGE } from '../actions/message_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { merge } from 'lodash';


const channelReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER_SESSION:
      return merge({}, oldState, action.payload.channels);
    case RECEIVE_ALL_SERVERS:
      return merge({}, oldState, action.payload.channels);
    // case RECEIVE_CURRENT_USER:
    //   return merge({}, oldState, action.payload.channels);
    case RECEIVE_A_MESSAGE:
      if (action.message.messagable_type === 'Channel') {
        const id = action.message.id;
        const messagableId = action.message.messagable_id;
        const updatedChannel = {[messagableId]: {message_ids: [...oldState[messagableId].message_ids, id]}};

        return merge({}, oldState, updatedChannel);
      }
    case RECEIVE_ALL_CHANNELS:
      return merge({}, oldState, action.channels);
    case RECEIVE_A_SERVER:
      return merge({}, oldState, action.payload.channels);
    case RECEIVE_A_CHANNEL:
      return merge({}, oldState, { [action.payload.channel.id]: action.payload.channel });
    case RECEIVE_NEW_CHANNEL:

      return merge({}, oldState, { [action.payload.channel.id]: action.payload.channel });
    case REMOVE_A_CHANNEL:
      const newState = merge({}, oldState);
      delete newState[action.payload.id];
      return newState;
    case DELETE_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default channelReducer;
