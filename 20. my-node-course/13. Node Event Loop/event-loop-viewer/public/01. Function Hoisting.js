
// FUNCTION CALLS GET CALLED IN ORDER FROM TOP TO BOTTOM IN THE CODE BASE.
// YOU CAN CALL THESE FUNCTIONS ABOVE THEIR DEFINITIONS BECAUSE OF HOISTING.

first();
second();
third();
fourth();
fifth();


// FUNCTION DEFINITIONS THAT ARE DECLARED GET READ BEFORE EVERYTHING ELSE (FROM TOP TO BOTTOM) AND HOISTED:

function fifth() {
  console.log("5. Last");
}

function fourth() {
  console.log("4. In");
  fifth();
}

function third() {
  console.log("3. Last");
  fourth();
}

function second() {
  console.log("2. Out");
  third();
}

function first() {
  console.log("1. Order");
  second();
}


// THERE ARE OTHER WAYS TO DEFINE FUNCTIONS AND FUNCTIONS DEFINED IN THOSE WAYS ARE EITHER PARTIALLY OR NOT AT ALL HOISTED
