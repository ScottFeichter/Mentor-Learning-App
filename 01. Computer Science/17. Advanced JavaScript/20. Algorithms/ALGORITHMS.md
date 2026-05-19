# **ALGORITHMS**  

[Binary Search	4](#binary-search)

[Linear Search	5](#linear-search)

[Bubble Sort	6](#bubble-sort)

[Insertion Sort Out Of Place	7](#insertion-sort-out-of-place)

[Insertion Sort In Place	8](#insertion-sort-in-place)

[Selection Sort	9](#selection-sort)

[Quick Sort	10](#quick-sort)

[Merge Helper	11](#merge-helper)

[Merge Sort	12](#merge-sort)

[Binary Tree BFT Iterative	13](#binary-tree-bft-iterative)

[Binary Tree DFT Iterative	14](#binary-tree-dft-iterative)

[Binary Tree DFT Recursive	14](#binary-tree-dft-recursive)

[BFT Graph	16](#bft-graph)

[DFT Graph	17](#dft-graph)

[Find Neighbors	18](#find-neighbors)

[BFS PATH	19](#bfs-path)

[D\&A INFO TO SORT THROUGH PUN	20](#d&a-info-to-sort-through-pun)

[DATA CONTAINERS	32](#data-containers)

## 

## 

## 

##   Binary Search {#binary-search}

Time: O(logn)  
Space: O(logn)

// MUST BE SORTED FIRST\!\!\!\!\!\!\!\!\!  
function binarySearch(arr, target) {  
 let start \= 0;  
 let end \= arr.length \- 1;

 while (start \<= end) {  
   let mid \= Math.floor((end \+ start) / 2);

   if (target \=== arr\[mid\]) {  
     return mid; // returns index  
   } else if (target \> arr\[mid\]) {  
     start \= mid \+ 1;  
   } else {  
     end \= mid \- 1;  
   }  
 }

 return \-1; // not found  
}

## Linear Search {#linear-search}

Time: O(n)  
Space: O(n)

function linearSearch(arr, target) {  
 for (let i \= 0; i \< arr.length; i\++) {  
   if (arr\[i\] \=== target) {  
     return i;  
   }  
 }  
}

## Bubble Sort {#bubble-sort}

Time: O(n^2)  
Space: O(1)

function bubbleSort(arr) {  
 let swapFlag \= true;

 while (swapFlag) {  
   swapFlag \= false;  
   for (let i \= 0; i \< arr.length; i\++) {  
     if (arr\[i\] \> arr\[i \+ 1\]) {  
       \[arr\[i\], arr\[i \+ 1\]\] \= \[arr\[i \+ 1\], arr\[i\]\];  
       swapFlag \= true;  
     }  
   }  
 }

 return arr;  
}

## Insertion Sort Out Of Place {#insertion-sort-out-of-place}

Time: O(n^2)  
Space: O(1)

// Insertion Sort out-of-place    
// Do not modify the original array  
function insertionSortOutOfPlace(arr) {  
 let arrCopy \= \[...arr\];  
 let sorted \= \[\];  
 while (arrCopy.length \> 0) {  
   let val \= arrCopy.pop();  
   sorted.push(null);  
   let i \= sorted.length \- 1;  
   while (i \> 0) {  
     if (sorted\[i \- 1\] \< val) {  
       break;  
     } else {  
       sorted\[i\] \= sorted\[i \- 1\];  
       i\--;  
     }  
   }  
   sorted\[i\] \= val;  
 }  
 return sorted;  
}

## Insertion Sort In Place {#insertion-sort-in-place}

Time: O(n^2)  
Space: O(1)

// In-place Insertion Sort   
// Mutates the original array  
function insertionSortInPlace(arr) {  
 let divider \= 1;  
 while (divider \< arr.length) {  
   let val \= arr\[divider\];  
   let i \= divider;  
   while (i \> 0) {  
     if (arr\[i \- 1\] \< val) {  
       break;  
     } else {  
       arr\[i\] \= arr\[i \- 1\];  
       i\--;  
     }  
   }  
   arr\[i\] \= val;  
   divider\++;  
 }  
 return arr;  
}

## Selection Sort  {#selection-sort}

Time: O(n^2)  
Space: O(1)

function selectionSort(arr) {  
 for (let i \= 0; i \< arr.length; i\++) {  
   let minIndex \= i;  
   for (let j \= i \+ 1; j \< arr.length; j\++) {  
     if (arr\[minIndex\] \> arr\[j\]) {  
       minIndex \= j;  
     }  
   }  
   \[arr\[i\], arr\[minIndex\]\] \= \[arr\[minIndex\], arr\[i\]\];  
 }  
 return arr;  
}

## Quick Sort  {#quick-sort}

Time: O(n^2) for worst but has an average of O(n log n)  
Space: O(n) or O(log(n)) 

function quicksort(arr) {  
 if(arr.length \<= 1) return arr;

 const pivot \= arr\[0\];  
 const smaller \= \[\];  
 const bigger \= \[\];

 for(let i \= 1; i \< arr.length; i\++) {  
   if(arr\[i\] \< pivot) {  
     smaller.push(arr\[i\]);  
   } else {  
     bigger.push(arr\[i\]);  
   };  
 };

 return \[...quicksort(smaller), pivot, ...quicksort(bigger)\];

}

console.log(quicksort(arr));

## Merge Helper {#merge-helper}

function merge(array1, array2) {  
 let merged \= \[\];

 while (array1.length || array2.length) {  
   let ele1 \= array1.length ? array1\[0\] : Infinity;  
   let ele2 \= array2.length ? array2\[0\] : Infinity;

   let next;

   if (ele1 \< ele2) {  
     next \= array1.shift();  
   } else {  
     next \= array2.shift();  
   }  
   merged.push(next);  
 }

 return merged;  
}

## 

## 

## Merge Sort  {#merge-sort}

Time: O(n log n)  
Space: O(n) 

function mergeSort(array) {  
 if (array.length \<= 1) {  
   return array;   
 }

 let midIdx \= Math.floor(array.length / 2);   
 let leftHalf \= array.slice(0, midIdx);   
 let rightHalf \= array.slice(midIdx);

 let sortedLeft \= mergeSort(leftHalf);   
 let sortedRight \= mergeSort(rightHalf);

 return merge(sortedLeft, sortedRight);   
}

## 

## 

## Binary Tree BFT Iterative {#binary-tree-bft-iterative}

function breadthFirstTraversal\_Iterative\_ArrayAsQueue(node) {  
 const queue \= \[\];  
 queue.push(node);

 while (queue.length) {  
   // Dequeue a node and print it  
   let currentNode \= queue.shift();

   // Do something  
   console.log(currentNode.val);

   // Put all of the currentNode's children in the back of the queue  
   if(currentNode.left) queue.push(currentNode.left);  
   if(currentNode.right) queue.push(currentNode.right);  
 }  
}

## 

# 

# 

## Binary Tree DFT Iterative {#binary-tree-dft-iterative}

function DFT\_iPre(node) {  
 const s \= \[node\];   
 while(s.length) {  
   const curr \= s.pop();

   console.log(curr.val);

     // NOTICE THIS ORDER IS OPPOSITE OF RECURSIVE  
   if(currentNode.right) s.push(currentNode.right);  
   if(currentNode.left) s.push(currentNode.left);  
 }  
}

## Binary Tree DFT Recursive {#binary-tree-dft-recursive}

function DFT\_rPre(node) {  
 if (node \=== null) return;

 console.log(node.val);

// NOTICE THIS ORDER IS OPPOSITE OF INTERATIVE  
 if (node.left) DFT\_rPre(node.left);  
 if (node.right) DFT\_rPre(node.right);  
}

## ![][image1]

Depth-first traversal (dotted path) of a binary tree:   
*Pre-order (node visited at position red ●)*:     F, B, A, D, C, E, G, I, H;   
*In-order (node visited at position green ●)*:     A, B, C, D, E, F, G, H, I;   
*Post-order (node visited at position blue ●)*:     A, C, E, D, B, H, I, G, F.

## BFT Graph {#bft-graph}

const adjList \= {  
 1: \[2, 5\],  
 2: \[1, 3, 5\],  
 3: \[2, 4\],  
 4: \[3, 5, 6\],  
 5: \[1, 2, 4\],  
 6: \[4\],  
};

function printBreadthFirst(start) {  
 const queue \= \[start\];  
 const visited \= new Set();

 while (queue.length) {  
   let currentNode \= queue.shift();  
   if (\!visited.has(currentNode)) {  
     console.log(currentNode);  
     visited.add(currentNode);  
   }

   let neighbors \= adjList\[currentNode\];  
   for (let neighbor of neighbors) {  
     if (\!visited.has(neighbor)) {  
       queue.push(neighbor);  
     }  
   }  
 }  
}

## DFT Graph {#dft-graph}

const adjList \= {  
 1: \[2, 5\],  
 2: \[1, 3, 5\],  
 3: \[2, 4\],  
 4: \[3, 5, 6\],  
 5: \[1, 2, 4\],  
 6: \[4\],  
};

function printDepthFirst(start) {  
 const stack \= \[start\];  
 const visited \= new Set();

 while (stack.length) {  
   let currentNode \= stack.pop();

   if (\!visited.has(currentNode)) {

     console.log(currentNode);

     visited.add(currentNode);  
   }

   let neighbors \= adjList\[currentNode\];

   for (let neighbor of neighbors) {  
     if (\!visited.has(neighbor)) {  
       stack.push(neighbor);  
     }  
   }  
 }  
}

## Find Neighbors {#find-neighbors}

function findNeighbors(node, matrix) {  
   const neighbors \= \[\];  
   const \[row, col\] \= node;  
   // Up  
   if(row \- 1 \>= 0) res.push(\[row \- 1, col\]);  
   // Down  
   if(row \+ 1 \< matrix.length) res.push(\[row \+ 1, col\]);  
   // Left  
   if(col \- 1 \>= 0) res.push(\[row, col \- 1\]);  
   // Right  
   if(col \+ 1 \< matrix\[row\].length) res.push(\[row, col \+ 1\]);

   return neighbors;  
}

## BFS PATH {#bfs-path}

function bfsPath(matrix, startNode, endValue) {  
   const q \= \[startNode\];  
   const v \= new Set().add(\`${startNode\[0\]},${startNode\[1\]}\`);  
   const res \= \[\];

   while(q.length){  
       //1. get currNode  
       const currNode \= q.shift();

       //2. do some things  
       res.push(currNode);  
        
       if(matrix\[currNode\[0\]\]\[currNode\[1\]\] \=== endValue){  
           return res;  
       }  
        
       //3. find neighbors  
       const neighbors \= findNeighbors(currNode, matrix);  
       neighbors.forEach(el \=\> {  
           const strEl \= \`${el\[0\]},${el\[1\]}\`;

           if(\!v.has(strEl)){  
               v.add(strEl);  
               q.push(el);  
           }  
       })  
   }

   return false;  
}

# D\&A INFO TO SORT THROUGH PUN {#d&a-info-to-sort-through-pun}

**SORTING**  
There are many clever algorithms, each with strengths and weaknesses. 

**Swapping**

- use temp variable

| let tmp \= arr\[1\];arr\[1\] \= arr\[2\];arr\[2\] \= tmp; |
| :---- |

- use destructuring 

| \[arr\[4\], arr\[6\]\] \= \[arr6\], arr\[4\]\] |
| :---- |

**Shifting**

- When shifting to right you must shift BACK TO FRONT

| for (let i \= arr2.length \- 1 ; i \> 0 ; i--) {    arr2\[i\] \= arr2\[i\-1\];} |
| :---- |

**Bubble Sort**

- flagSwap \= true  
- While (flagSwap)  
  - for (let i \= 0  
    - Compare adjacent pair  
    - Swap if needed  
      - Swap \= true  
    - Continue to next pair  
- If no swap occurs exit else run again

**Insertion Sort**

- Split the array into sorted and unsorted  
- Pick and remove a value from the unsorted  
- Insert it into the correct place in the sorted  
- Repeat this until unsorted is empty and sorted is full

- Out of Place  
  - Start by creating an empty array  
- In Place

**Selection Sort**

- Split the array into sorted and unsorted  
- Find and remove the smallest (or largest) value from the unsorted  
- Add this value to the end (beginning) of the sorted array  
- Repeat this until unsorted is empty and sorted is full

- Out of Place  
- In Place


**Recursive Sorting**

- Base case will be if arr.length \<= 1 since any array of length 1 is sorted  
- The step is removing the largest (or smallest) thus reduces arr.length  
- Recursive call  
- Use splice and push to do in place  
- Can use Math.min or Math.max then indexOf  
- Time will be about O(n^2)


**Divide and Conquer to improve Time Complexity**

- Improves time complexity of recursiveSort() by reducing depth of calls  
- Instead of reducing array by one each call, split it in half  
  - Check base case, return if length \<= 1  
  - Split array in half to get log n recursive steps to reach base  
  - Recursive sort each half  
  - Put left half and right half together and return  
- Quicksort and Mergesort are examples of this  
- Time becomes:   
  - O(n log n) (out of place?)  
  - O(log n) (in place?)  
    

**Merge Sort**

- Out of Place Recursive  
  - Sorts values using divide and conquer  
    - 1\. Split unsorted in half  
    - 2\. Sort halves  
    - 3\. Merge sorted halves  
  - Merge(sortedArr1, sortedArr2) { return singleSortedArr }; // just the gist  
  - Initially time of O(n^2) but…  
  - Can use a pointer to improve Time  
  - Performs merge without mutating and improves to O(n)  
  - Space complexity can vary by implementation

**Quicksort**

- Uses divide and conquer  
  - 1\. Pick a value to be pivot  
  - 2\. Partition array with smaller values on left of pivot  
  - 3\. Sort each partition  
  - 4\. Return an array with left, pivot, and right values  
- As with merge sort, it calls itself recursively on subarrays that get smaller with each call  
- Arrays of length \<= 1 are always already sorted so this is the base case  
- Depending on how the pivot is set the Time Complexity can be O(log n) to O(n^2)  
- Space complexity ranges from O(1) to O(n log n)


**Funky Sorting**

- May be asked to sort for many different things, all zeros to the left for example.   
- Think about what you know:  
  - Out of place vs In place  
  - Divide and conquer  
  - Space and Time Complexity  
  - Shift, unshift, push, pop, splice  
    

**Built-in Sorts**

- Each browser runs their own version of JS with their own sorting implementation  
  - Chrome V8 uses mergesort   
  - JS Array.sort() method  
  - Sorts numbers in *alphabetical,* not numerical order.  
  - It is looking at the numbers as strings.  
  - You can define a custom sorting predicate  
    - Pass a helper to .sort(compareNumbers)  
    - Can also do funky sorts of all kinds

**BINARY SEARCH**

**Logarithms**

- O(log n)  
- Understand exponent (raised to the power of n)  
  - Multiplying itself by itself n amount of times  
  - 2^5 \= 32  
- Logarithm is the inverse of exponent (base n)  
  - Dividing itself by itself n amount of times to reach 1  
  - log2(32) \= 5  
      
- THE BINARY LOGARITHM  
  - This is the base-2 logarithm  
  - It is good to memorize powers of 2 up to 1024:  
      
    - log2(1) \= 0  
    - log2(2) \= 1  
    - log2(4) \= 2  
    - log2(8) \= 3  
    - log2(16) \= 4  
    - log2(32) \= 5  
    - log2(64) \= 6  
    - log2(128) \= 7  
    - log2(256) \= 8  
    - log2(512) \= 9  
    - log2(1024) \= 10  
        
  - The inverse in exponents:  
      
    - 2 \*\* 0 \= 1   
    - 2 \*\* 1 \= 2  
    - 2 \*\* 2 \= 4   
    - 2 \*\* 3 \= 8   
    - 2 \*\* 4 \= 16   
    - 2 \*\* 5 \= 32  
    - 2 \*\* 6 \= 64  
    - 2 \*\* 7 \= 128  
    - 2 \*\* 8 \= 256  
    - 2 \*\* 9 \= 512  
    - 2 \*\* 10 \= 1024  
        
  - JS has the handy Math.log2 function  
    - Math.log2(1024) \= 10  
        
- Logarithms are important because log2n is very efficient  
- Growth is so slow they are almost constant


  
**Binary Search**

- Linear visits each value one at a time for O(n)  
- Binary uses divide and conquer for O(log n)  
    
- MUST HAVE THE FOLLOWING PRE CONDITIONS:  
  - Data must be sorted  
  - Data can be accessed by index in constant time  
    1. Cannot binary a linked list or a hash table  
         
- To implement in code:  
  - Target : what we are searching for  
  - Low Index : 0  
  - High Index : array.length \- 1  
  - Mid Index : (Low Index \+ High Index) / 2 (round down if needed)  
  - Check value at mid  
    1. If mid \=== target return mid  
    2. Else adjust boundaries on right or left half depending on if mid \< target  
  - Repeat   
    1. Until either you find the value   
    2. Or the Lo and Hi markers meet then return \-1

**BINARY TREES**

**Intro To Trees**

- Like a singly-linked list   
  - Instead of each node having a single next (child) node  
  - It may have more than one child (next) node  
- **Graph**   
  - A tree is a type of graph  
  - A graph is a collection of nodes and any edges between those nodes  
  - A graph is a very broad overarching category; they vary greatly in structure  
- A tree is a graph that does not contain any cycles  
    
- **Cycle**  
  - A path through edges that begins and ends at the same node  
      
- Often graphs displayed visually have the root at top (inverted tree)  
    
  - Blue circle may be the root  
      
      
- **Binary Tree**  
  - A tree where nodes have at most 2 children  
  - You are unlikely to encounter more than binary tree types in job search  
- Interesting:  
  - An empty graph of 0 nodes and 0 edges is a binary tree  
  - A graph of 1 node and 0 edges is a binary tree  
  - A linked list is a binary tree(?)  
- Representing a Binary Tree with Node Instances  
  - Used OOP design  
    - TreeNode class  
      - Value  
      - Left (child)  
      - Right (child)  
- Tree Terminology  
  - **Tree**: A graph with no cycles  
  - **Binary Tree**: A tree where nodes have at most 2 child   
  - **Binary Search Tree**: A binary tree sorted with lower value always left child  
  - **Root:** The top node in a tree, the ultimate parent, the single node of a tree that can access every other node through edges; by definition the root will not have a parent  
  - **Internal Node**: A node that has children  
  - **Leaf**: A node that does not have any children  
  - **Path**: A series of nodes that can be traveled through edges \- for example A, B, E is a path through the above tree  
  - **Node:** A tree component that contains one value and pointers to other nodes  
  - **Edge:** Another name for a pointer  
  - **Parent/child node:** A parent node points to child nodes  
  - **Neighbor:** Either a parent or child node  
  - **Subtree:** A tree whose root is the child of another node in the tree  
  - **Branch node:** A node with at least one child node  
  - **Level:** The number of edges between a given node and the root node  
  - **Width:** The number of nodes in a given level  
  - **Height:** The number of edges between the root node and the bottom-most node  
      
      
      
    

**Tree Traversal**

-  To perform operations in a tree you must traverse the tree  
  - Visit and evaluate every node in the tree  
  - Or search the tree, which is traversal that you stop when finding value  
      
- Recursive Linked List **Search** For Tree  
  - **Base Case:** If tree is null return false  
  - If current node’s value equals target, return true  
  - Else search the left subtree for target  
  - If value isn’t in the left subtree, search the right subtree

| function binaryTreeSearch(root, target) {    // Base case: If the tree is null, return false    if (root \=== null) return false;    // If the current node's value equals the target, return true    if (root.value \=== target) return true;    // Otherwise, search the left subtree for the target    if (binaryTreeSearch(root.left, target)) return true;    // If the value isn't in the left subtree, try the right subtree    return binaryTreeSearch(root.right, target);} |
| :---- |

- **Binary Tree Traversal** (no search for target)

| function binaryTreeSum(root) {    // Check the base case    if (root \=== null) return 0;    // Recursively sum up the left and right trees    const leftSum \= binaryTreeSum(root.left);    const rightSum \= binaryTreeSum(root.right);    // Return the value plus the left and right totals    return root.value \+ leftSum \+ rightSum;} |
| :---- |

- Trees are fantastic for recursion because of their recursively defined structure.

- **Pre-order traversal:** print all values in binary tree before recursive calls  
  - Print the current node value  
  - Recursively call the left subtree  
  - Recursively call the right subtree  
- **In-order traversal:** recursive calls will work if print is between   
  - Recursively call the left subtree  
  - Print the current node value  
  - Recursively call the right subtree  
- **Post-order traversal:** recursive calls will work if print is after   
  - Recursively call the left subtree  
  - Recursively call the right subtree  
  - Print the current node value  
      
- **Depth-first Search**  
  - The path each algorithm takes is the same:  
    - Start from root  
    - Walk down subtree pushing on to call stack  
    - When base case reach go back up popping off call stack  
    - Then down the other subtree  
    - And back up again  
  - Traveling as deep as possible down branches  
  - Reach dead end  
  - Backtrack to the next branch  
  - *A note on naming: although this is a traversal algorithm, not a search algorithm, it is often still called depth-first search. You can certainly use it to search (traverse in depth-first order until you find your target) but be careful not to mix up depth-first traversal and search in your implementations.*

- **Breadth-first traversal**  
  - Searches each node in a particular level  
  - Cannot be implemented recursively  
  - Solve this using a queue  
    - 1\. Put the starting node in a queue  
    - 2\. While the queue is not empty, repeat steps 3-4  
    - 3\. Dequeue a node and print it  
    - 4\. Put all of the node's children in the back of the queue

| function breadthFirstTraversal(root) {    // Put the starting node in a queue    const queue \= new Queue();    queue.enqueue(root);    // While the queue is not empty    while (queue.size \> 0) {        // Dequeue a node and print it        let node \= queue.dequeue();        console.log(node.value);        // Put all of the node's children in the back of the queue        queue.enqueue(node.left);        queue.enqueue(node.right);    }} |
| :---- |

- **Depth-first traversal with a stack**  
  - It turns out, you can perform a depth-first traversal with virtually the same algorithm as breadth-first by switching the queue for a stack.

- Put the starting node on a STACK  
- While the STACK is not empty, repeat steps 3-4  
- POP a node and print it  
- Put all of the node's children on the TOP of the STACK

| function depthFirstTraversal(root) {    // Put the starting node on a stack    const stack \= \[\];    stack.push(root);    // While the stack is not empty    while (stack.length \> 0) {        // Pop a node and print it        let node \= stack.pop();        console.log(node.value);        // Put all of the node's children on the top of the stack        stack.push(node.right);        stack.push(node.left);    }} |
| :---- |

**Binary Search Trees**

- Data must be sorted first  
- Are a node and pointer based data structure  
- Similar to doubly linked list  
- BST for short  
    
- *The key difference that makes it a binary search tree is that every node contained in the left branch of any node will be less than the value of the node itself, and every node in the right branch will be greater than the node value.*  
    
- There are three possible implementations for handling values that are equal to a value in an existing node:  
  - Discard the duplicate, similar to a set  
  - Place equal values to the left  
  - Place equal values to the right  
      
- *All binary search trees are binary trees, but not all binary trees are binary search trees.*

- Binary search trees can be searched by calling the following recursive function on the root node:  
- If the root node is null, return false  
- If the root node's value equals the target, return true.  
- If the target is less than the root value, recursively search the left child  
- If the target is greater than the root value, recursively search the right child

- Time Complexity of searching a binary search tree  
    
- Adding and removing values in BST  
    
- Unbalanced binary search trees

**Binary Search Trees**

- Basically a sorted binary tree  
  - The tree starts at the root  
  - nodes whose values are less than the current node go to the left  
  - nodes whose values are more than the current node go to the left  
  - O (log n) search, insertion and deletion complexity  
  - Each node has three properties: value, left and right  
      
- **Balanced vs Unbalanced**:  
  - A balanced tree means that the left and right subtrees of every node differ in height by NO MORE THAN 1\.  
  - An unbalanced tree is more expensive to traverse, so searching in an unbalanced tree would have an O (n) complexity.

**GRAPHS**

**Intro to Graphs**  
[https://en.wikipedia.org/wiki/Seven\_Bridges\_of\_K%C3%B6nigsberg](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg)

- Node-And-Pointer Structures we learned so far:  
  - Linked List  
  - Doubly Linked List  
  - Binary Tree  
  - Binary Search Tree  
- These are all forms of graphs

- Graphs are an abstract data type that represents a collection of nodes and edges  
- Each node represents one or more values and contains any number of edges  
- Edges point to other nodes  
- Graphs represent relationships between objects  
    
- To solve graph problems you will make use of:  
  - Arrays  
  - Hash Tables  
  - Sets  
  - Stacks  
  - Queues  
  - Recursion  
  - Breadth-First Search  
  - Depth-First Search  
  - And more…  
- FAANG’s are built on graph technology and love to ask graph questions in interviews

- Graphs do not necessarily start from a root node  
- Real world example of graphs:  
  - Street Maps  
  - Social Network  
  - The Internet  
  - Decisions in a board game  
      
- Traversing and searching graphs unlocks powerful features  
- We began using integers to represent graphs   
- In the real world the integers would be unique identifiers for user objects

- Graph properties  
  - Directed: with arrows \- one way street  
  - Undirected: no arrows \- two way street  
  - Bidirected: two arrows \- two way street

- Cyclic: make circles, can lead to loops, must track visited  
- Acyclic: don’t make circles

- Weighted: edges have different weightings  
- Unweighted: every edge has a weight of 1

- Common coding approaches to graphs:  
  - Adjacency List: an object of keyed vertices where each vertex value is an associated set() of connections  
      
- Vertex is synonymous with node

**Breadth-First Traversal**

- Similar to breadth search but must keep track of visited  
- Visits nodes from nearest to furthest  
- Moves level by level  
    
- Algorithm to Memorize:  
  - 1\. Create a queue and enqueue the starting node  
  - 2\. Create a set to store visited nodes  
  - 3\. While the queue is not empty, repeat steps 4-6  
  - 4\. Dequeue the first node  
  - 5\. DO THE THING THAT YOU NEED TO FOR THE DEQUEUED NODE  
  - 6\. For each unvisited neighbor, add it to the visited nodes and to the back of the queue

    	

**Depth-First Traversal**

**Breadth-First Search**

**Finding A Shortest Path**

**Graph Complexity**

**Solving Graph Problems**

**Solving Matrix Graph Problems**

**DataStructures and Algorithms**

* A **data structure** is a format for **storing** and **managing** more than one piece of data   
  * Arrays are data structures  
  * Elements can be removed, added, searched for, etc  
  * Each data structure has its own way of storing and working with the data it holds

* There are two fundamental ways of storing information in data structures:  
  * In **arrays**  
  * With **nodes**

**What is an array?** 

**What is a node? (data structure)**

An individual part of a larger data structure

- Contains data  
- Has link to one or more nodes  
  [https://www.codecademy.com/learn/linear-data-structures/modules/cspath-nodes/cheatsheet\#:\~:text=Nodes%20are%20a%20basic%20data,one%20node%20to%20another%20node](https://www.codecademy.com/learn/linear-data-structures/modules/cspath-nodes/cheatsheet#:~:text=Nodes%20are%20a%20basic%20data,one%20node%20to%20another%20node).

# DATA CONTAINERS {#data-containers}

**Literal**

**Primitive**

**Reference**

**Variable** \- has one value

**Array** \- multiple values but all same type (usually)

**Structure** \- multiple values but no functions

**Class/Object** \- multiple key value pairs

Predefined Classes/Objects that behave like primitives

**List** \- multiple values can be different types 

**Dictionary** \-   
Dictionaries are used to store data values in key:value pairs.

A dictionary is a collection which is ordered\*, changeable and do not allow duplicates.

**Tuple** \- a constant list

**Set** \- a constant Dictionary, Set items are unchangeable, but you can remove items and add new items.

**Pointer** \- 

**•What is an algorithm?** 

[https://www.britannica.com/science/algorithm](https://www.britannica.com/science/algorithm)

**•What is a search algorithm?** 

[https://www.techopedia.com/definition/21975/search-algorithm](https://www.techopedia.com/definition/21975/search-algorithm)

**Binary Search** 

**Linear Search** 

**\-What is a sort algorithm?**

	

**•What is asymptotic notations?** 

Asymptotic Notation is used to describe the running time of an algorithm \- how much time an algorithm takes with a given input, n.

Three kinds of Asymptotic Notation:  
	big O  
	big Theta Θ  
	big Omega Ω

[https://www.geeksforgeeks.org/difference-between-big-oh-big-omega-and-big-theta/](https://www.geeksforgeeks.org/difference-between-big-oh-big-omega-and-big-theta/)

[https://www.codecademy.com/learn/cspath-asymptotic-notation/modules/cspath-asymptotic-notation/cheatsheet](https://www.codecademy.com/learn/cspath-asymptotic-notation/modules/cspath-asymptotic-notation/cheatsheet)

[https://www.programiz.com/dsa/asymptotic-notations\#:\~:text=Asymptotic%20notations%20are%20the%20mathematical,linear%20i.e.%20the%20best%20case](https://www.programiz.com/dsa/asymptotic-notations#:~:text=Asymptotic%20notations%20are%20the%20mathematical,linear%20i.e.%20the%20best%20case).

**•Algorithm basics**

[https://www.geeksforgeeks.org/fundamentals-of-algorithms**/**](https://www.geeksforgeeks.org/fundamentals-of-algorithms/)

	**◦What is a greedy algorithm?**

[https://www.youtube.com/watch?v=HzeK7g8cD0Y](https://www.youtube.com/watch?v=HzeK7g8cD0Y)

[https://www.youtube.com/watch?v=ARvQcqJ\_-NY](https://www.youtube.com/watch?v=ARvQcqJ_-NY)

	**◦What is a brute force algorithm?**

	[https://www.youtube.com/watch?v=xRVpT-7c0Rw](https://www.youtube.com/watch?v=xRVpT-7c0Rw)

	**◦What is a recursive algorithm?**

	[https://www.youtube.com/watch?v=k-7jJP7QFEM](https://www.youtube.com/watch?v=k-7jJP7QFEM)

	**◦What is a divide and conquer algorithm?**

	**◦What is a dynamic programming algorithm?**

	**◦What is a backtracking algorithm?**

	[https://www.youtube.com/watch?v=gBC\_Fd8EE8A\&ab\_channel=V.AntonSpraul](https://www.youtube.com/watch?v=gBC_Fd8EE8A&ab_channel=V.AntonSpraul)

	**◦What is branch & bound algorithms?**

**•What is a binary tree data structure?**

[https://www.tutorialspoint.com/data\_structures\_algorithms/tree\_data\_structure.htm](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)

[https://www.geeksforgeeks.org/binary-tree-data-structure/](https://www.geeksforgeeks.org/binary-tree-data-structure/)

* Used for data storage purposes  
* Each node can have max two children  
* Typically name them the left and right child  
* Unlike linear data structures trees can be traversed in different ways  
* Has benefits of both an ordered array and a linked list  
  * Search is as quick as in a sorted array  
  * Insertion or deletion operation are as fast as in linked list

**Important Terms**  
Following are the important terms with respect to tree.

**Path** − Path refers to the sequence of nodes along the edges of a tree.

**Root** − The node at the top of the tree is called root. There is only one root per tree and one path from the root node to any node.

**Parent** − Any node except the root node has one edge upward to a node called parent.

**Child** − The node below a given node connected by its edge downward is called its child node.

**Leaf** − The node which does not have any child node is called the leaf node.

**Subtree** − Subtree represents the descendants of a node.

**Visiting** − Visiting refers to checking the value of a node when control is on the node.

**Traversing** − Traversing means passing through nodes (once) in a specific order.

**Levels** − Level of a node represents the generation of a node. If the root node is at level 0, then its next child node is at level 1, its grandchild is at level 2, and so on.

**keys** − Key represents a value of a node based on which a search operation is to be carried out for a node.

A Tree is typically traversed in two ways:

[https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/?ref=lbp](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/?ref=lbp)

1. Breadth First aka Level Order Traversal  
2. Depth First Traversals

	

	**◦What is breadth-first search?** aka Level Order Traversal

	[https://www.geeksforgeeks.org/level-order-tree-traversal/](https://www.geeksforgeeks.org/level-order-tree-traversal/)  
	  
	[https://www.youtube.com/watch?v=kQ-aoKbGKSo](https://www.youtube.com/watch?v=kQ-aoKbGKSo)

	[https://www.youtube.com/watch?v=oDqjPvD54Ss](https://www.youtube.com/watch?v=oDqjPvD54Ss)

	Explores it’s neighbor nodes first before moving to the next level neighbors  
		\-(neighbors before children)

	Time complexity is O(n)  
		\-n are the number of nodes in the tree

	Easy way to remember \- think of the definition of ***breadth*****:**   
*\-the distance or measurement from side to side of something; width*

	MyQuestion: is the level order sequence determined? Ie left to right….  
\-Answer: yes left to right

	Steps for Algorithm:

	printLevelorder(tree)

1. Create an empty queue q (FIFO)  
2. Temp\_node \= root /\*start from root\*/  
3. LOOP while temp\_node is not NULL  
   1. Print temp\_node \-\>data.  
   2. Enqueue temp\_node’s children (first left then right children) to q  
   3. Dequeue a node form q and assign it’s value to temp\_node

	Java Implementation:

[https://www.baeldung.com/java-breadth-first-search](https://www.baeldung.com/java-breadth-first-search)  
	  
	See 3\. Implementation in Java specifically 3.1 Trees  
		

	**◦What is depth-first search?** aka depth-first traversals

	[https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)

	[https://youtu.be/IpyCqRmaKW4](https://youtu.be/IpyCqRmaKW4)

	[https://www.baeldung.com/java-depth-first-search](https://www.baeldung.com/java-depth-first-search)

	Three kinds of DFT

		Inorder (Left, Root, Right)  
		Preorder (Root, Left, Right)  
		Postorder (Left, Right, Root)

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

# 

[image1]: <data:image/png;base64,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>