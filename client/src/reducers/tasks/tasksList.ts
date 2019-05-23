import { TaskActions } from '../../actions';
import { ITaskModel } from '../../models';

export interface ITasksListState {
  state: string, // 'INIT', 'LOADING', 'LOADED', 'ERROR'
  tasks: ITaskModel[],
  err?: string
}

export function defaultTasksListState(): ITasksListState {
  return {
    state: 'INIT',
    tasks: []
  };
}

export function tasksListReducer(state: ITasksListState, action: TaskActions): ITasksListState {
  switch (action.type) {
    case 'TASK_CREATE_SUCCESS':
      const tasklist = state[action.task.listId] || [];
      
      return {
        ...state,
        [action.task.listId]: [...tasklist, action.task]
      };
    case 'TASK_GETBYLIST_SUCCESS':    
      return {
        ...state,
        [action.listId]: action.tasks
      };
    default:
      return state;
  }
}