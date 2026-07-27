// JS does NOT have a built in stack data structure

// But you can use an array as a stack

class Stack {

 constructor() {
   this.store = new Array();
 }

 push(ele) {
   //this will add element to end of stack
   this.store.push(ele);
   return true;
 }

 pop() {
   //remove the top element
   return this.store.pop();
 }

 // ============= below not manatory but helpful

 size() {
   //return the length of the stack
   return this.store.length;
 }

 peek() {
   //return the top element
   return this.store[this.store.length - 1];
 }

 isEmpty() {
   //return true if stack is empty
   return this.store.length == 0;
 }
}
