import { Action } from 'redux';

import { IAlertState, defaultAlertState, alertReducer } from './alert';
import { IAuthState, defaultAuthState, authenticationReducer } from './authentication';
import { IRegisterState, defaultRegisterState, registerReducer } from './registration';
import { IUserState, defaultUserState, userReducer } from './user';
import { listsListReducer, IListsListState, defaultListsListState } from './lists/listsList';
import { listsMapReducer, defaultListsMapState, IListsMapState } from './lists/listsMap';
import { tasksListReducer, ITasksListState, defaultTasksListState } from './tasks/tasksList';
import { tasksMapReducer, ITasksMapState, defaultTasksMapState } from './tasks/tasksMap';


export interface IAppState {
  entities: {
    tasks: ITasksMapState;
    lists: IListsMapState;
  },
  ui: {
    tasks: ITasksListState;
    lists: IListsListState;
    user: IUserState;
    alert: IAlertState;
    auth: IAuthState;
    register: IRegisterState;
  }  
}

export function defaultState() {
  return {
    entities: {
      tasks: defaultTasksMapState(),
      lists: defaultListsMapState()
    },
    ui: {
      tasks: defaultTasksListState(),
      lists: defaultListsListState(),
      user: defaultUserState(),
      alert: defaultAlertState(),
      auth: defaultAuthState(),
      register: defaultRegisterState()
    }  
  };
}

export function mainReducer(state: IAppState = defaultState(), action: Action) {
  return {
    entities: {
      tasks: tasksMapReducer(state.entities.tasks, action),
      lists: listsMapReducer(state.entities.lists, action)
    },
    ui: {
      tasks: tasksListReducer(state.ui.tasks, action),
      lists: listsListReducer(state.ui.lists, action),
      user: userReducer(state.ui.user, action),
      alert: alertReducer(state.ui.alert, action),
      auth: authenticationReducer(state.ui.auth, action),
      register: registerReducer(state.ui.register, action)
    }
  };
}

