import * as config from 'config';
import { authHeader } from '../helpers';

const handleResponse = (response: any) => {
  return response.text().then((text: any) => {
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

const login = (username: string, password: string) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const register = (user: any) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(
    handleResponse
  );
};

const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
};

const getById = (id: string) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
};

const update = (user: any) => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user._id}`, requestOptions).then(
    handleResponse
  );
};

const remove = (id: string) => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
};

export const userServices = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  remove
};
