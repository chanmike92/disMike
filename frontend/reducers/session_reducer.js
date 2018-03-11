import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { merge } from 'lodash';

const _nullState = {
  currentUser: null,
  currentServer: null
};

const sessionReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.currentUser });
    case RECEIVE_A_SERVER:
      return merge({}, oldState, { currentServer: action.server});
    default:
      return oldState;
  }
};

export default sessionReducer;
