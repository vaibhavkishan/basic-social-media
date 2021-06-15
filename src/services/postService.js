import http from './httpService';
import config from '../config.json';

export function postFeeds(post) {
  return http.post(config.apiPostsEndpoint, {
    userId: post.userId,
    title: post.title,
    body: post.body,
  });
}
