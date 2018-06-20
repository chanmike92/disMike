import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/dropdown_actions';

const nullState = {
  dropdown: false,
};

export default function dropdownReducer(state = nullState, action) {

  switch (action.type) {
    case OPEN_DROPDOWN:
      return action.dropdown;
    case CLOSE_DROPDOWN:
      return action.dropdown;
    default:
      return state;
  }
}
