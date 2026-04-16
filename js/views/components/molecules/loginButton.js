import { createButton } from "../atoms/index.js";

// Opretter en login/logout knap baseret på login-status
export const createLoginButton = (loggedIn, onClick, className = '') => {
    // Opretter knap med korrekt tekst
    const button = createButton(
        loggedIn ? 'Logout' : 'Login',
        'button', // Sørger for at knappen ikke submitter en form
        className
    );

    // Tilføjer click-event (håndteres i controller)
    button.addEventListener('click', onClick);

    return button;
}