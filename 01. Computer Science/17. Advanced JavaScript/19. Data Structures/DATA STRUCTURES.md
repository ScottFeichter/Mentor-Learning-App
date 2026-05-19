# DATA STRUCTURES

**Arrays**

*An array is a sequence of elements of the same type stored in a contiguous block of memory.*

JS arrays are different from this definition under the hood but we can treat them in this way.

Arrays are very efficient. Array indexing is an O(1) operation. 

When you access an array value at an index, the code runs this equation:

valueAddress \= startAddress \+ index \* sizeof(dataType)

**Time Complexity of Common Array Methods**

retrieval: O(1)  
.push() : O(1) \*unless resizing needed then O(n)  
.shift() : O(n)  
.unshift() : O(n)  
.pop() : O(1)  
.splice() : 

- At the end is same as push()  
- At the beginning is same as unshift()  
- In the middle is O(n)  
  




**Dynamic Arrays**

Array resizing in languages such as JS and Python incur costs but they are often negligible. 

Copying values from old memory to new memory when resizing is an O(n) operation. 

This process is mostly abstracted in JS. But we can do it manually. 

Using the new Array constructor we can *overallocate* memory when creating an array. 

**Stacks**

An ADT that store a collection of data with one simple rule: LIFO

Unlike other data structures, ADTs have no specific implementation requirements

The only thing that matters is the order of input and output

For using an array to implement a stack we would only have the operations push and pop

Examples of stacks are the back button on a browser or the call stack

**Linked Lists**

* Take up more space than arrays and are slower in almost every way  
* They are not common in everyday coding  
* Ordered sequence of nodes  
* They can be out of order in memory but the pointers give them order  
  * Therefore they are not required to be in contiguous blocks of memory  
  * However they take up more memory than an array  
  * And to visit any node you need to come from the previous node  
    * To visit the nth node in a linked list, you must traverse through all prior nodes.   
    * This is an O(n) operation.  
        
* Each node consists of a data value and a pointer to the next node  
* The linked list itself is just a pointer to the first node  
* The list continues until it reaches a null node pointer.   
    
* If the head pointer is itself null the linked list is empty.   
  * first node is called the **head node**  
* Pointers  
  * pointers are hidden in JavaScript  
  * allow for storage of complex, multi-dimensional data in a linear memory bank  
- multi-type arrays  
- pass-by-reference methods  
- graph traversal  
- many more

Please explain how pointers are hidden in JS with comparison to C

Questions

1. What is the space complexity of a linked list? O(n)  
2. How would you add a value to the end of a linked list?   
3. What is the time complexity of that operation? O(n)  
4. Can you refactor LinkedList.print() to a recursive solution?   
5. How would that affect the time and space complexity?

**Linked List Optimization**

space complexity \= O(n)  
time complexity

- addToHead() \= O(1)  
- anything requiring traversal \= O(n)  
  - addToTail() \= O(n)  
  - you can increase the optimization of addToTail() by adding a tail pointer  
    - trades space for time  
    - addToTail() would have time complexity of O(1)  
    - all this is fine if you only have to remove from the front  
      - but if the last node must be removed making the tail move backwards one can be tricky because you cannot traverse backwards

**Doubly Linked List**

Using a previous pointer makes the list run in both directions?

A doubly linked list in which each node contains a pointer to the previous node as well as the next node. 

There will be a null at both ends. 

This improves the efficiency of removeFromTail but at the cost of space increase O(n) from O(1).

There is also a cost of increased code complexity. All other methods must be updated to accommodate it. 

Is the cost worth it? It depends on the circumstances. 

**Queues**

Queue is an ADT that returns values in the same order they are added, FIFO.

- This differs from a stack in that a stack is LIFO.   
- ADT: Abstract Data Type  
- Enqueue: getting in back of line   
- Dequeue: exiting front of line  
- Implementing a queue with a linked list optimizes to O(1) for addToTail and removeFromHead but there will be tradeoffs

class Stack {  
 constructor() {  
   this.store \= new Array();  
 }  
 size() {  
   //return the length of the stack  
   return this.store.length;  
 }

 push(ele) {  
   //this will add element to end of stack  
   this.store.push(ele);  
   return true;  
 }

 pop() {  
   //remove the last element  
   return this.store.pop();  
 }

 peek() {  
   //return the last element  
   return this.store\[this.store.length \- 1\];  
 }  
}

class Queue {  
 constructor() {  
   this.store \= new Array();  
 }

   enqueue(ele) {  
       //adds ele to end of queue  
       this.store.push(ele)  
       return true;  
 }

   dequeue() {  
       //remove the first element  
       return this.store.shift();  
 }

   size() {  
       return this.store.length;  
 }

   peek() {  
       //return the first element  
     return this.store\[0\]  
 }  
}

##    **Thursday**

**Hash Functions**

