import { Action, Dispatch } from 'redux';

import { taskActionType } from '../constants';
import { taskServices } from '../services';

import { ITaskModel } from '../models';

export interface ITaskActionCreateRequest extends Action {
  type: 'TASK_CREATE_REQUEST'
};

export interface ITaskActionCreateSuccess extends Action {
  type: 'TASK_CREATE_SUCCESS',
  task: ITaskModel
};

export interface ITaskActionCreateFailure extends Action {
  type: 'TASK_CREATE_FAILURE',
  err: string
};

export interface ITaskActionUpdateRequest extends Action {
  type: 'TASK_UPDATE_REQUEST'
};

export interface ITaskActionUpdateSuccess extends Action {
  type: 'TASK_UPDATE_SUCCESS',
  task: ITaskModel
};

export interface ITaskActionUpdateFailure extends Action {
  type: 'TASK_UPDATE_FAILURE',
  err: string
};

export interface ITaskActionRemoveRequest extends Action {
  type: 'TASK_REMOVE_REQUEST'
};

export interface ITaskActionRemoveSuccess extends Action {
  type: 'TASK_REMOVE_SUCCESS',
  taskId: string
};

export interface ITaskActionRemoveFailure extends Action {
  type: 'TASK_REMOVE_FAILURE',
  err: string
};

export interface ITaskActionGetByListRequest extends Action {
  type: 'TASK_GETBYLIST_REQUEST'
};

export interface ITaskActionGetByListSuccess extends Action {
  type: 'TASK_GETBYLIST_SUCCESS',
  listId: string,
  tasks: ITaskModel[]
};

export interface ITaskActionGetByListFailure extends Action {
  type: 'TASK_GETBYLIST_FAILURE',
  err: string
};

export type TaskActions = ITaskActionCreateRequest | 
                          ITaskActionCreateSuccess | 
                          ITaskActionCreateFailure | 
                          ITaskActionUpdateRequest | 
                          ITaskActionUpdateSuccess | 
                          ITaskActionUpdateFailure | 
                          ITaskActionRemoveRequest | 
                          ITaskActionRemoveSuccess | 
                          ITaskActionRemoveFailure | 
                          ITaskActionGetByListRequest | 
                          ITaskActionGetByListSuccess | 
                          ITaskActionGetByListFailure;

const create = (task: ITaskModel) => {
  const request = () => ({ type: taskActionType.CREATE_REQUEST });
  const success = (task: ITaskModel) => ({ type: taskActionType.CREATE_SUCCESS, task });
  const failure = (err: string) => ({ type: taskActionType.CREATE_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    taskServices
      .create(task)
      .then((task) => {
        dispatch(success(task));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const update = (task: ITaskModel) => {
  const request = () => ({ type: taskActionType.UPDATE_REQUEST });
  const success = (task: ITaskModel) => ({ type: taskActionType.UPDATE_SUCCESS, task });
  const failure = (err: string) => ({ type: taskActionType.UPDATE_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    taskServices
      .update(task)
      .then((task) => {
        dispatch(success(task));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const remove = (taskId: string) => {
  const request = () => ({ type: taskActionType.REMOVE_REQUEST });
  const success = (taskId: string) => ({ type: taskActionType.REMOVE_SUCCESS, taskId });
  const failure = (err: string) => ({ type: taskActionType.REMOVE_FAILURE, err });

  return (dispatch: Dispatch<Action>) => {
    dispatch(request());

    taskServices
      .remove(taskId)
      .then(() => {
        dispatch(success(taskId));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const getByListId = (listId: string) => {
  const request = () => ({ type: taskActionType.GETBYLIST_REQUEST });
  const success = (listId: string, tasks: any) => ({ type: taskActionType.GETBYLIST_SUCCESS, listId, tasks });
  const failure = (err: string) => ({ type: taskActionType.GETBYLIST_FAILURE, err });

  return (dispatch: any) => {
    dispatch(request());

    taskServices
      .getByListId(listId)
      .then((tasks) => {
        dispatch(success(listId, tasks));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

export const taskActions = {
  create,
  update,
  remove,
  getByListId
};