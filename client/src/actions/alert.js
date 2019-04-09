import { alertActionType } from '../constants';

const success = (message) => {
  return { type: alertActionType.SUCCESS, message };
};

const error = (message) => {
  return { type: alertActionType.ERROR, message };
};

const clear = () => {
  return { type: alertActionType.CLEAR };
};

export const alertActions = {
  success,
  error,
  clear
};
