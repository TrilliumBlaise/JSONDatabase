import Test from './test.js'
import initTest2Controller from './test2-controller.js';

export default function initTestController() {
    console.log('hello1')
    const root = document.querySelector('.test');
    let view = new Test(root)

    document.querySelector('#change').addEventListener('click', () => {
        initTest2Controller()
    })
}
initTestController();