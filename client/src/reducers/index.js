import { combineReducers } from 'redux';

import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './registration';
import { user } from './user';
import { lists } from './lists';
import { tasks } from './tasks';

const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
  user,
  lists,
  tasks
});

export default rootReducer;
