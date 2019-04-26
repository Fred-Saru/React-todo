import { combineReducers } from 'redux';

import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './registration';
import { user } from './user';
import { lists } from './lists';

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
  user,
  lists
});

export default rootReducer;
