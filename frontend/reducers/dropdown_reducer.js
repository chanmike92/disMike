import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';
import { merge } from 'lodash';
import { OPEN_MODAL } from '../actions/modal_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
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
    case RECEIVE_A_SERVER:
      return {};
    default:
      return state;
  }
}
