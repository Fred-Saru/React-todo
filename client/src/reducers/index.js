import { combineReducers } from 'redux';

import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './registration';
import { users } from './users';

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
  users
});

export default rootReducer;
