//Creates the WelcomeScreen view
export default class WelcomeScreen {
    constructor(root, user) {
        this.root = root;
        this.root.innerHTML = `
        <h2 class = 'welcome screen'>
            Welcome back, ${user}!
        </h2>
        `
    }
}