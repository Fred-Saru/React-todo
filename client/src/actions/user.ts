import { Action, Dispatch } from 'redux';

import { alertActions } from './alert';
import { userServices } from '../services';
import { IUserModel } from '../models';
import { userActionType } from '../constants';

export interface IUserActionRegisterRequest extends Action {
  type: 'USER_REGISTER_REQUEST'
};

export interface IUserActionRegisterSuccess extends Action {
  type: 'USER_REGISTER_SUCCESS',
  user: IUserModel
};

export interface IUserActionRegisterFailure extends Action {
  type: 'USER_REGISTER_FAILURE',
  err: string
};

export interface IUserActionLoginRequest extends Action {
  type: 'USER_LOGIN_REQUEST'
};

export interface IUserActionLoginSuccess extends Action {
  type: 'USER_LOGIN_SUCCESS',
  user: IUserModel
};

export interface IUserActionLoginFailure extends Action {
  type: 'USER_LOGIN_FAILURE',
  err: string
};

export interface IUserActionLogout extends Action {
  type: 'USER_LOGOUT';
};

export interface IUserActionUpdateRequest extends Action {
  type: 'USER_UPDATE_REQUEST'
};

export interface IUserActionUpdateSuccess extends Action {
  type: 'USER_UPDATE_SUCCESS',
  user: IUserModel
};

export interface IUserActionUpdateFailure extends Action {
  type: 'USER_UPDATE_FAILURE',
  err: string
};

export interface IUserActionRemoveRequest extends Action {
  type: 'USER_REMOVE_REQUEST'
};

export interface IUserActionRemoveSuccess extends Action {
  type: 'USER_REMOVE_SUCCESS',
  user: IUserModel
};

export interface IUserActionRemoveFailure extends Action {
  type: 'USER_REMOVE_FAILURE',
  err: string
};

export type UserActions = IUserActionRegisterRequest |
                          IUserActionRegisterSuccess |
                          IUserActionRegisterFailure |
                          IUserActionLoginRequest |
                          IUserActionLoginSuccess |
                          IUserActionLoginFailure |
                          IUserActionLogout |
                          IUserActionUpdateRequest |
                          IUserActionUpdateSuccess |
                          IUserActionUpdateFailure |
                          IUserActionRemoveRequest |
                          IUserActionRemoveSuccess |
                          IUserActionRemoveFailure;

const login = (username: string, password: string) => {
  const request = () => ({ type: userActionType.USER_LOGIN_REQUEST });
  const success = (user: IUserModel) => ({ type: userActionType.USER_LOGIN_SUCCESS, user });
  const failure = (err: string) => ({ type: userActionType.USER_LOGIN_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    userServices
      .login(username, password)
      .then((user) => {
        dispatch(success(user));
        window.location.assign('/lists');
      })
      .catch((err) => {
        dispatch(failure(err));
        dispatch(alertActions.error(err));
      });
  };
};

const logout = () => {
  userServices.logout();
  return { type: 'USER_LOGOUT' };
};

const register = (user: IUserModel) => {
  const request = () => ({ type: userActionType.USER_REGISTER_REQUEST });
  const success = (user: IUserModel) => ({ type: userActionType.USER_REGISTER_SUCCESS, user });
  const failure = (err: string) => ({ type: userActionType.USER_REGISTER_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    userServices
      .register(user)
      .then((user) => {
        dispatch(success(user));
        window.location.assign('/login');
        dispatch(alertActions.success('Registration successful'));
      })
      .catch((err) => {
        dispatch(failure(err));
        dispatch(alertActions.error(err));
      });
  };
};

const update = (user: IUserModel) => {
  const request = () => ({ type: userActionType.USER_UPDATE_REQUEST });
  const success = (user: IUserModel) => ({ type: userActionType.USER_UPDATE_SUCCESS, user });
  const failure = (err: string) => ({ type: userActionType.USER_UPDATE_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    userServices
      .update(user)
      .then(() => {
        dispatch(success(user));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
}

const remove = (id: string) => {
  const request = () => ({ type: userActionType.USER_REMOVE_REQUEST });
  const success = (id: string) => ({ type: userActionType.USER_REMOVE_SUCCESS, id });
  const failure = (err: string) => ({ type: userActionType.USER_REMOVE_FAILURE, err });

  return (dispatch: any) => {
    dispatch(request());

    userServices
      .remove(id)
      .then(() => {
        dispatch(success(id));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

export const userActions = {
  register,
  login,
  logout,
  update,
  remove
};
