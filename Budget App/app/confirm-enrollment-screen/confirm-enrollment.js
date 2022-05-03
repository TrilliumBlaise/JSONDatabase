export default class ConfirmEnrollmentScreen {
    constructor (root, user) {
        this.root = root;
        this.root.innerHTML = `
        <div class="confirm screen">
        ${user}, your new account has been successfully created!
        </div>
        `
    }
}