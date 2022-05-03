export default class Test{
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <button id= 'change'>CHANGE</button>
        `
    }
}