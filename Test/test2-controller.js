import Test2 from './test2.js'
import Test from './test.js'
import initTestController from './test-controller.js';

export default function initTest2Controller() {
    console.log('hello2')
    const root = document.querySelector('.test');
    const head = document.querySelector('head');
    const newScript = document.createElement('script');
    newScript.src = "./test2-controller.js"
    newScript.type = "module"
    let view = new Test2(root)
    head.replaceChild(newScript, document.querySelector('script'));

    document.querySelector('#change2').addEventListener('click', () => {
        initTestController();
    })
}