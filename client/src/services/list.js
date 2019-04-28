import config from 'config';
import { authHeader } from '../helpers';

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (response.ok) {
      return data;
    }

    if (response.status === 401) {
      logout();
      window.location.reload(true);
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  });
};

const create = (list) => {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(list)
  };

  return fetch(`${config.apiUrl}/lists/create`, requestOptions).then(
    handleResponse
  );
};

const getByUserId = (userId) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/lists/users/${userId}`, requestOptions).then(
    handleResponse
  );
};

const update = (list) => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(list)
  };

  return fetch(`${config.apiUrl}/lists/${list._id}`, requestOptions).then(
    handleResponse
  );
};

const remove = (listId) => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/lists/${listId}`, requestOptions).then(
    handleResponse
  );
};

export const listServices = {
  getByUserId,
  create,
  update,
  remove
};
