
let date = new Date();
let todaysDate = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let selectedDay;
const currentDate = date;
const todayElement = document.querySelector('.today');
const monthElement = document.querySelector('.month');
const yearElement = document.querySelector('.year');

const arrayOfDateElements = document.querySelectorAll('.date');
let arrayOfDates = new Array(42);

//Loads the current date into the calender and sets out the days.
document.addEventListener('DOMContentLoaded', () => {
    todayElement.innerHTML = `Today: ${setMonthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`
    arrayOfDateElements[date.getDate() + 1].style.backgroundColor = 'rgb(0,0,139,0.5)'
    monthElement.innerHTML = setMonthName(month);
    yearElement.innerHTML = year;
    fillDaysOfMonth(date);
});

//Changes the selected month by one less
document.querySelector('.left-arrow').addEventListener('click', () => {
    arrayOfDateElements[currentDate.getDate() + 1].style.backgroundColor = ''
    year = date.getFullYear();
    if (date.getMonth() === 0) {
        year -= 1;
    }
    month = date.getMonth() - 1;
    if (month < 0) {
        month = 11;
    }
    date.getMonth() - 1;
    date = new Date(`${setMonthName(month)} 1, ${year} 23:15:30`);
    if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
        arrayOfDateElements[currentDate.getDate() + 1].style.backgroundColor = 'rgb(0,0,139,0.5)'
    }
    monthElement.innerHTML = setMonthName(date.getMonth());
    yearElement.innerHTML = date.getFullYear();
    fillDaysOfMonth(date);
});

//Changes the selected month by one more
document.querySelector('.right-arrow').addEventListener('click', () => {
    arrayOfDateElements[currentDate.getDate() + 1].style.backgroundColor = ''
    year = date.getFullYear();

    if (date.getMonth() === 11) {
        year += 1;
    }
    month = date.getMonth() + 1;
    if (month > 11) {
        month = 0;
    }
    date = new Date(`${setMonthName(month)} 1, ${year} 23:15:30`);
    if (date.getMonth() === currentDate.getMonth()  && date.getFullYear() === currentDate.getFullYear()) {
        arrayOfDateElements[currentDate.getDate() + 1].style.backgroundColor = 'rgb(0,0,139,0.5)'
    }
    monthElement.innerHTML = setMonthName(date.getMonth());
    yearElement.innerHTML = date.getFullYear();
    fillDaysOfMonth(date);
});

//Allows for user to minimize the calender
document.querySelector('.open-close').addEventListener('click', () => {
    const monthYear = document.querySelector('.month-year-selector');
    const daysOfWeek = document.querySelector('.days-of-week');
    const dates = document.querySelector('.dates');

    if (monthYear.classList.contains('minimize')) {
        monthYear.classList.remove('minimize');
        daysOfWeek.classList.remove('minimize');
        dates.classList.remove('minimize');
        document.querySelector('.open-close').classList.add('flip');
        return;
    }
    monthYear.classList.add('minimize');
    daysOfWeek.classList.add('minimize');
    dates.classList.add('minimize');
    document.querySelector('.open-close').classList.remove('flip');
});

//Allows the user to select a date
document.querySelector('.month-year').addEventListener('click', () => {
    document.querySelector('.select-date').classList.remove('minimize');
    document.querySelector('#select-date').focus();
});

document.querySelector('#select-date').addEventListener('blur', () => {
    document.querySelector('.select-date').classList.add('minimize');
});

//Allows the user to enter a date in by the keyboard
document.querySelector('.select-date').addEventListener('change', () => {
    let selectDate = document.querySelector('#select-date').value;
    selectDate = selectDate.split('-');
    const year = selectDate[0];
    const month = Number(selectDate[1]);
    const day = selectDate[2];
    if (year < 1000) {
        return;
    }
    const date = new Date(`${month} ${day}, ${year} 23:15:30`)
    fillDaysOfMonth(date);
    arrayOfDateElements[currentDate.getDate() + 1].style.backgroundColor = ''
    if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
        arrayOfDateElements[currentDate.getDate() + 1].style.backgroundColor = 'rgb(0,0,139,0.5)'
    }
    document.querySelector('.select-date').classList.add('minimize')
    monthElement.innerHTML = setMonthName(month - 1);
    yearElement.innerHTML = year;
    selectsDay(day);
});

//Allows the user to return to the current date
document.querySelector('.today').addEventListener('click', () => {
    fillDaysOfMonth(currentDate);
    monthElement.innerHTML = setMonthName(currentDate.getMonth());
    yearElement.innerHTML = currentDate.getFullYear();
    selectsDay(currentDate.getDate());
    if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
        arrayOfDateElements[currentDate.getDate() + 1].style.backgroundColor = 'rgb(0,0,139,0.5)'
    }
});

