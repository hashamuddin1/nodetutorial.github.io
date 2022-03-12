const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}


//emitter tabhi run hoga jab usko fire krege
//emitter non blocking io module par kam krta hay
const myEmitter = new MyEmitter();
myEmitter.on('hasham', () => {
    console.log('MOTOR BAND KARO!');
    setTimeout(() => {
        console.log("JALDI KARO")
    }, 3000)
});
console.log("CODE IS RUNNING");
myEmitter.emit('hasham');
console.log("CODE IS STILL RUNNING");