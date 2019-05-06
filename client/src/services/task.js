import config from 'config';
import { authHeader } from '../helpers';

const handleResponse = (response) => {
  return response.text().then((text) => {
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

const create = (task) => {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  };

  return fetch(`${config.apiUrl}/tasks/create`, requestOptions).then(handleResponse);
};

const update = (task) => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  };

  return fetch(`${config.apiUrl}/tasks/${task._id}`, requestOptions).then(handleResponse);
};

const remove = (taskId) => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/tasks/${taskId}`, requestOptions).then(handleResponse);
};

const getByListId  = (listId) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/tasks/lists/${listId}`, requestOptions).then(
    handleResponse
  );
};

export const taskServices = {
  create,
  update,
  remove,
  getByListId
};