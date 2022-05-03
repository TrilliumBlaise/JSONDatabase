export default class IntakeScreen {
    constructor(root, user) {
        this.root = root;
        this.user = user;
        this.root.innerHTML = `
        <div class="intake screen">
            <div class="account">
                Amount in Account:
                <span></span>
                <input id="accAmount" type="text" placeholder="0.00" autofocus>
                <button class="next">NEXT</button>
                <button class="return"><u>LOG OUT</u></button>
                <button class="skip"><u>SKIP</u></button>
            </div>
            <div class="paycheck minimize">
                Net Paycheck:
                <span></span>
                <input type="text" id="paycheck" placeholder="0.00">
                Payday:
                <div class="radioBtns">
                    <input type="radio" name="day" id="sunday">
                    <label for="sunday">Sunday</label><br>
                    <input type="radio" name="day" id="monday">
                    <label for="monday">Monday</label><br>
                    <input type="radio" name="day" id="tuesday">
                    <label for="tuesday">Tuesday</label><br>
                    <input type="radio" name="day" id="wednesday">
                    <label for="wednesday">Wednesday</label><br>
                    <input type="radio" name="day" id="thursday">
                    <label for="thursday">Thursday</label><br>
                    <input type="radio" name="day" id="friday">
                    <label for="friday">Friday</label><br>
                    <input type="radio" name="day" id="saturday">
                    <label for="saturday">Saturday</label>
                </div>
                Frequency:
                <select name="frequency" id="payFrequency">
                    <option value="undefined">Select an Option</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <button class="next">NEXT</button>
                <button class="return"><u>RETURN</u></button>
                <button class="skip"><u>SKIP</u></button>
            </div>
            <div class="bills minimize">
                Bill Title:
                <span></span>
                <input type="text" id="bill" placeholder="Ex: Electric Bill">
                Amount:
                <input type="text" id="billAmount" placeholder="0.00">
                Frequency:
                <select name="frequency" id="billFrequency">
                    <option value = 'undefined'>Select an Option</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="6month">Every 6 Months</option>
                    <option value="yearly">Yearly</option>
                </select>
                <button class="next">ADD ANOTHER</button>
                <button class="return"><u>RETURN</u></button>
                <button class="skip"><u>SKIP</u></button>
            </div>
            <div class="finished minimize">
                Your profile has been set up!
            </div>
        </div>
        `
    }
}