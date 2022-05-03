import UserLoginAPI from "../../backend/user-database/UserLogInAPI.js";
import initBudgetController from "../budget-screen/budget-screen-controller.js";
import initIntakeController from "../intake-screen/intake-screen-controller.js";
import initNewUserController from "../new_users-screen/new_users-controller.js";
import WelcomeScreen from "../welcome-screen/welcome.js";
import LoginScreen from "./login.js";

let view;

export default function initLoginController(root){
    console.log('hello login');
    //global variables
    view = new LoginScreen(root);

    const span = document.querySelector('.log-in-span')
    //Removes the span from view when username element is focused
    document.querySelector('#username').addEventListener('focus', () => {
        span.style.display = 'none';
    });

    //Removes the span from view when password element is focused
    document.querySelector('#password').addEventListener('focus', () => {
        span.style.display = 'none';
    })

    document.querySelector('#password').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkUserLogin(root);
        }
    })
    //Creates a list of all buttons in the document
    document.querySelectorAll('button').forEach(button => {
        //Adds eventListner to enter button
        if (button.id === 'enter') {
            button.addEventListener('click', () => {
                checkUserLogin(root);
            });
        }

        //Adds eventListener to the new-user button
        if (button.id === 'new-user') {
            //On click, sends the user to the NewUserScreen
            button.addEventListener('click', () => {
                initNewUserController(root);
            })
        }
    })  
}

function checkUserLogin(root) {
    const username = document.querySelector('#username').value.toLowerCase();
    const password = document.querySelector('#password').value;
    if (!username && !password) {
        return;
    }
    const users = UserLoginAPI.findAllUserLogins();
    let userFound = false;

    //Loops through the users in the database
    for (let i = 0; i < users.length; i++) {
        const user = users[i]; //Sets the current user in the list of users
        //If the user is not the one being searched for, continues the loop
        if (user.username != username) {
            continue;
        }
        //If the user is the one being searched for the passwords don't match displays error message
        if (user.username === username && user.password != password) {
            span.innerHTML = "The password is incorrect!";
            span.style.display = 'block';
            userFound = true;
            return;
        }
        //If the user is the one being searched for and the passwords match, logs the user in
        if (user.username === username && user.password === password) {
            userFound = true;
            //If the user is new to the app takes user to the intake screen to fill out their profile
            if (user.newUser === true) {
                root.innerHTML = `<div class='new-user-welcome'>Welcome, ${user.username}! Please fill in the user profile when the next screen loads.</div>`
                setTimeout(function() {
                    initIntakeController(root, user);
                }, 5000);
                return;
            }
            view = new WelcomeScreen(root, username);
            setTimeout(function() {
                initBudgetController(root, username);
            }, 5000)
            
        }
    }
    //If the user is not in the database prompts the user to create an account.
    if (!userFound) {
        span.innerHTML = "The username was not found. Please make an account if you are a new user!";
        span.style.display = 'block';
    }
}