
// Event Loop = call stack + the jobs queue
// Event Loop is something that happens in the JS engine when it is runing JS

// call stack is stack of pancakes (functions)

// FUNCTION DEFINITION
function mySecond(word) {
   console.log(word)
}


// console.log("first");

// console.log("second");

// mySecond("hello"); // FUNCTION CALL AKA INVOCATION

// // this is async built in
// setTimeout(function myThird() {
//     console.log("I waited 1 second!");
// },1000);

// console.log("third");

console.log(process.env)
