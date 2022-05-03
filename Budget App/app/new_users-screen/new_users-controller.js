import UserLoginAPI from "../../backend/user-database/UserLoginAPI.js";
import LoginScreen from "../login-screen/login.js";
import ConfirmEnrollmentScreen from "../confirm-enrollment-screen/confirm-enrollment.js";
import NewUserScreen from "./new_users.js";
import initLoginController from "../login-screen/login-controller.js";

export default function initNewUserController() {
    console.log('hello new user')
    //Global variables
    const root = document.querySelector('.app');
    const script = document.createElement('script');
    const head = document.querySelector('head');
    script.src = './app/new_users-screen/new_users-controller.js';
    script.type = 'module';
    let view = new NewUserScreen(root);
    head.replaceChild(script, document.querySelector('script'));
    let goodUserNameFlag = false;
    let goodPasswordFlag = false;
    let moveOnFlag = false;
    
    //Checks if the username entered is already in the databse once user has changed focus from username input element
    document.querySelector('#username').addEventListener('blur', () => {
        const users = UserLoginAPI.findAllUserLogins();
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.username === document.querySelector('#username').value) {
                document.querySelector('.span-username').style.display = "block"
                return;
            }
        }
        goodUserNameFlag = true;
    });

    //Removes all error messages when user focuses on username input element
    document.querySelector('#username').addEventListener('focus', () => {
        document.querySelector('.span-password1').style.display = "none";
        document.querySelector('.span-password2').style.display = "none";
        document.querySelector('.span-username').style.display = "none"
    });

    //Checks the password for correct complexity once user has removed focus from password input element
    document.querySelector('#password').addEventListener('focusout', () => {
        const password = document.querySelector('#password').value; 
        //Password must be at least 8 characters in length
        if (password.length < 8 && password.length != 0) {
            document.querySelector('.span-password1').style.display = "block"
            return;
        }
        //regex tests for password
        const hasUpperCase = /[A-Z]/.test(password); //Contains capital letter
        const hasNumbers = /\d/.test(password); //Contains a number
        const hasNonalphas = /\W/.test(password); //Contains a non-word character (a symbol)
        //At least 2 of the above regex tests must be passed
        if (hasUpperCase + hasNumbers + hasNonalphas < 2 && password.length != 0) {
            document.querySelector('.span-password2').style.display = "block"
            return;
        }
        goodPasswordFlag = true;
    });

    //Removes the password based error messages when the password input element is focused
    document.querySelector('#password').addEventListener('focus', () => {
        document.querySelector('.span-password1').style.display = "none";
        document.querySelector('.span-password2').style.display = "none";
    });

    //Checks that the password input element's value 
    //and the the matching-password input element's value are the same when the user 
    //removes focus from the matching password input element
    document.querySelector('#matching-password').addEventListener('blur', () => {
        const password = document.querySelector('#password').value;
        const confirmPwrd = document.querySelector('#matching-password').value;
        if  (password != confirmPwrd) {
            document.querySelector('.span-matching-password').style.display = 'block';
            return;
        }
        if (goodPasswordFlag && goodUserNameFlag) {
            moveOnFlag = true;
        }
    });

    //Removes the matching password based error message when the matching password input element is focused
    document.querySelector('#matching-password').addEventListener('focus', () => {
        document.querySelector('.span-matching-password').style.display = 'none';
    })

    //Adds eventListner to the enter button on click
    document.querySelector('#enter').addEventListener('click', () => {
        //Checks if the moveOnFlag has been set to true
        if (!moveOnFlag) {
            return;
        }
        //The values entered into the input elements
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        //Creats and saves the new user data
        const user = {username: username, password: password, newUser: true};
        UserLoginAPI.saveUserLogin(user);

        //Changes the view to the ConfirmEnrollmentSCreen
        view = new ConfirmEnrollmentScreen(root, username);

        //AFter a 5 seconds, changes the view to the IntakeScreen and loads the IntakeScreen script
        setTimeout(function() {
            initLoginController(root);
        }, 5000);
        
    });

    //Adds eventListner to return button on click
    document.querySelector('#return').addEventListener('click', () => {
        initLoginController(root);
    });
}