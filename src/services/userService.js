import http from './httpService';
import config from '../config.json';

export function getUsers() {
  return http.get(config.apiUserEndpoint);
}

export function getUserById(id) {
  return http.get(`${config.apiUserEndpoint}/${id}`);
}
