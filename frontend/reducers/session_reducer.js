import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullState = {
  currentUser: null
};

const sessionReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { currentUser: action.currentUser });
    default:
      return _nullState;
  }
};

export default sessionReducer;
