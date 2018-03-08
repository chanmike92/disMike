import { RECEIVE_A_SERVER, RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { merge } from 'lodash';


const serverReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_SERVERS:
      return action.servers;
    case RECEIVE_A_SERVER:
      return merge({}, oldState, { [action.server.id]: action.server });
    default:
      return oldState;
  }
};

export default serverReducer;
