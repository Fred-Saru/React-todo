import { Action, Dispatch } from 'redux';
import { alertActionType } from '../constants';

export interface IAlertActionSuccess extends Action {
  type: 'ALERT_SUCCESS',
  message: string
};

export interface IAlertActionError extends Action {
  type: 'ALERT_ERROR',
  message: string
};

export interface IAlertActionClear extends Action {
  type: 'ALERT_CLEAR'
};

export type AlertActions =  IAlertActionSuccess |
                            IAlertActionError |
                            IAlertActionClear;

const success = (message: string) => {
  return { type: alertActionType.SUCCESS, message };
};

const error = (message: string) => {
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