- takes input  
- runs it through a set of deterministic steps  
- returns a scrambled output  
- *given the same input, it will ALWAYS return the same output*

**deterministic** \- no matter the input the hashing process will always go through the exact same steps resulting in the exact same output

hashing differs from encryption in that hashing only works in one direction

there is no way to decrypt a hash output to find the input

because many different inputs can have the same output

so if you only have the output you could only find possible inputs and there would be infinite(?)

**SHA256 hashing**

* secure hashing algorithm  
* 256 bit return  
  * returns an output of 256 bits regardless of input bits  
* very fast  
* very cryptographically secure  
* the possibilities are roughly equal to the number of atoms in the universe  
  * you won’t be able to brute force a SHA256 decryption  
* open source

Unlike the simpleHash() function, sha256() returns a completely different output for similar inputs. 

This is a trait of secure hash functions: The outputs should be evenly distributed across the entire range of possibilities even with similar inputs.

**Hash Tables**

* aka hash maps  
* perhaps the most important data structure  
* key: value storage  
* constant Big O time complexity for insertion, deletion, access, and search  
* an array with elements indexed by a hashed key  
* key hash is run through a modulo function to convert it to an array index

STEPS TO CREATE 

1. initialize fixed size array with each element set to null  
   1. elements are referred to as buckets  
2. create a hash function that converts keys (must be strings) to integers  
   1. the hash function  
3. create a function that converts the key hash into a valid array index (integer)  
   1. the hashMod function \- can use modulo for this  
      

STEPS TO INSERT

1. hash and modulo the key to find correct bucket index  
2. create key: value pair  
3. store the key: value pair in the correct bucket index of the fixed size array  
   2. fixedSizeArray\[index\] \= {key: value}

   

STEPS TO RETRIEVE

1. run hashMod(key) to get the index  
2. find the bucket at the index

HASH COLLISIONS

two keys hash to the same bucket

PERFORMANCE

Time Complexity

* maintain much of the performance of underlying array  
* hashing is technically O(n) but if key less than 1000 length it is O(1)  
* hashMod is O(1)

Searching for keys in a hash table is faster than searching through an array. 

Space Complexity

* There is a lot of wasted space in a hash table compared to an array  
* Most often the wasted space is O(1) but proportional to the amount of values stored  
* Therefore the space complexity is essentially the same as an array: O(n)

**Hash Table Collisions**

You can reduce the probability of hash collisions by increasing the underlying array size (probability of a collision is 1 / buckets.length) but you can never completely avoid them.  
No elegant solutions to this problem but a clever one is to use a linked list in a bucket having a collision.

This requires adding a next pointer to each key: value pair. 

Since this requires list traversal it is O(n) but the n in the linked list does not refer to the number of values in the hash table but rather the number of collisions in a given bucket. 

The probability of a hash collision for an evenly distributed hash function is 1 / buckets.length. 

With an appropriately sized array, the number of collisions will remain fairly low in proportion to the number of items stored in the hash table.

Using the equation for collision probability we can increase the number of buckets to minimize risk in a process similar to the dynamic array resizing algorithm. 

**Load Factor** \- the number of key:value pairs divided by the number of buckets

Use the load factor to trigger a resize. Different languages resize at different load factors but generally 0.7.

Although this means that a hash table will always waste between 35-70% of allocated memory, it still has a space complexity of O(n).

There are many other methods of resolving hash collisions including **double-hashing** and **open addressing**. 

**Hash Table Optimization**

Hash tables can be highly performant, but hash collisions can slow them down. 

The best-case scenario time complexity for different operations in a hash table:

Reading/Getting is constant  
Inserting/Setting is constant  
Deleting/Removing is constant

**Sets**

A set is an abstract data type that stores a collection of \_unique\_, unordered values.  
The unique part is important as a set can have no duplicate values.

Being unordered is also important. Items are inserted into the set based on the hash valued index.

A big benefit of using a set is that it has a lookup time, using the set.has() method, of O(1)\!

\*\* Sets are implemented using hash tables to achieve that O(1) search time complexity. 

Sets have an O(n) space complexity, despite the fact that they dynamically resize when the underlying array hits .7 load capacity. 

The use of sets is very niche, but are capable of massive performance gains when used appropriately.

Javascript has a built in Set class:

const mySet \= new Set();

It has it’s own methods that differ from Array:

Set.prototype.has(value)  
Set.prototype.add(value)  
Set.prototype.delete(value)

...and many more...

**Caching**

**caching** is a way to increase code performance

* given a frequently used calculation that is slow  
* calculate it once and store the result  
* then when needed again look up the result instead of recalculating  
* trades space for time  
* CPU use caches  
* browsers use caches

**pure function** is a function whose output depends only on its input and causes no side effects

* aka stateless functions  
* useful because they are predictable  
* outputs easily cached

**memo caching**

**tabulation**

**dynamic programming**

## **Friday**

