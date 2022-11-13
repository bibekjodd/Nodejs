// Events Module
// Node.js has built-in module called Events


const EventEmitter = require('events');
const event = new EventEmitter();


event.on('helloEvent', () => {
    console.log("Donald Trump");
})

event.on('helloEvent', () => {
    console.log("So this is event is calling it for the second time");
})

event.on('helloEvent', () => {
    console.log("Oh yes it event.emit can call the multiple event.on at the same time");
})

event.on('checkPage', (sc, msg) => {
    console.log(`Status Code: ${sc}\nMessage: ${msg}`);
});

event.emit('helloEvent');
event.emit('checkPage', 200, "ok");
