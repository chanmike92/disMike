import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullState = {
  currentUser: null
};

const sessionReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.user });
    default:
      return oldState;
  }
};

export default sessionReducer;
