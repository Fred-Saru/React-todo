import { taskActionType } from '../constants';
import { taskServices } from '../services';

const create = (task) => {
  const request = (task) => ({ type: taskActionType.CREATE_REQUEST, task });
  const success = (task) => ({ type: taskActionType.CREATE_SUCCESS, task });
  const failure = (err) => ({ type: taskActionType.CREATE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(task));

    taskServices
      .create(task)
      .then((task) => {
        dispatch(success(task));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const update = (task) => {
  const request = (task) => ({ type: taskActionType.UPDATE_REQUEST, task });
  const success = (task) => ({ type: taskActionType.UPDATE_SUCCESS, task });
  const failure = (err) => ({ type: taskActionType.UPDATE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(task));

    taskServices
      .update(task)
      .then((task) => {
        dispatch(success(task));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const remove = (taskId) => {
  const request = (taskId) => ({ type: taskActionType.REMOVE_REQUEST, taskId });
  const success = (taskId) => ({ type: taskActionType.REMOVE_SUCCESS, taskId });
  const failure = (err) => ({ type: taskActionType.REMOVE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(taskId));

    taskServices
      .remove(taskId)
      .then(() => {
        dispatch(success(task));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const getByListId = (listId) => {
  const request = (listId) => ({ type: taskActionType.GETBYLIST_REQUEST, listId });
  const success = (tasks) => ({ type: taskActionType.GETBYLIST_SUCCESS, tasks });
  const failure = (err) => ({ type: taskActionType.GETBYLIST_FAILURE, err });

  return (dispatch) => {
    dispatch(request(listId));

    taskServices
      .getByListId(listId)
      .then((tasks) => {
        dispatch(success(tasks));
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