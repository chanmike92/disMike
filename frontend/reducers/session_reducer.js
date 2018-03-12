import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { RECEIVE_A_CHANNEL } from '../actions/channel_actions';
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
      return merge({}, nullState, oldState, { currentUser: action.currentUser });
    case RECEIVE_A_SERVER:
      const hello = merge({}, nullState, oldState, { currentServer: action.server });
      return hello;
    case RECEIVE_A_CHANNEL:
      return merge({}, nullState, oldState, { currentChannel: action.channel });
    default:
      return oldState;
  }
};

export default sessionReducer;
