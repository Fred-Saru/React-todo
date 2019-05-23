import { Action, Dispatch } from 'redux';

import { listActionType } from '../constants';
import { listServices } from '../services';

import { IListModel } from '../models';

export interface IListActionCreateRequest extends Action{
  type: 'LIST_CREATE_REQUEST'
};

export interface IListActionCreateSuccess extends Action{
  type: 'LIST_CREATE_SUCCESS',
  list: IListModel
};

export interface IListActionCreateFailure extends Action{
  type: 'LIST_CREATE_FAILURE',
  err: string
};

export interface IListActionUpdateRequest extends Action{
  type: 'LIST_UPDATE_REQUEST'
};

export interface IListActionUpdateSuccess extends Action{
  type: 'LIST_UPDATE_SUCCESS',
  list: IListModel
};

export interface IListActionUpdateFailure extends Action{
  type: 'LIST_UPDATE_FAILURE',
  err: string
};

export interface IListActionRemoveRequest extends Action{
  type: 'LIST_REMOVE_REQUEST'
};

export interface IListActionRemoveSuccess extends Action{
  type: 'LIST_REMOVE_SUCCESS',
  listId: string 
};

export interface IListActionRemoveFailure extends Action{
  type: 'LIST_REMOVE_FAILURE',
  err: string
};

export interface IListActionGetByUserRequest extends Action{
  type: 'LIST_GETBYUSER_REQUEST'
};

export interface IListActionGetByUserSuccess extends Action{
  type: 'LIST_GETBYUSER_SUCCESS',
  lists: IListModel[] 
};

export interface IListActionGetByUserFailure extends Action{
  type: 'LIST_GETBYUSER_FAILURE',
  err: string
};

export interface IListActionReorderSuccess extends Action{
  type: 'LIST_REORDER_SUCCESS',
  lists: IListModel[]
};

export type ListActions = IListActionCreateRequest | 
                          IListActionCreateSuccess | 
                          IListActionCreateFailure | 
                          IListActionUpdateRequest | 
                          IListActionUpdateSuccess | 
                          IListActionUpdateFailure |
                          IListActionRemoveRequest |
                          IListActionRemoveSuccess |
                          IListActionRemoveFailure |
                          IListActionGetByUserRequest |
                          IListActionGetByUserSuccess |
                          IListActionGetByUserFailure |
                          IListActionReorderSuccess;

const create = (list: IListModel) => {
  const request = () => ({ type: listActionType.CREATE_REQUEST });
  const success = (list: IListModel) => ({ type: listActionType.CREATE_SUCCESS, list });
  const failure = (err: string) => ({ type: listActionType.CREATE_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    listServices
      .create(list)
      .then((list) => {
        dispatch(success(list));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const getByUserId = (userId: string) => {
  const request = () => ({ type: listActionType.GETBYUSER_REQUEST });
  const success = (lists: IListModel[]) => ({
    type: listActionType.GETBYUSER_SUCCESS,
    lists
  });
  const failure = (err: string) => ({ type: listActionType.GETBYUSER_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    listServices
      .getByUserId(userId)
      .then((lists) => dispatch(success(lists)))
      .catch((err) => dispatch(failure(err)));
  };
};

const update = (list: IListModel) => {
  const request = () => ({ type: listActionType.UPDATE_REQUEST });
  const success = (list: IListModel) => ({ type: listActionType.UPDATE_SUCCESS, list });
  const failure = (err: string) => ({ type: listActionType.UPDATE_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    listServices
      .update(list)
      .then((list) => {
        dispatch(success(list));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const remove = (listId: string) => {
  const request = () => ({ type: listActionType.REMOVE_REQUEST });
  const success = (listId: string) => ({ type: listActionType.REMOVE_SUCCESS, listId });
  const failure = (err: string) => ({ type: listActionType.REMOVE_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    listServices
      .remove(listId)
      .then(() => {
        dispatch(success(listId));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const reorder = (lists: IListModel[]) => {
  const success = (lists: IListModel[]) => ({ type: listActionType.REORDER_SUCCESS, lists });

  return (dispatch: Dispatch<Action>) => {
    dispatch(success(lists));
  };
};

export const listActions = {
  create,
  getByUserId,
  update,
  reorder,
  remove
};
