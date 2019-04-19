import config from 'config';
import { authHeader } from '../helpers';

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (response.ok) {
      return data;
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  });
};

const create = (name) => {
  const requestOptions = {
    method: 'POST',
    headers: authHeader()
  };

  fetch(`${config.apiUrl}/lists/create`, requestOptions).then(handleResponse);
};

const update = (id) => {
  const requestOptions = {
    method: 'PUT',
    headers: authHeader()
  };

  fetch(`${config.apiUrl}/lists/${id}`, requestOptions).then(handleResponse);
};

const remove = (id) => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  fetch(`${config.apiUrl}/lists/${id}`, requestOptions).then(handleResponse);
};

const getByUserId = (userId) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  fetch(`${config.appUrl}/lists/users/${userId}`, requestOptions).then(handleResponse);
};

const getById = (id) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  fetch(`${config.appUrl}/lists/${id}`, requestOptions).then(handleResponse);
};

const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  fetch(`${config.appUrl}/lists`, requestOptions).then(handleResponse);
};

export const listServices = {
  create,
  update,
  remove,
  getAll,
  getById,
  getByUserId
};