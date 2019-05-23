import * as config from 'config';
import { authHeader } from '../helpers';

const handleResponse = (response: any) => {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text);

    if (response.ok) {
      return data;
    }

    if (response.status === 401) {
      window.location.assign('/login');
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  });
};

const create = (list: any) => {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(list)
  };

  return fetch(`${config.apiUrl}/lists/create`, requestOptions).then(
    handleResponse
  );
};

const getByUserId = (userId: string) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/lists/users/${userId}`, requestOptions).then(
    handleResponse
  );
};

const update = (list: any) => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(list)
  };

  return fetch(`${config.apiUrl}/lists/${list._id}`, requestOptions).then(
    handleResponse
  );
};

const remove = (listId: string) => {
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
