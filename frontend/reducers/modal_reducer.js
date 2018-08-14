import { merge } from 'lodash';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { OPEN_DROPDOWN } from '../actions/dropdown_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { DELETE_CURRENT_USER } from '../actions/session_actions';

export default function modalReducer(state = {}, action) {

  switch (action.type) {
    case OPEN_MODAL:
      return { modalType: action.modalType };
    case CLOSE_MODAL:
      return {};
    case OPEN_DROPDOWN:
      return {};
    case RECEIVE_CURRENT_USER_SESSION:
      return {};
    // case RECEIVE_A_SERVER:
    //   return {};
    case DELETE_CURRENT_USER:
      return {};
    default:
      return state;
  }
}
