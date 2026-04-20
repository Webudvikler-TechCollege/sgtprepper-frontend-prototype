/**
 * Hjælpefunktioner til håndtering af brugerens sessionstilstand.
 * Styrer omdirigering ved login, tokenvalidering og serverbaseret autorisationstjek.
 */
import { Authorize } from '../models/loginModel.js';
import { getToken, clearToken, isTokenExpired } from './token.js';

/**
 * Logger brugeren ud ved at slette det gemte token og omdirigere til login-siden.
 * Springer omdirigeringen over, hvis brugeren allerede befinder sig på login-siden.
 */
export function logout() {
  clearToken();
  if (!window.location.pathname.includes('/login')) {
    window.location.href = '/index.htm#/login';
  }
}

/**
 * Kontrollerer, om den nuværende bruger er autentificeret.
 *
 * Udfører tre lag af validering:
 *   1. Verificerer, at der findes et token i lageret.
 *   2. Tjekker, at tokenet ikke er udløbet lokalt.
 *   3. Bekræfter, at tokenet stadig er gyldigt på serveren via et Authorize-kald.
 *
 * Hvis et tjek fejler (undtagen netværks-/serverfejl), logges brugeren ud.
 *
 * @returns {Promise<boolean>} True hvis brugeren er autentificeret, ellers false.
 */
export async function isLoggedIn() {
  const token = getToken();

  // Afvis med det samme, hvis der ikke findes et token eller et adgangstoken
  if (!token?.accessToken) {
    return false;
  }

  // Log ud og afvis, hvis tokenet er overskredet sin udløbstid
  if (isTokenExpired(token.accessToken)) {
    logout();
    return false;
  }

  try {
    // Valider tokenet mod serveren
    const response = await Authorize();

    // Behandl et falsy svar som en autorisationsfejl
    if (!response) {
      logout();
      return false;
    }

    return true;
  } catch {
    // Fejl stille ved netværks- eller uventede fejl — brugeren logges ikke ud
    return false;
  }
}