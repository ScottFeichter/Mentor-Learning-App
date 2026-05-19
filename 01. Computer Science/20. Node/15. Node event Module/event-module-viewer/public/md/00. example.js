const eventEmitter = require('events');

const myEventEmitter = new eventEmitter();

myEventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

myEventEmitter.emit('start', 1, 100);

// Line 5 has a callback defined inline as an anonymous arrow function expression being passed as an argument to the on method.

// Anonymous - it has no name

// Arrow function - uses => syntax

// Expression - it's a function reference being passed as an argument

// The callback does not execute when passed to on()

// The on() method stores this function reference internally (likely in an array/map)

// When emit('start', 1, 100) is called, the EventEmitter looks up stored callbacks for 'start' and then invokes them with the arguments (1, 100)
