import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer,
  search: searchReducer,
});

export default rootReducer;
