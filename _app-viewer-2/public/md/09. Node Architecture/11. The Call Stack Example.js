// Here we define 3 functions:

function funcA() {
  console.log("Starting funcA");
  funcB();
  console.log("Finishing funcA");
}

function funcB() {
  console.log("Starting funcB");
  funcC();
  console.log("Finishing funcB");
}

function funcC() {
  console.log("Executing funcC");
}

// Then we call funcA:

funcA();

// ASSIGNMENT
// Write below what you think the order of the console.log's will be:
