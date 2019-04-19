import { userActionType } from '../constants';

export const users = (state = {}, action) => {
  switch (action.type) {
    case userActionType.GETALL_REQUEST:
      return {
        loading: true
      };
    case userActionType.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userActionType.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userActionType.REMOVE_REQUEST:
      return {
        ...state,
        items: state.items.map((user) =>
          user.id === action.id ? { ...user, deleting: true } : user
        )
      };
    case userActionType.REMOVE_SUCCESS:
      return {
        items: state.items.filter((user) => user.id !== action.id)
      };
    case userActionType.REMOVE_FAILURE:
      return {
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }
          return user;
        })
      };
    default:
      return state;
  }
};
