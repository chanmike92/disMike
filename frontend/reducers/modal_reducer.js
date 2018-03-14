import { OPEN_MODAL, CLOSE_MODAL, OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = {}, action) {
  
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return {};
    case OPEN_EDIT_MODAL:
      return action.modal;
    default:
      return state;
  }
}
