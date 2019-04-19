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
      .then((newList) => {
        dispatch(success(newList));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

const update = (id, params) => {
  const request = (id) => ({ type: listActionType.UPDATE_REQUEST, id });
  const success = (list) => ({ type: listActionType.UPDATE_SUCCESS, list });
  const failure = (err) => ({ type: listActionType.UPDATE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(id));

    listServices
      .update(id, params)
      .then(() => {
        dispatch(success(list));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

const remove = (id) => {
  const request = (id) => ({ type: listActionType.REMOVE_REQUEST, id });
  const success = (id) => ({ type: listActionType.REMOVE_SUCCESS, id });
  const failure = (err) => ({ type: listActionType.REMOVE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(id));

    listServices
      .remove(id)
      .then(() => {
        dispatch(success(id));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

const getByUserId = (userId) => {
  const request = () => ({ type: listActionType.GETBYUSER_REQUEST });
  const success = (lists) => ({ type: listActionType.GETBYUSER_SUCCESS, lists });
  const failure = (err) => ({ type: listActionType.GETBYUSER_FAILURE, err });

  return (dispatch) => {
    dispatch(request());

    listServices
      .getByUserId(userId)
      .then((lists) => {
        dispatch(success(lists));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

const getById = (id) => {
  const request = () => ({ type: listActionType.GETBYID_REQUEST });
  const success = (list) => ({ type: listActionType.GETBYID_SUCCESS, list });
  const failure = (err) => ({ type: listActionType.GETBYID_FAILURE, err });

  return (dispatch) => {
    dispatch(request());

    listServices
      .getById(id)
      .then((list) => {
        dispatch(success(list));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

const getAll = () => {
  const request = () => ({ type: listActionType.GETALL_REQUEST });
  const success = (lists) => ({ type: listActionType.GETALL_SUCCESS, lists });
  const failure = (err) => ({ type: listActionType.GETALL_FAILURE, err });

  return (dispatch) => {
    dispatch(request());

    listServices
      .getAll()
      .then((lists) => {
        dispatch(success(lists));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

export const listActions = {
  create,
  update,
  remove,
  getAll,
  getById,
  getByUserId
};