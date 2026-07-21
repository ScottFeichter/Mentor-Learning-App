// FUNCTION DEFINITION
function sayGoodbye() {
  console.log("Goodbye");
  return "this is our return";
}

// FUNCTION INVOCATION/CALL
// sayGoodbye(); //invoking

// console.log(sayGoodbye()); // invoking the function - this is NOT a callback

// console.log(sayGoodbye); // passing a reference to the definition


function sayAdios() {
  console.log("Adios");
}


function greet() {
  sayGoodbye();
}


function betterGreet(name, callback){
  console.log("Hello ", name);
  callback(); // invocation
}


// betterGreet("Fred", sayGoodbye);
// betterGreet("Fred", sayAdios);
// betterGreet("Fred", function sayOravwa() {console.log("Oravwa")});
betterGreet("Fred", sayGoodbye()); // invocation





function num() {
  return 2
}

function add(num1, num2) {
  return num1 + num2;
}

// console.log(num);
// console.log(num());


// add(2, 2); // 4
// console.log(add(2, num())); // 4
// console.log(add(2, num));
