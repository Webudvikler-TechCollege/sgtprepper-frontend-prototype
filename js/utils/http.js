import { getToken, clearToken, isTokenExpired } from "./token.js";

// Sender HTTP-anmodninger til API'et med automatisk token-håndtering
export const request = async (url = undefined, method = 'GET', body = {}) => {
  if (!url) throw new Error('Missing url');

  const token = getToken();

  // Tjek om token er udløbet FØR vi sender anmodning
  if (token && isTokenExpired(token.accessToken)) {
    clearToken();
    // Send til login-siden hvis ikke allerede der
    if (!window.location.pathname.includes('login')) {
      window.location.href = '/index.htm#/login';
    }
    throw new Error('Token expired');
  }

  const hasBody = body !== undefined && body !== null && method !== 'GET';

  // Opsæt headers med token hvis bruger er logget ind
  const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'fetch',
    ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {})
  });

  const options = {
    method,
    headers,
    ...(hasBody ? { body: JSON.stringify(body) } : {}),
  }

  try {
    const response = await fetch(url, options);

    // Håndter 401 Unauthorized (udløbet eller ugyldig token)
    if (response.status === 401) {
      clearToken();
      if (!window.location.pathname.includes('login')) {
        window.location.href = '/index.htm#/login';
      }
      throw new Error('Unauthorized - please login again');
    }

    const result = await response.json();

    // Hvis anmodningen fejlede, kast en fejl med status-kode
    if (!response.ok) {
      const err = new Error(result?.message || response.statusText);
      err.status = response.status;
      err.body = result;
      throw err;
    }

    return result;
  } catch (error) {
    // Videresend login-relaterede fejl
    if (error.message === 'Unauthorized - please login again' ||
      error.message === 'Token expired') {
      throw error;
    }

    // Videresend alle andre fejl
    throw error;
  }
}