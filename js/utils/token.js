import { getCookie, setCookie, deleteCookie } from './cookies.js';

const TOKEN_KEY = 'sgtprepper_token';

export function getToken() {
  try {
    const token = getCookie(TOKEN_KEY);
    return token ? JSON.parse(token) : null;
  } catch {
    return null;
  }
}

export function setToken(token) {
  setCookie(TOKEN_KEY, JSON.stringify(token), 7);
}

export function clearToken() {
  deleteCookie(TOKEN_KEY);
}

export function isTokenExpired(token) {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp ? payload.exp * 1000 < Date.now() : true;
  } catch {
    return true;
  }
}