import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';
import { merge } from 'lodash';
import { OPEN_MODAL } from '../actions/modal_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { LOADED } from '../actions/loading_actions';
import { DELETE_CURRENT_USER } from '../actions/session_actions';
const nullState = {
  loaded: false,
  displayload: false
};

export default function loadingReducer(oldState = {}, action) {

  Object.freeze(oldState);
  switch (action.type) {
    case LOADED:
      return merge({}, oldState, nullState, {displayload: true});
    case RECEIVE_CURRENT_USER_SESSION:
      return merge({}, oldState, nullState, {loaded: true});
    case DELETE_CURRENT_USER:
      return nullState;
    default:
      return oldState;
  }
}
