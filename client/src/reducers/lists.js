import { listActionType } from '../constants';

export const lists = (state = [], action) => {
  switch (action.type) {
    case listActionType.GETBYUSER_SUCCESS:
      return action.lists;
    default:
      return state;
  }
};