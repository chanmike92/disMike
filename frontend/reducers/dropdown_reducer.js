import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';
import { merge } from 'lodash';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_A_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { DELETE_CURRENT_USER } from '../actions/session_actions';
const nullState = {
  dropdownType: null,
  id: null,
  x: null,
  y: null,
};

export default function dropdownReducer(state = nullState, action) {
  switch (action.type) {
    case OPEN_DROPDOWN:
      return merge(state, action.payload);
    case CLOSE_DROPDOWN:
      return {};
    case OPEN_MODAL:
      return {};
    case CLOSE_MODAL:
      return {};
    case RECEIVE_A_SERVER:
      return {};
    case RECEIVE_A_CHANNEL:
      return {};
    case DELETE_CURRENT_USER:
      return {};
    default:
      return state;
  }
}
