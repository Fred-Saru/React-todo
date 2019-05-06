import { listActionType } from '../constants';

export const lists = (state = [], action) => {
  switch (action.type) {
    case listActionType.GETBYUSER_SUCCESS:
    case listActionType.REORDER_SUCCESS:
      return action.lists;
    case listActionType.UPDATE_SUCCESS:
      const updatedLists = state.map((list) => {
        if(list._id !== action.list._id) {
          return list;
        }
        return Object.assign(list, action.list);
      });
      return updatedLists;
    case listActionType.CREATE_SUCCESS:
      const updatedList = state.map((list) => {
        const { rank, ...tmpList } = list;
        return {
          ...tmpList,
          rank: rank + 1
        };
      });
      return [].concat(updatedList, [action.list]);
    case listActionType.REMOVE_SUCCESS:
      return state.filter((list) => list._id !== action.listId);
    default:
      return state;
  }
};
