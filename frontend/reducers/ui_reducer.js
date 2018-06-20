import { combineReducers } from 'redux';

import modal from './modal_reducer';
import dropdown from './dropdown_reducer';

export default combineReducers({
  modal,
  dropdown,
});
