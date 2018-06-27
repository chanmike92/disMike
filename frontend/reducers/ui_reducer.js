import { combineReducers } from 'redux';

import modal from './modal_reducer';
import dropdown from './dropdown_reducer';
import loading from './loading_reducer';

export default combineReducers({
  modal,
  loading,
  dropdown,
});
