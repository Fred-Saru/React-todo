import { userActionType } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.LOGIN_REQUEST:
      return {
        logginIn: true,
        user: action.user
      };
    case userActionType.LOGIN_SUCCESS:
      return {
        logginIn: true,
        user: action.user
      };
    case userActionType.LOGIN_FAILURE:
    case userActionType.LOGOUT:
      return {};
    default:
      return state;
  }
};
