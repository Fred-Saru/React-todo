import { listActionType } from '../constants';

export const list = (state = {}, action) => {
  switch (action.type) {
    case listActionType.GETBYID_REQUEST:
      return {
        loading: true
      };
    case listActionType.GETBYID_SUCCESS:
      return {
        item: action.list
      };
    case listActionType.GETBYID_FAILURE:
      return {
        error: action.error
      };
    case listActionType.REMOVE_REQUEST:
      return state.item.id !== action.id ? { item: state.item } : { item: state.item, deleting: true };
    case listActionType.REMOVE_SUCCESS:
      return {
        item: action.id === state.item.id ? null : state.item
      };
    case listActionType.REMOVE_FAILURE:
      return state.item.id !== action.id ? { item: state.item } : { item: state.item, deleteError: action.error };
    case listActionType.UPDATE_REQUEST:
      return {
        ...state,
        updating: true
      };
    case listActionType.UPDATE_SUCCESS:
      return {
        item: state.list
      };
    case listActionType.UPDATE_FAILURE:
      return {
        ...state,
        error: action.error
      }

    default:
      return state;
  }
};