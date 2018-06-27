import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';
import { merge } from 'lodash';
import { OPEN_MODAL } from '../actions/modal_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { LOADED } from '../actions/loading_actions';
const nullState = {
  loaded: false,
};

export default function loadingReducer(state = nullState, action) {

  switch (action.type) {
    case LOADED:
      return Object.assign(state, nullState, {loaded: true});
    // case RECEIVE_CURRENT_USER_SESSION:
    //   return Object.assign(state, nullState, {loaded: true});
    default:
      return nullState;
  }
}
