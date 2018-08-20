import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = (username, password) => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      console.err('Register failed', err);
    });
};
