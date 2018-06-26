import { RECEIVE_CURRENT_USER, DELETE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { RECEIVE_A_CHANNEL, RECEIVE_ALL_CHANNELS, CLEAR_STATE } from '../actions/channel_actions';
import { RECEIVE_A_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';


const sessionReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { user: action.payload.currentUser });
    case DELETE_CURRENT_USER:
      return Object.assign({}, oldState, { user: action.user });
    case RECEIVE_CURRENT_USER_SESSION:
      return Object.assign({}, oldState, { user: action.payload.currentUser });

    // case RECEIVE_A_SERVER:
    //   return Object.assign({}, nullState, oldState, { currentServer: action.payload.server });
    // case RECEIVE_A_CHANNEL:
    //   return Object.assign({}, nullState, oldState, { currentChannel: action.payload.channel });
    // case CLEAR_STATE:
    //   return Object.assign({}, nullState, oldState, { currentServer: null });
    default:
      return oldState;
  }
};

export default sessionReducer;
