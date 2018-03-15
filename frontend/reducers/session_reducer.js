import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { RECEIVE_A_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_A_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

const nullState = {
  currentUser: null,
  currentServer: null,
  currentChannel: null
};

const sessionReducer = (oldState = nullState, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, nullState, oldState, { currentUser: action.currentUser });
    case RECEIVE_A_SERVER:
      return Object.assign({}, nullState, oldState, { currentServer: action.payload.server });
    case RECEIVE_A_CHANNEL:
      return Object.assign({}, nullState, oldState, { currentChannel: action.payload.channel });
    default:
      return oldState;
  }
};

export default sessionReducer;
