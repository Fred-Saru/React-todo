import { userActionType } from '../constants';

export const registration = (state = {}, action) => {
  switch (action.type) {
    case userActionType.REGISTER_REQUEST:
      return { registration: true };
    case userActionType.REGISTER_SUCCESS:
    case userActionType.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
