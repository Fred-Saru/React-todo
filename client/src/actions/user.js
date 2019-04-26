import { userActionType } from '../constants';
import { alertActions } from './alert';
import { userServices } from '../services';

const login = (username, password) => {
  const request = (user) => ({ type: userActionType.LOGIN_REQUEST, user });
  const success = (user) => ({ type: userActionType.LOGIN_SUCCESS, user });
  const failure = (err) => ({ type: userActionType.LOGIN_FAILURE, err });

  return (dispatch) => {
    dispatch(request({ username }));

    userServices
      .login(username, password)
      .then((user) => {
        dispatch(success(user));
        window.location.assign('/');
      })
      .catch((err) => {
        dispatch(failure(err));
        dispatch(alertActions.error(err));
      });
  };
};

const logout = () => {
  userServices.logout();
  return { type: userActionType.LOGOUT };
};

const register = (user) => {
  const request = (user) => ({ type: userActionType.REGISTER_REQUEST, user });
  const success = (user) => ({ type: userActionType.REGISTER_SUCCESS, user });
  const failure = (err) => ({ type: userActionType.REGISTER_FAILURE, err });

  return (dispatch) => {
    dispatch(request(user));

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

const update = (user) => {
  const request = (user) => ({ type: userActionType.UPDATE_REQUEST, user });
  const success = (user) => ({ type: userActionType.UPDATE_SUCCESS, user });
  const failure = (err) => ({ type: userActionType.UPDATE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(user));

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

const remove = (id) => {
  const request = (id) => ({ type: userActionType.REMOVE_REQUEST, id });
  const success = (id) => ({ type: userActionType.REMOVE_SUCCESS, id });
  const failure = (err) => ({ type: userActionType.REMOVE_FAILURE, err });

  return (dispatch) => {
    dispatch(request(id));

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
