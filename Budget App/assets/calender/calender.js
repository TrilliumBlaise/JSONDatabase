export default class CalenderComponent {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <div class="calender screen">
            <div class="todays-date">
                <div class="today"></div>
                <button class="open-close flip"></button>
            </div>
            <div class="month-year-selector">
                <button class="left-arrow"></button>
                <div class="month-year">
                    <div class="month"></div>
                <div class="year"></div>
                </div>
                <button class="right-arrow"></button>
            </div>
            <div class="select-date minimize">
                <input id="select-date" type="date">
            </div>
            <div class="days-of-week">
                <div class="day">SUN</div>
                <div class="day">MON</div>
                <div class="day">TUE</div>
                <div class="day">WED</div>
                <div class="day">THU</div>
                <div class="day">FRI</div>
                <div class="day">SAT</div>
            </div>
            <div class="dates">
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
                <div class="date"></div>
            </div>
        </div>
        `
    }
}