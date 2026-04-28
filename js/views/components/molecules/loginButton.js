import { createButton } from "../atoms/index.js";

// Opretter en login/logout knap baseret på login-status
export const createLoginButton = (buttonTxt, onClick) => {
    
    // Opretter knap med korrekt tekst
    const button = createButton(' ', 'button', 'bg-[url("/assets/images/icons/login.svg")] w-6 h-6')

    // Tilføjer click-event (håndteres i controller)
    button.addEventListener('click', onClick);

    return button;
}