import { merge } from 'lodash';
import { RECEIVE_SERVER_ERRORS, RECEIVE_ALL_SERVERS, RECEIVE_A_SERVER } from '../actions/server_actions';

const serverErrorsReducer = (oldState = [], action) => {

  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;
    case RECEIVE_A_SERVER:
      return [];
    case RECEIVE_ALL_SERVERS:
      return [];
    default:
      return oldState;
  }
};


export default serverErrorsReducer;