**Opcode** \- the code for what operation to perform  
**Addressing mode** \-   
**Operand** \- the code for the (memory address?) for the value of the operand

**CPU Fetch Execute Cycle**

The **bus** is essentially the wires that connect the RAM to the CPU  
There are buses for all the components on the board but we are looking at this connection

**CPU Fetch**  
**Address bus** sends the address from RAM to the CPU 

- width of bus will determine address size  
- and therefore the total amount of possible addresses

**Data bus** sends the value of the address to the CPU

- wider bus means more possible permutations  
- and therefore higher max value transferable

The **memory address** is the vertical path of a binary tree of bits  
The **cell** is the bit on the horizontal tape on a touring machine

The **word** is the natural, fixed-sized unit of data used by a particular processor design  
The **word size** is the amount of data the CPU’s internal data registers can hold and process at one time; the number of bits in a word.

The **register** is a quickly accessible location available to a computer’s processor  
In the case of a CPU this is **cache** memory…(?) 

Is the call stack using memory found in the cache?

If an integer is 32 bits  
An integer is 4 bytes

Storing 4 integers would require 16 bytes of memory  
An array of integers length 4 would require 16 bytes of contiguous memory

A **contiguous block** of memory is a sequence of adjacent cells  
In JS, Python, Ruby, arrays are not really true arrays but can be thought of such

Arrays are an optimally space-efficient way to store date  
Arrays are also the fastest method of access via indexing

The **indexing equation**: *valueAddress \= startAddress \+ index \* sizeof(dataType)*

Indices are found by the offset, requiring a contiguous block of memory, same data type.  
Since the indices are numerical the array must be stored in an ordinal sequence. 

**Static Arrays** are of a fixed size  
**Dynamic Arrays** what is this exactly? Auto resizing?

**Resizing** arrays occurs when each value must be copied from the old memory to a new contiguous allocation one at a time which will be O(n)

**Overallocating** memory when creating arrays allows some growth to occur without resizing operations and therefore pushing at O(1)

Overallocating only helps when adding to the back of an array \- pushing   
If you need to add to the front you must shift all of the array values right

A **pointer** is a variable that stores the memory address of another variable as its value.   
If a variable is declared as a **reference** it becomes an alternate name for an existing variable. 

How in memory is the identifier stored?

The linked list is an ordered sequence of **nodes**  
Each node has a data value and a pointer to the **next** node

The linked list does NOT occupy a contiguous block of memory  
The **data value** and **pointer** are all that is required to connect the list

The linked list itself is just a pointer to the first node which is called the **head** node  
The list continues until it reaches a **null** node pointer at the **tail** node

Linked List addToHead() Time Complexity is O(1):

- Create new node O(1)  
- Setting the next pointer O(1)  
- Setting the head pointer O(1)

**Traverse** means to visit each node in order which is O(n)  
**Search** requires traversal until you find the value which can range from O(1) to O(n)

A **Singly Linked List** addToTail() is O(n)  
This can be improved to O(1) if we add a **tail pointer**

A Singly Linked List removeFromHead() is O(1)  
A Singly Linked List removeFromTail() is O(n)

A Double Linked List adds a **previous** pointer in the opposite direction  
A Double Linked List removeFromTail() is O(1)  
**Queues** are an ADT that is FIFO/LILO  
The two important functions of a queue are enqueue() and dequeue()

If implementing a queue with an array this would be push() and shift()  
This would be O(1) and O(n) respectively

If implementing a queue with a linked list this would be addToTail() and removeFromHead()  
This would be O(1) and O(1) respectively 

There is a cost of space and code complexity if implementing as LL  
If the values and sizes are not large perhaps it is not worth the trade offs

**Hash Functions, Hashing, Hash Tables, Hash Collisions…**  
Skipping this for the moment

A **Set** is an ADT that stores a collection of unique, unordered values  
While a set is unordered in general, an implementation in a specific language can be ordered

JS has a built in new Set() which is indexed like an array and ordered according to order added  
Be aware that other languages may order a set by sorted or unordered

Sets implemented using hash tables allow for O(1) retrieval  
The use of sets depends on situation but can result in large performance gains

**Time Complexity of Common Set Methods**

retrieval : O(1)  
.has() : O(1)  
.push() : O(1) \*unless resizing needed then O(n)  
.shift() : O(n)  
.unshift() : O(n)  
.pop() : O(1)  
.splice() : 

- At the end is same as push()  
- At the beginning is same as unshift()  
- In the middle is O(n)

**Time Complexity of Common Array Methods**

retrieval : O(1)  
.includes() : O(n)  
.push() : O(1) \*unless resizing needed then O(n)  
.shift() : O(n)  
.unshift() : O(n)  
.pop() : O(1)  
.splice() : 

- At the end is same as push()  
- At the beginning is same as unshift()  
- In the middle is O(n)

**Caching** skipping this for now

