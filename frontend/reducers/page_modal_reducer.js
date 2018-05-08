import { CLOSE_MODAL, OPEN_PAGE_MODAL } from '../actions/modal_actions';
// import { OPEN_PAGE_MODAL } from '../actions/page_modal_actions';

export default function modalReducer(state = {}, action) {

  switch (action.type) {
    case CLOSE_MODAL:
      return {};
    case OPEN_PAGE_MODAL:
      return action.pageModal;
    default:
      return state;
  }
}
