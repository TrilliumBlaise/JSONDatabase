//Creates thew view of the LoginScreen
export default class LoginScreen {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <div class= 'log-in screen'>
            <div class= 'title'>
                Best Budget
            </div>
            <span class= 'log-in-span'></span>
            <input id= 'username'  type="text" placeholder= 'Username' autofocus><br>
            <input id= 'password' type="password" placeholder='Password'>
            <button id="enter">ENTER</button>
            <button class= 'link' id= 'new-user'><u>Don't have an account? Click Here!</u></button>
        </div>
        `
    }
}
