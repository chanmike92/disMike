import { combineReducers } from 'redux';

import modal from './modal_reducer';
import pageModal from './page_modal_reducer';

export default combineReducers({
  modal,
  pageModal
});
