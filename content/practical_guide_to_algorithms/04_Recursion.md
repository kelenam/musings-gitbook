---
title: "Recursion"
---
import Collapsible from 'react-collapsible';

## Introducing Recursion
**Recursion** is simply when a function calls itself; however it doesn't stop there... it's a technique a mindset, a way of approaching a problem, have to feel it in your heart.
- This concept underlies the rest of the workshop.

### Why Recursion?
- It's an elegant solution to keep your code D.R.Y, 
- expected CS knowledge.
- Sometimes its actually easier to implement (as we will see in trees and graphs)
- Recursion in a nutshell is breaking a problem down all the way to the simplest case, the base case, then you just add all that work up and you get your result.

## Call Stack Walkthrough

### The Call Stack Game
Bianca likes to teach recursion via the **call stack game**.
The rules of the Call Stack Game are as follows: 
- whenever a function is called, you push it onto the stack, then you execute the function body
- ...execute function body until another function is called then you want to pause the current execution wherever yuo are and go back to step 1.
- ... a return is hit: 
    - pop the current Fn off the stack
    - Resume executing the previous fn
... More formally...

1. Push Fn on stack.
2. Execute Fn body.
until...
... another fn is called:
    Pause the current execution and start at step 1.
... a return is hit:
    Pop the current Fn off the stack.
    Resume executing the previous fn.

- Lesson one of recursion, you have to return somewhere, otherwise you will be out of memory: stack overflow.
- For recursion we need a base case and return up. once we get one thing, we want to return "up".
- note, 

```javascript
let tracker = 0;

const callMe = function() {
    tracker++;
    if (tracker === 3) {
        return 'loops!';
    }
    return callMe('anytime');
};

callMe(); // --> loops
```
Our base case is the "bottom" of where we want to recurse to
- ✨ Important to remember that when we hit our base-case that what that base case returns is what gets passed back up right, because that function exits with the retun value, and that gets passed back up until we exit (popped off all the functions in the stack) the initial call with the returned value. 
- remember, if we didn't have that return in `return callMe('anytime')` would just return undefined (implicit default function behavior)
    - so the subsequent returns up the stack we're just returning `undefined`, thereby losing our value we were returning initially. 
- So essentially the purpiose of this recursion is to continue doing loops until a certain conditions are met and then break out of that loop and return that value, which is what every loop does.
- recursion just a way of doing looping

## Looping with Recursion 
![](https://user-images.githubusercontent.com/5563119/69488754-8918c400-0e22-11ea-9027-b47edfe73d40.png)
1. Identify base case(s).
2. Identity recusive case(s).
3. Return where appropriate.
4. Write procedures for each case that bring you closer to the base case(s).

1. when you are doing a for loop you might say i < arr.length thats a base case right, where we want our array to stop is when i less than arr.length
2. recusive case is the work that you want to do for each loop, maybe adding some numbers or some other operation, we want to make sure we are getting closer to our base case otherwise we will overflow the stack.
3. remember to retun where appropriate, if we don't we might lose our data
4. write the procedure closer to our base case.

There are times when dealing with things recursively will actually be easier than dealing with them iteratively when we are dealing with more complex algos/data structures.
Rember in scope, you can reach up but can't reach in, functions are their own little world.

- try getting good, from this workshop, at turning loops into recursion and vice versa, this will help us reason about recursion more easily.

## Factorial with a Loop 
```javascript
function computeFactorial(num) {
  var result = 1;

  for(var i = 2; i <= num; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }

  return result;
}

computeFactorial(5);
```

Something to keep in mind is identifying these patterns (in the looped example)... what is the pattern?
How is the problem breaking down over time? 
### Factorial with Recursion
```javascript
function computeFactorial(num) {
  
  if(num === 1) {
    console.log('hitting the base case');
    return 1;
  } else {
    console.log(`returning ${num} * computeFactorial(${num - 1})`);
    return num * computeFactorial(num - 1);
  }
}
computeFactorial(5);
```

```javascript
function logRecursively(start, end) {
    console.log(`recursively looping from ${start} until ${end}`);
    function recurse(i) {
        console.log('hitting index', i);
        if (i < end) {
            recurse(i + 1)
        }
        return i;
    }
    
    return recurse(start);
}
```
## Looping Review 
So remember ... 
1. Identify base case(s).
2. Identity recusive case(s).
3. Return where appropriate.
4. Write procedures for each case that bring you closer to the base case(s).

So whats the difference between recursion and a loop, recursion can always be implemented as a loop, but sometimes it is simpler to use recursion, for instance, when you don't know how deep something might be.

**Tail-Call Optimization** ES6 offers TCO, which allows some functions to be called without growing the call stack.

Recursion is going to be the typical answer to the these recursive data structures like traversing a tree and things like that. 

## Wrapper Functions 
So wrapper functions were the one

### Common Patterns for Recursion
- Wrapper Functions
- Accumulators

So in our previous function...
```javascript
function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${start} until ${end}`);

    if(i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}
```
We did so usign the wrapper function `recurse`
The example below we are just passing the values in each time...
```javascript
function MemoFnLoop(i, end) {
    console.log(`looping from ${i} until ${end}`);
    if (i < end) {
        MemoFnLoop(i + 1, end);
    }
}
```
- Remember, everything below our ~~~~~ lines in the call stack game, will ultimately be run last. 

## Accumulators 

The accumulator technqiues, as we build a solution, we keep passing it. 
```javascript
function joinElements(array, joinString) {

  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, '');
}

joinElements(['s','cr','t cod', ' :) :)'], 'e');
```
- So in the above, our if we specify our base case, what we are working towards, right where index hits the end of the arrray. we return the string we have been building 
- accumulation comes from building up resultsSofar (the parameter) and concatenating it with the parent scoped `joinString` value which in our case is `e`, so it's 
- we are just keeping it going, and accumulating a persisted value down into recursive calls. It's this strategy of passing the modified value or worked on value, resultsSoFar + array[index] and again more work, when we call recurse again with resultsSofar + joinString.  
- remember, we are doing work and working towards our base case. 

## Iterative Loop Exercise 
```javascript
function joinElements(array, joinString) {

  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, '');
}
function joinElements(array, joinString) {
    let results = "";
    for (let i = 0; i < array.length - 1; i++) {
        results += array[i] + joinString;
    }
    return results + array[array.length -1];
}

joinElements(['s','cr','t cod', ' :) :)'], 'e');

// im getting a bit thrown here with the ending e, 
// the secret is when returning results to add it 

```
## Iterative Loop Solution 
## Recursive Factorial & Memoize Exercise 

// Task 1: Without peeking, write your own recursive factorial method

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

- If you get stuck, play the call stack game with yourself to walk through what you want or expect your code to do.
- Since I did the factorial recusively above, I'll do the extra part by including a memo function cache factorial results. 
## Recursive Factorial & Memoize Solution 
```javascript
// Task 1: Without peeking, write your own recursive factorial method
// Task 2: Use your memo function from the previous exercise 
// to memoize your factorial method

function factorial(n) {
    if (n <= 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
};

function memoize() {

}

```
I was able to implement the factorial from before, but got tripped up with memoize as I (a) forgot it's implementation and didn't see how it would intersect with factorial, what values would we be memoizing as , isn't technically the recursive accumulator strategy a form of memoization. 
