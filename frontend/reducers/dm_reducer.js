import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { RECEIVE_A_DM } from '../actions/dm_actions';
import { RECEIVE_ALL_DMS } from '../actions/dm_actions';
import { merge } from 'lodash';


const dmReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER_SESSION:
      return merge({}, oldState, action.payload.dms);
    case RECEIVE_ALL_DMS:
      return merge({}, oldState, action.dms);
    case RECEIVE_A_DM:
      return merge({}, oldState, action.payload.dms);
    default:
      return oldState;
  }
};

export default dmReducer;