//Allows the user to select a date
arrayOfDateElements.forEach(date => {
    date.addEventListener('click', () => {
        const index = Array.prototype.indexOf.call(arrayOfDateElements, date);
        for (let i = 0; i < arrayOfDateElements.length; i++) {
            arrayOfDateElements[i].classList.remove('selected-day');
        }
        date.classList.add('selected-day');
        selectedDay = arrayOfDates[index];
        
    });
});

//Converts a 0-11 to Month names
function setMonthName(month) {
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December'
    }
}

//Fills arrayOfDates with the dates of the previous month, this month and next month
function fillArrayOfDates(date) {
    const newDate = new Date(`${setMonthName(date.getMonth())} 1, ${date.getFullYear()} 23:15:30`);
    
    const dayOfNewDate = newDate.getDay();
    
    let lastDay = 0;
    let daysInMonth = getDaysInMonth(newDate.getMonth());
    
    let day = 1;
    for (let i = 0; i <= daysInMonth; i++) {
        if (i < dayOfNewDate) {
            daysInMonth++;
            continue;
        }
        arrayOfDates.splice(i, 1, new Date(`${setMonthName(newDate.getMonth())} ${day++}, ${newDate.getFullYear()} 23:15:30`));
        lastDay = i;
    }
    daysInMonth = getDaysInMonth(newDate.getMonth() - 1);
    
    for (let i = 0; i < dayOfNewDate; i++) {
        arrayOfDates.splice(i, 1, new Date(`${setMonthName(newDate.getMonth() - 1)} ${daysInMonth - ((dayOfNewDate - 1) - i)}, ${newDate.getFullYear()} 23:15:30`));
    }
    day = 1;
    for (let i = lastDay; i < arrayOfDateElements.length; i++) {
        arrayOfDates.splice(i, 1, new Date(`${setMonthName(newDate.getMonth() + 1)} ${day++}, ${newDate.getFullYear()} 23:15:30`));
    }
}
//Fills out the calender according to the month and year
function fillDaysOfMonth(date) {
    const newDate = new Date(`${setMonthName(date.getMonth())} 1, ${date.getFullYear()} 23:15:30`);
    fillArrayOfDates(newDate);
    keepSelectedDay();
    for (let i = 0; i < arrayOfDates.length; i++) {
        if (newDate.getMonth() === arrayOfDates[i].getMonth()) {
            arrayOfDateElements[i].innerHTML = arrayOfDates[i].getDate();
            arrayOfDateElements[i].style.color = 'black'
        }
        if (newDate.getMonth() != arrayOfDates[i].getMonth()) {
            arrayOfDateElements[i].innerHTML = arrayOfDates[i].getDate();
            arrayOfDateElements[i].style.color = 'grey'
        }
    }
}

//Checks to see if a year is a leap year
function checkLeapYear() {
    const m4 = year % 4;
    const m100 = year % 100;
    const m400 = year % 400;
    if ((m4 != 0) || ((m100 == 0) && (m400 != 0))) {
        return 28
    }
    return 29;
}

//Returns the number of days in a month
function getDaysInMonth(month) {
    if (month < 0) {
        month = 11;
    }
    if (month > 11) {
        month = 0;
    }
    switch (month) {
        case 0: {return 31; }
        case 1: {
            return checkLeapYear();
        }
        case 2: {return 31;}
        case 3: {return 30;}
        case 4: {return 31;}
        case 5: {return 30;}
        case 6: {return 31;}
        case 7: {return 31;}
        case 8: {return 30;}
        case 9: {return 31;}
        case 10: {return 30;}
        case 11: {return 31;}
    }
}

//Shows the user which day they have selected through the select-date element
function selectsDay(day) {
    for (let i = 0; i < arrayOfDateElements.length; i++) {
        arrayOfDateElements[i].classList.remove('selected-day')
    }
    for (let i = 0; i < arrayOfDateElements.length; i++) {
        if (arrayOfDateElements[i].innerHTML == day && arrayOfDateElements[i].style.color === 'black') {
            arrayOfDateElements[i].classList.add('selected-day');
            selectedDay = arrayOfDates[i];
        }
    }
}

//Makes sure that the any day that was selected gets carried over to the next month
function keepSelectedDay() {
    for (let i = 0; i < arrayOfDateElements.length; i++) {
        arrayOfDateElements[i].classList.remove('selected-day')
    }
    if (selectedDay) {
        for (let i = 0; i < arrayOfDateElements.length; i++) {
            if (arrayOfDates[i].getMonth() === selectedDay.getMonth() && arrayOfDates[i].getDate() === selectedDay.getDate()) {
                arrayOfDateElements[i].classList.add('selected-day');
            }
        }
    }
}