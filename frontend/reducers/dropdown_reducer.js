import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';
import { merge } from 'lodash';
import { OPEN_MODAL } from '../actions/modal_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
const nullState = {
  dropdown: false,
};

export default function dropdownReducer(state = nullState, action) {

  switch (action.type) {
    case OPEN_DROPDOWN:
      return action.dropdown;
    case CLOSE_DROPDOWN:
      return action.dropdown;
    case OPEN_MODAL:
      return nullState;
    case RECEIVE_A_SERVER:
      return nullState;
    default:
      return nullState;
  }
}
