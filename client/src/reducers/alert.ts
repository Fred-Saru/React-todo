import { alertActionType } from '../constants';
import { IAlertModel } from '../models';
import { AlertActions } from '../actions';

export interface IAlertState {
  alert: IAlertModel
};

export function defaultAlertState(): IAlertState {
  return {
    alert: null
  };
}

export function alertReducer(state: IAlertState, action: AlertActions) {
  switch (action.type) {
    case 'ALERT_SUCCESS':
      return {
        alert: {
          type: 'alert-success',
          message: action.message
        }
      };
    case 'ALERT_ERROR':
      return {
        alert: {
          type: 'alert-danger',
          message: action.message
        }
      };
    case 'ALERT_CLEAR':
      return {
        alert: null
      };
    default:
      return state;
  }
};
