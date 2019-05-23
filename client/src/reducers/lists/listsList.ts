import { IListModel } from '../../models';
import { ListActions } from '../../actions';

export interface IListsListState {
  state: string,
  lists: string[],
  err?: string
}

export function defaultListsListState(): IListsListState {
  return {
    state: 'INIT',
    lists: []
  };
}

export function listsListReducer(state: IListsListState, action: ListActions) {
  switch (action.type) {
    case 'LIST_GETBYUSER_REQUEST':
      return {
        ...state,
        state: 'LOADING',
        lists: []
      };
    case 'LIST_GETBYUSER_SUCCESS':
    case 'LIST_REORDER_SUCCESS':
      return {
        ...state,
        state: 'LOADED',
        lists: [...action.lists.map((l: IListModel) => l._id)]
      };
    case 'LIST_CREATE_SUCCESS':
      return {
        ...state,
        lists: [].concat(state.lists, [action.list._id])
      };
    case 'LIST_REMOVE_SUCCESS':
      return {
        ...state,
        lists: state.lists.filter((id: string) => id !== action.listId)
      };
    default:
      return state;
  }
}
