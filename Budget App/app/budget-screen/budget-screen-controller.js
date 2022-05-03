import CalenderComponent from "../../assets/calender/calender.js";
import BudgetScreen from './budget-screen.js'

export default function initBudgetController(root, username) {
    const view = new BudgetScreen(root, username);
    new CalenderComponent(document.querySelector('.budget-calender')) 
}
// const root = document.querySelector('.budget-calender');

// const view = new CalenderComponent(root);