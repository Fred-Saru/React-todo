import { listActionType } from '../constants';
import { listServices } from '../services';

const create = (list) => {
  const request = (list) => ({ type: listActionType.CREATE_REQUEST, list });
  const success = (list) => ({ type: listActionType.CREATE_SUCCESS, list });
  const failure = (err) => ({ type: listActionType.CREATE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(list));

    listServices
      .create(list)
      .then((list) => {
        dispatch(success(list));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const getByUserId = (userId) => {
  const request = () => ({ type: listActionType.GETBYUSER_REQUEST });
  const success = (lists) => ({
    type: listActionType.GETBYUSER_SUCCESS,
    lists
  });
  const failure = (err) => ({ type: listActionType.GETBYUSER_FAILURE, err });

  return (dispatch) => {
    dispatch(request());

    listServices
      .getByUserId(userId)
      .then((list) => dispatch(success(list)))
      .catch((err) => dispatch(failure(err)));
  };
};

const update = (list) => {
  const request = (list) => ({ type: listActionType.UPDATE_REQUEST, list });
  const success = (list) => ({ type: listActionType.UPDATE_SUCCESS, list });
  const failure = (err) => ({ type: listActionType.UPDATE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(list));

    listServices
      .update(list)
      .then((list) => {
        dispatch(success(list));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const remove = (listId) => {
  const request = () => ({ type: listActionType.REMOVE_REQUEST });
  const success = (listId) => ({ type: listActionType.REMOVE_SUCCESS, listId });
  const failure = (err) => ({ type: listActionType.REMOVE_FAILURE, err });

  return (dispatch) => {
    dispatch(request());

    listServices
      .remove(listId)
      .then(() => {
        dispatch(success(listId));
      })
      .catch((err) => dispatch(failure(err)));
  };
};

const reorder = (lists) => {
  const success = (lists) => ({ type: listActionType.REORDER_SUCCESS, lists });

  return (dispatch) => {
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
