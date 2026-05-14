#  **TIME AND SPACE COMPLEXITY**

**Run Time Complexity**  
Which is better? Depends on what better means:

* Faster?

* Readability?  
* Less memory?  
* Scale?

Let's measure them. Rather than using timer (which may or may not be a good indicator) we will count the number of simple operations.

Big O – Upper Bound (Worst Case)

Big Ω \-

Big ϴ \-

**Big O Notation**

But how to count can be tricky. Regardless of the exact number, we can use Big O to talk about how the runtime of the algorithm grows as inputs grow. We won't care about the details, only the trends.

WHEN WE REFERENCE LOG IN THIS NOTATION IT IS ALWAYS LOG2.

N IS ALWAYS EXPRESSED AS 1\.

O(1) \- Constant Run Time:

The number of operations remain constant regardless of the change of input size N.

This line is flat because it never changes.

O(log n) \- Logarithmic Run Time:

This line is not as flat as O1 but still great.

O(n) \- Linear Run Time:

The number of operations grows in proportion of the change of input size N.

O(n log n) \- Linear-logarithmic Run Time:

O(n^2) \- Quadratic Run Time:

Often an O(n) operation inside of an O(n) operation.

O(2^n) \- Exponential Run Time:

O(n\!) \- Factorial Run Time:

The **logarithm** of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one. This is the inverse of exponentiation.

This is in the case of log2 which we use 2 in computers because computers use binary...?

When determining algorithm time complexity:

Constants **do not** matter

Smaller terms **do not** matter

Always make sure you can answer: **what is** n? (String? Array? Etc...)

Helpful Hints:

Arithmetic Operations are Constant Time

Variable Assignments are Constant Time

Accessing elements in array (by index) or object (by key) are Constant Time

Loops: length of the loop times complexity of whatever happens in the loop

The best sort is O(n log n)

**Run Space Complexity**  
How will memory usage scale as size of inputs increase?

Can also use Big O

Space only uses O(1) or O(n)

Guidelines:

Most primitives will be O(1) constant space except Strings

Strings: O(n) linear space (where n is string length)

Reference types: generally O(n) linear space, where n is the length of the array (or keys in object)

