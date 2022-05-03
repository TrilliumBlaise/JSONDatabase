//Creates the NewUserScreen view
export default class NewUserScreen {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <div class="new_users screen">
            <div class="thankyou">
                <h1>Thank you for choosing<br>Best Budget!</h1>
            </div>
            <div class="form">
                <div class="username">
                    <h2>Username:</h2>
                    <span class='span-username'>That username is already taken.</span>
                    <input id= 'username' type="text" placeholder="Name Here">
                </div>
                <div class="password">
                    <h2>Password:</h2>
                    <span class= 'span-password1'>Password must be at least 8 characters long</span>
                    <span class= 'span-password2'>Password must have at least 2 of the following: Upper Case, Number, Symbol</span>
                    <input type="password" id="password" placeholder="*********">
                </div>
                <div class="matching-password">
                    <h2>Confirm Password:</h2>
                    <span class= 'span-matching-password' >Entered passwords do not match</span>
                    <input type="password" id="matching-password" placeholder="*********">
                    <button id="enter">ENTER</button>
                </div>
            </div>
            <button class="link"  id="return"><u>RETURN</u></button>
        </div>
        `
    }
}