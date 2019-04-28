import { listActionType } from '../constants';

export const lists = (state = [], action) => {
  switch (action.type) {
    case listActionType.GETBYUSER_SUCCESS:
    case listActionType.REORDER_SUCCESS:
      return action.lists;
    default:
      return state;
  }
};
