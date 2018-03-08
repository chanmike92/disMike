import { merge } from 'lodash';
import { RECEIVE_SERVER_ERRORS, RECEIVE_A_SERVERS } from '../actions/server_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors;
    case RECEIVE_A_SERVER:
      return [];
    default:
      return oldState;
  }
};


export default serverErrorsReducer;
