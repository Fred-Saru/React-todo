import { combineReducers } from 'redux';

import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './registration';
import { users } from './users';
import { lists } from './lists';
import { list } from './list';

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
  users,
  lists,
  list
});

export default rootReducer;
