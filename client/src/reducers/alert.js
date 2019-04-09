import { alertActionType } from '../constants';

export const alert = (state = {}, action) => {
  switch (action.type) {
    case alertActionType.SUCCESS:
      return {
        type: 'alert-succes',
        message: action.message
      };
    case alertActionType.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertActionType.CLEAR:
      return {};
    default:
      return state;
  }
};
