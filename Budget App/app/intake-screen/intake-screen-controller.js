import UserLoginAPI from '../../backend/user-database/UserLogInAPI.js';
import IntakeScreen from './intake-screen.js'
import initLoginController from '../login-screen/login-controller.js';
import initBudgetController from '../budget-screen/budget-screen-controller.js';
import UserAPI from '../../backend/user-database/UserAPI.js';

const newUser = {
    /*
        username: "string", 
        accAmount: "number", 
        paycheck: "object", 
        bills: "array of objects"
        */
    };
const billsArray = [];

export default function initIntakeController(root, user) {
    let view = new IntakeScreen(root, user);
    const account = document.querySelector('.account');
    account.querySelector('#accAmount').focus();
    const paycheck = document.querySelector('.paycheck');
    const bills = document.querySelector('.bills');
    const finished = document.querySelector('.finished');

    //Event Listeners for the account div element
    account.querySelector('.next').addEventListener('click', () => {
        if (!checkAmountForm(account)) return;
        account.classList.add('minimize');
        paycheck.classList.remove('minimize');
        paycheck.querySelector('#paycheck').focus();
    });

    //Allows user to hit enter after entering info into the text box
    account.querySelector('#accAmount').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (!checkAmountForm(account)) return;
            account.classList.add('minimize');
            paycheck.classList.remove('minimize');
            paycheck.querySelector('#paycheck').focus();
        }
    });

    account.querySelector('#accAmount').addEventListener('focus', (e) => {
        e.target.value = ''
        account.querySelector('span').style.display = 'none';
    });

    //Sets newUser.accAmount to undefined
    account.querySelector('.skip').addEventListener('click', () => {
        account.classList.add('minimize');
        paycheck.classList.remove('minimize');
        paycheck.querySelector('#paycheck').focus();
    });

    //Logs the user out and returns to the LoginSCreen
    account.querySelector('.return').addEventListener('click', () => {
        initLoginController();
    })

    //Event Listeners for the paycheck div element
    paycheck.querySelector('.next').addEventListener('click', () => {
        if (!checkPaycheckForm(paycheck)) return;
        paycheck.classList.add('minimize');
        bills.classList.remove('minimize');
        bills.querySelector('#bill').focus();
    })

    paycheck.querySelector('select').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!checkPaycheckForm(paycheck)) return;
            paycheck.classList.add('minimize');
            bills.classList.remove('minimize');
            bills.querySelector('#bill').focus();
        }
    })

    paycheck.querySelector('#paycheck').addEventListener('focus', (e) => {
        e.target.value = ''
        paycheck.querySelector('span').style.display = 'none'
    });
    paycheck.querySelector('.radioBtns').addEventListener('click', (e) => {
        paycheck.querySelector('span').style.display = 'none'
    });
    paycheck.querySelector('select').addEventListener('focus', (e) => {
        paycheck.querySelector('span').style.display = 'none'
    });
    
    //Sets newUser.paycheck to undefined
    paycheck.querySelector('.skip').addEventListener('click', () => {
        paycheck.classList.add('minimize');
        bills.classList.remove('minimize');
        bills.querySelector('#bill').focus();
    });

    //Returns to the previous section
    paycheck.querySelector('.return').addEventListener('click', () => {
        paycheck.classList.add('minimize');
        account.classList.remove('minimize');
        account.querySelector('#accAmount').focus();
    })

    //Event Listeners for bills div element
    //Adds a bill object to the billsArray array
    bills.querySelector('.next').addEventListener('click', () => {
        if (!checkBillsForm(bills)) return;
    });

    bills.querySelector('select').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!checkBillsForm(bills)) return;
        }
    })
    bills.querySelector('#bill').addEventListener('focus', (e) => {
        e.target.value = '';
        bills.querySelector('span').style.display = 'none';
    })
    bills.querySelector('#billAmount').addEventListener('focus', (e) => {
        e.target.value = '';
        bills.querySelector('span').style.display = 'none';
    })
    bills.querySelector('select').addEventListener('focus', () => {
        bills.querySelector('span').style.display = 'none';
    })

    bills.querySelector('.return').addEventListener('click', () => {
        bills.classList.add('minimize');
        paycheck.classList.remove('minimize');
        paycheck.querySelector('#paycheck').focus()
    })

    bills.querySelector('.skip').addEventListener('click', () => {
        if (billsArray.length > 0) {
            newUser.bills = billsArray;
        }
        newUser.username = user.username;
        bills.classList.add('minimize');
        finished.classList.remove('minimize');
        setTimeout(function() {
            user.newUser = false;
            UserLoginAPI.updateUserLogin(user);
            UserAPI.saveUser(newUser);
            initBudgetController(root, user);
        }, 5000)
    })
}

//Makes sure that the value entered is a positive or negative number
function checkAmount(value) {
    const regex = /^-?(?:\d+|\d{1,3}(?:,\d{3})*)(?:\.\d{1,2})?$/
    let isValid = regex.test(value);
    return isValid;
}

//Sets newUser.accAmount to amount.value
function checkAmountForm(account) {
    const amount = account.querySelector('#accAmount');
    const span = account.querySelector('span')
    
    if (!amount.value) {
        span.innerHTML = 'Please tell us how much is in your account or hit skip.'
        span.style.display = 'block';
        return false;
    }
    if (!checkAmount(amount.value)) {
        span.innerHTML = 'Please enter a value. To enter a value of only cents, use form 0.XX'
        span.style.display = 'block'
        return false;
    }
    newUser.accAmount = Number(amount.value);
    return true;
}

//Sets newUser.paycheck
function checkPaycheckForm(paycheck) {
    const check = paycheck.querySelector('#paycheck');
    const payday = paycheck.querySelectorAll("input[name= 'day']");
    const frequency = paycheck.querySelector('select');

    let selectedRadioButton;
    for (const radio of payday) {
        if (!radio.checked) {
            continue;
        }
        selectedRadioButton = radio.id;
    }
    const span = paycheck.querySelector('span');
    
    if (!checkAmount(check.value) || !selectedRadioButton || frequency.value === 'undefined') {
        span.innerHTML = 'Please tell us how much your net pay is or hit skip.'
        span.style.display = 'block';
        return false;
    }
    newUser.paycheck = {
        amount: Number(check.value),
        day: selectedRadioButton,
        frequency: frequency.value
    };
    return true;
}

function checkBillsForm(bills) {
    const billTitle = bills.querySelector('#bill');
    const amount = bills.querySelector('#billAmount');
    const frequency = bills.querySelector('select')
    const span = bills.querySelector('span');
    const skipBtn = bills.querySelector('.skip');

    if (!billTitle.value || !checkAmount(amount.value) || !frequency.value === 'undefined') {
        span.innerHTML = `Please fill out the form or hit ${skipBtn.innerHTML.toLowerCase()}`
        if (!checkAmount(amount)) {
            span.innerHTML = `Please fill out the amount with a valid number or hit ${skipBtn.innerHTML.toLowerCase()}`
        }
        span.style.display = 'block'
        return false;
    }
    const bill = {};
    bill.title = billTitle.value;
    bill.amount = 0 - Math.abs(Number(amount.value));
    bill.frequency = frequency.value;
    billsArray.push(bill);

    billTitle.value = '';
    amount.value = '';
    frequency.value = 'undefined';
    skipBtn.innerHTML = "<u>FINISHED</u>";
    billTitle.focus();
    return true;
}