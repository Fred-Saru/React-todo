import { userActionType } from '../constants';
import { UserActions } from '../actions';

export interface IRegisterState {
  registration: boolean
};

export function defaultRegisterState(): IRegisterState {
  return {
    registration: false
  };
}

export function registerReducer(state: IRegisterState, action: UserActions) {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return { registration: true };
    case 'USER_REGISTER_SUCCESS':
    case 'USER_REGISTER_FAILURE':
      return defaultRegisterState();
    default:
      return state;
  }
};
