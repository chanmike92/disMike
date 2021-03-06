import { RECEIVE_SEARCHES } from '../actions/user_actions';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { merge } from 'lodash';


const channelSearchReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SEARCHES:
      return merge({}, action.payload.channels);
    case OPEN_MODAL:
      return {};
    case CLOSE_MODAL:
      return {};
    default:
      return oldState;
  }
};

export default channelSearchReducer;
