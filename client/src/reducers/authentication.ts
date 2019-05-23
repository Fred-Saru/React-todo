import { userActionType } from '../constants';
import { UserActions } from '../actions';

export interface IAuthState {
  logginIn: boolean;
  loggedIn: boolean;
};

export function defaultAuthState(): IAuthState {
  return {
    loggedIn: false,
    logginIn: false
  };
};

export function authenticationReducer(state: IAuthState, action: UserActions) {
  switch(action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        logginIn: true
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        loggedIn: true
      };
    case 'USER_LOGIN_FAILURE':
    case 'USER_LOGOUT':
    return defaultAuthState();
    default:
    return state;
  }
}