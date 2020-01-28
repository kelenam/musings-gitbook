---
title: "Stack Data Structures"
---
import Collapsible from 'react-collapsible';

## Overview & Stack Exercise

### Implementation
Going to start implementing.

![](https://user-images.githubusercontent.com/5563119/69575908-1160ab80-0f80-11ea-8d25-931947277a35.png)

Time complexities for the most common operations. 
- They all have their pros and cons and you need to keep this in mind when implementing your data structure because you need to meet these requirements. 

✨ Sorting algorithms reference, really good to know for when you're actually solving interview questions, because you'll find that you can often increase the time complexity of your solution by sorting the list if its an ordered data structure, so basically anything other than a hash table, you can sort. 

```js
/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {

  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {

  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {

  }
}

const myStack = new Stack();

console.log(myStack)
```
### Review of ES6 classes
- So any time you want to put a property on a data structure itself, right so like...
    - storage 
    - or a pointer to the head or the tail
    You would put this in the constructor method 

Refresher on ES6 classes... `constructor` is just inside of the regular function, where you call `new` and you you call `this.storage` this is just a different syntax...

#### Creating an instance...
when you creat an instance from your constructor, that means from your constructor you create one of the things that you're making, it's a factory right... in this case its a stack... the way we use it is we say...
`const myStack = new Stack();`

What `myStack` will look like an object that has a property `_storage`, that has an onject inside of it.
- then we have some methods as well.

#### Adding a new constructor property
```js
//...
  constructor() {
    this._storage = {};
    this.otherThing = 'WHOA';
  }
//...
  }
```
- The underscore on `this._storage` signifies that this is an internal property , you shouldn't be working on it directly, like if you are the person consuming this Stack class, I am not supposed to do stack._storage things... `console.log(myStack._storage)`
- The underscore says, this is private, you're not supposed to acccess it
- youre only supposed to access it through the methods that are public (that we have yet to implement)

Exercises are commented with JSDoc.
[JSDoc](https://jsdoc.app/)
It starts with a description, the parms it takes, the name of that param and the value to push
- comments are defining the interace of this method

Your task it is to figure out the logic to implement this IN the time complexity required for this data structure... all the methods we are being asked to implement above need to be constant time, that means we can't shift anything around , shouldn't be any looping , shouldn't be anything other than lookups, simple math, etc.

### My Stack Solution
My attempt...
```js
/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = [];
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    this._storage[this._storage.length] = value;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    const popped = this._storage[this._storage.length - 1];
    this._storage.length = this._storage.length - 1;
    return popped;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    return this._storage[this._storage.length - 1];
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

myStack.pop()
myStack.pop()
myStack.peek();
```


- You should know the general approach the strategy, don't memorize it,
- I felt comfortable doing this, without looking anything up, I had a few errors doing this_.storage, instead of this._storage
but it took me about 15 minutes. 
> Update, however, I modifed the storage structure to an array..

In real life, youre probably never going to have to implement a hash table or a linked list yourself from scratch... but these are interview circumstances.

The first thing Bianca does when thinking about a DS is, how do I draw it out in code terms with the output...
`// { _storage: {0: 'zero' }}`
maybe want to do some order, and have a key thats a zero, and a value, and then keep inserting, 
- in order to pop the last index, likely need a way to keep track of the index, so maybe like storing a length property?
- peek is similar to pop right, so thats how we kind of draw it out in our heads
- the next thing is what would this look like in terms of the API, and the API is just like, how am I interacting with this data structure. 

So some thing to talk about with your interviewer are going to be like edge case, like what if its empty how might we handle this? What about a function that is requiring another function to be passed, what if its undefined, a string? 
If its shorter it might be better to be asking question throughout, or even maybe they might be okay with a //TODO where you right your solution with a TODO to come back to account for edge cases

Bianca recommends that once you kind of go through your mental walkthrough and you know which approach you are going to take, you discuss it with your interviewer, you can ask them what their opinion is. And if you don't like have the step by step already in your head, you might want to pseudo code like in plain english , you can even debug your pseudo code. 
 
`delete` keyword for deleting properties was useful. I think I just changed my length property which wasn't really recommended, maybe better to set that last value to undefined like...
`this._storage[this._length - 1] = undefined`
- I think delete is cleaner. 

## Stack: Edge Cases
- type checking 
- what if youre popping something that is empty?
    - throw an error or do nothing.
    - something to ask your interviewer, or Bianca likes to just check out how the regular array handles it.

- Also if you wanted to give 'access' to your length property you could drop the _ but its better to just write like a `getLength` method without a setLength because letting other change your length property will break the functionality your wrote for your stack. 
 
