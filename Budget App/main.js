import initLoginController from "./app/login-screen/login-controller.js";

//Adds the LogInScreen once the DOMContent has loaded
document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('.app');
    initLoginController(root);
})

