import http from './httpService';
import config from '../config.json';

export function getFeeds() {
  return http.get(config.apiPostsEndpoint);
}
