import { Authorize } from '../models/loginModel.js';
import { getToken, clearToken, isTokenExpired } from './token.js';

export function logout() {
  clearToken();
  if (!window.location.pathname.includes('/login')) {
    window.location.href = '/index.htm#/login';
  }
}

export async function isLoggedIn() {
  const token = getToken();

  if (!token?.accessToken) {
    return false;
  }

  if (isTokenExpired(token.accessToken)) {
    logout();
    return false;
  }

  try {
    const response = await Authorize();

    if (!response) {
      logout();
      return false;
    }

    return true;
  } catch {
    return false;
  }
}