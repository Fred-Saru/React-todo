import { userActionType } from '../constants';

export const authentication = (state = {}, action) => {
  switch (action.type) {
    case userActionType.LOGIN_REQUEST:
      return {
        logginIn: true
      };
    case userActionType.LOGIN_SUCCESS:
      return {
        loggedIn: true
      };
    case userActionType.LOGIN_FAILURE:
    case userActionType.LOGOUT:
      return {};
    default:
      return state;
  }
};
