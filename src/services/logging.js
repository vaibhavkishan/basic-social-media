const tokenKey = 'currentUser';

export function login(value) {
  localStorage.setItem(tokenKey, value);
  window.location = '/';
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem('userId');
  window.location = '/';
}
