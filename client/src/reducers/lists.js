import { listActionType } from '../constants';

export const lists = (state = {}, action) => {
  switch (action.type) {
    case listActionType.GETALL_REQUEST:
    case listActionType.GETBYUSER_REQUEST:
      return {
        loading: true
      };
    case listActionType.GETALL_SUCCESS:
    case listActionType.GETBYUSER_SUCCESS:
      return {
        items: action.lists
      };
    case listActionType.GETALL_FAILURE:
    case listActionType.GETBYUSER_FAILURE:
      return {
        error: action.error
      };
    case listActionType.REMOVE_REQUEST:
      return {
        items: state.items.map((list) => list.id === action.id ? { ...list, deleting: true } : list)
      };
    case listActionType.REMOVE_SUCCESS:
      return {
        items: state.items.filter((list) => list.id !== action.id)
      };
    case listActionType.REMOVE_FAILURE:
      return {
        items: state.items.map((list) => {
          if(list.id === action.id) {
            const { deleting, ...listCopy } = list;
            return { ...listCopy, deleteError: action.error };
          }
          return list;
        })
      };
    case listActionType.CREATE_REQUEST:
      return {
        ...state,
        creating: true
      };
    case listActionType.CREATE_SUCCESS:
      return {
        items: [ action.list, ...state.items ]
      };
    case listActionType.CREATE_FAILURE:
      return {
        ...state,
        createError: action.error
      };
    default:
      return state;
  }
};