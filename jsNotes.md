JAVASCRIPT INTERVIEW QUES

💡 JavaScript

✅Explain how JavaScript execution context, async behavior, and event loop work.  and ✅ Explain how the Event Loop works.

1. Execution Context: How JS Keeps Track of Code
Before any JavaScript code runs, the engine creates an environment called an Execution Context. Think of it as a container that holds the variables, functions, and the value of this for the code currently being evaluated.
There are two main types of execution contexts:
Global Execution Context (GEC): Created by default when your script starts. There is only one GEC in a program. and  Function Execution Context (FEC):
The Call Stack
The engine tracks these execution contexts using a data structure called the Call Stack (a Last-In, First-Out structure).

async behavior:
, JavaScript running in a browser relies on surrounding host capabilities called Web APIs (or C++ APIs in Node.js). These APIs run in the background outside the JS engine thread.
When you write async code, JS offloads the heavy lifting to these background APIs and immediately moves on to the next line of code without waiting.

event loop work :
Once a Web API finishes its job how does that result get back into the single-threaded JS Call Stack?
It goes through a queuing system monitored by the Event Loop. The Event Loop: A continuous loop that asks a simple question: "Is the Call Stack empty?"
If YES: It first flushes ALL callbacks in the Microtask Queue.
Then: It takes ONE callback from the Macrotask Queue and pushes it to the Call Stack.
Repeat: It checks again after every task execution.


✅set Timeout() is a built-in JavaScript function that schedules a function to run after a specified amount of time.

✅ Why were Arrow Functions introduced when traditional functions already existed?
Normal functions create their own this. Arrow functions do not. They inherit this from where they are created.




✅ Difference between callbacks, Promises, and async/await
callbacks You pass a function inside another function as an argument to be run later.

A Promise is an object that represents the future result of an asynchronous operation.
It can be in one of three states:
Pending
Fulfilled
Rejected
4. Settled: This is a general term indicating that the promise is no longer pending—it has
either been fulfilled or rejected. Once a promise settles, its state is locked and cannot
change.
eg - while  fetching a api if success than it go to .then , if not success it will go to .catch

async/await is built on top of Promises and provides a synchronous-looking syntax, making asynchronous code easier to read and maintain while still being non-blocking.



✅ Callbacks:
- What are callbacks?
A callback is simply a function that is passed as an argument to another function, so it can be executed later.

✅- How many callback queues are there?
There isn't just one callback queue. Modern JavaScript environments (like browsers and Node.js) have multiple queues.

1. Microtask Queue , Contains callbacks from:

Promise .then()
.catch()
.finally()
queue Microtask()
Mutation Observer (browser)


2. Macro task (Callback) Queue , Contains callbacks from:

set Timeout()
set Interval()
DOM events
I/O operations
set Immediate() (Node.js)


✅ -async function start Call(room, is Caller = false) { why passing is caller= false
This is called a default parameter (or default function parameter) in JavaScript.
it means that if is caller is not passed put it false


✅- Which callback queue has the highest priority?
The Microtask Queue has higher priority than the Macro task Queue.

✅ How does Hoisting work in JavaScript?

✅ Difference between var, let, and const in terms of scope, hoisting, and redeclaration.
In JavaScript, var, let, and const are used to declare variables, but they differ significantly in three key areas: Scope, Hoisting, and Redeclaration / Reassignment.

1. Scope:  Scope determines where a variable is accessible within your code.
var: Function-Scoped
Variables declared with var are bound to the function they are declared in. If declared outside a function, they become globally scoped. They do not respect block boundaries like if statements or for loops.
var ignores blocks (if, for, while), but never ignores functions.


let & const: Block-Scoped
Both let and const are strictly bound to the nearest enclosing block {} (e.g., inside an if block, for loop, or plain braces).

Hoisting is JavaScript's behavior of processing declarations before executing the code.
2. Hoisting is JavaScript's default behavior of moving variable declarations to the top of their current scope during the creation phase of execution.
Hoisting = JavaScript reads all declarations first, then starts executing the code.
var Hoisting
var variables are hoisted to the top of their scope and automatically initialized with undefined.
 You can access them before their actual declaration in the code without throwing a syntax error.
 eg console.log(greeting); // Output: undefined (no error!)
var greeting = "Hello";


let & const Hoisting (Temporal Dead Zone)
let and const variables are also hoisted to the top of their scope, but they are not initialized.
The period between the entering of the scope and the actual variable declaration is called the Temporal Dead Zone (TDZ).
 Accessing a variable while it is in the TDZ will throw a Reference Error.
	


3. Redeclaration and Reassignment
var: Redeclaration: Allowed within the same scope. Reassignment: Allowed.
let: Redeclaration: Not allowed in the same scope. Reassignment: Allowed.
const: Redeclaration: Not allowed. Reassignment: Not allowed. A const variable must also be initialized at the time of declaration.


✅ What are Closures? Give an example.
An inner function is not automatically a closure. It becomes a closure only if:
It accesses variables from its outer function, and
It continues to exist after the outer function has finished executing.
Interview definition
A closure is an inner function that remembers and can access variables from its outer function even after
 the outer function has returned. This is because JavaScript keeps those variables in memory as long as the inner function still references them.


✅ let x = new promise((resolve) =>{
 some execution   resolve (result) }

const result= await x

and x = await some execution return x

is similar

✅creating new promise and resolve

creating a new promise that will execute some fun and instead of using return in promise we use resolve means if inside this promise fun the main thread start execute and  send the data to background task and leave the function the things inside this fun will execute in event task of js and when it done it will send back to the fun and there is what resolve come in it changes the state of promise from pending to fulfilled. If you had a .then(result => ...) or an await waiting for this Promise somewhere else in your app, JavaScript immediately wakes them up and hands them the data..

However, creating a Promise does not automatically send the work to a background thread. means inside promise we could had used async programming means call back api fetch or anything 4

"resolve(result) means:
"Tell the Promise that the asynchronous operation has successfully completed, and its result is result."


✅ What are Generator Functions, and when would you use them?
A generator function is a special function that can pause its execution and resume it later.
syntax :  You create one using function* and use yield to pause the function.

when we call generator fun it docent execute immediate instead it return an iterator obj and we can do that iterator obj .next to execute the whole function
	e g:   function* number Generator() {
  console.log("Function start !");
 
  yield 1; // Function will pause here and  return 1
 
  console.log("resumed ");
 
  yield 2; // again pause
 
  console.log("Function done!");
}



const gen = number Generator(); // it wont execute immediately rather it will return "Iterator" object .

console.log(gen.next());
// Output: "Function start !"
// Returns: { value: 1, done: false }

console.log(gen.next());
// Output: "resumed"
// Returns: { value: 2, done: false }

console.log(gen.next());
// Output: "Function done!"
// Returns: { value: undefined, done: true }




✅ return{result , room Id} // nested return
Ans: {
  result: {
    ttfb: 180,
    score: 95
  },
  room Id: "room_123"
}

return{...result , room Id} // joined  return
Ans: {
   {
    ttfb: 180,
    score: 95
   room Id: "room_123"
}




✅ Have you used Closures in any real project? If yes, where and why?
✅ Multiple output-based questions on:
- set Timeout
- Promises
- Event Loop execution order

✅ Write a program to flatten a nested array, followed by several in-depth follow-up questions.

✅ Difference between:
- map(): map() creates a new array by transforming every element of the original array.

- filter() : filter() creates a new array containing only the elements that satisfy a condition.

- reduce(): reduce() reduces an entire array to one single value.

- for Each():for Each() simply executes a function for every element. for Each() ignores the callback's return value because its purpose is to execute a function for each element, not to produce a new value. In contrast, methods like map(), filter(), and reduce() are specifically designed to use the callback's return value to create a result. That's why return is meaningful in those methods but not in forEach().

for of () = gives the values eg for (value of valuesarray ) => cons.log (value) all values will be print
for in () = gives the index / keys of the array



✅RETURN :
JavaScript's Automatic Semicolon Insertion (ASI) : In JavaScript, when you write return and then put a line break, JavaScript automatically inserts a semicolon after return:

 eg: return
	x . op-> undefined cuz after return we didnt sent it immidiated we sending x on new line and js created a semicoln after return

but eg: return x . -> this output will be the value of x






✅ What are Semantic HTML tags? Why are they preferred over non-semantic tags?
Semantic HTML tags are HTML elements whose names clearly describe the purpose and meaning of the content they contain. e.g. : <header> <nav><main><section><article><aside><footer>
Unlike non-semantic tags like <div> and <span>, they provide meaningful structure to the document. They are preferred because they improve code readability, help search engines understand the page for better SEO.
Semantic tags do not automatically make a page look different. Their primary purpose is to add meaning and structure. Styling still comes from CSS.


✅ Explain different CSS positions. When would you use Flexbox vs CSS Grid?
The position property controls how an element is positioned on the page
CSS provides five main positioning modes: static, relative, absolute, fixed, and sticky. static is the default. relative moves an element relative to its original position while keeping its space in the layout. absolute removes the element from the normal flow and positions it relative to the nearest positioned ancestor. fixed positions an element relative to the viewport, so it stays visible during scrolling. sticky behaves like relative until a specified scroll position, after which it sticks like fixed.

Flexbox and CSS Grid are both layout systems. Flexbox is one-dimensional and is ideal for arranging items in a single row or column, such as navigation bars, toolbars, and forms. CSS Grid is two-dimensional, making it better for complex layouts involving both rows and columns, such as dashboards, galleries, and full-page layouts. In many applications, Grid is used for the overall page layout, while Flexbox is used to align content within individual sections.
The position property controls how an element is positioned on the page.  display: flex or grid ;


✅ JavaScript data types. : Data type = What kind of value is stored.  "Immutable means "cannot be changed after it is created."

JavaScript has eight data types. Seven are primitive: String, Number, Boolean, Undefined, Null, Symbol, and BigInt. Primitive values are immutable and are copied by value. The eighth is Object, which is a non-primitive or reference type. Objects include plain objects, arrays, functions, dates, maps, and sets, and they are copied by reference. A common interview point is that typeof null returns "object" due to a historical JavaScript bug, even though null is actually a primitive type.

A primitive is the most basic type of value in JavaScript. It is not an object and stores a single, immutable value.
NOTE : A function that is stored as a property of an object is called a method



- What is the difference between shallow and deep copy?
- What happens when multiple async operations execute together?

✅ undefined vs null.

✅ Map vs Set.

✅ for loop vs for Each() :
for loop is a language loop that gives you full control and works on  Arrays, strings, loops in general.

for Each() is an array method that executes a callback for every element. Works on Arrays only

✅ Why can a traditional for loop be faster in some scenarios?

✅ Promises vs async/await.

✅ Can await be used outside an async function?

✅ Why shouldn't the useEffect callback be marked async?

✅. How does event delegation work in JavaScript? Why is it efficient?
Event delegation is a technique in JavaScript where we attach one event listener to a parent element instead of adding separate event listeners to each child element.
It works because of event bubbling. When an event happens on a child, it bubbles up to its parent, where we can identify which child triggered the event using event.target.
Why is it efficient?
It reduces the number of event listeners in the DOM.
It uses less memory.
It is useful when there are many child elements.
It also works well for dynamically added elements, because the parent listener already exists.






Round 1 - (Pure Frontend fundamentals)



👉Questions on closures, Promises, hoisting, string methods, and array methods.
👉Find top-k elements in an array and hash map problem (DSA).
👉Difference between arrow functions vs normal functions.
👉Promises and async logic questions.


👉 Build a React list with collapse/expand feature
👉 Create a reusable Button component with variants and sizes (like MUI)
👉 React class component lifecycle and hooks behavior
👉 Reconciliation, rendering, and why React behaves a certain way
👉 Reflow vs repaint in the browser and when they happen
👉 CSS animation performance: why transform is preferred
👉 Event propagation: bubbling vs capturing
👉 Write a Promise polyfill with real use cases
👉 Implement an async scheduler with max concurrency
👉 Big list rendering optimization (windowing / virtualization)
👉 Build React-like class components from scratch (ES5)





2. Difference between let, const, and var. Explain hoisting and the Temporal Dead Zone (TDZ).
3. Explain the JavaScript Event Loop (Call Stack, Web APIs, Callback Queue, and Microtask Queue).
4. Difference between == and ===. Explain type coercion with examples.
5. What are closures? Explain with a real-world use case.
6. Explain async/await vs Promises. How does the Event Loop handle them?
7. Deep Copy vs Shallow Copy in JavaScript objects and arrays.
8. Explain debouncing and throttling. When would you use each?
9. Explain call(), apply(), and bind().
10. Explain the this keyword in different execution contexts.
11. Difference between map(), filter(), reduce(), forEach(), and find().
12. What is currying in JavaScript?
13. What are higher-order functions? Give examples.
14. Difference between nullish coalescing (??) and logical OR (||).
15. How does garbage collection work in JavaScript?

6)Write polyfills for map(), filter() and reduce().
7) What is GraphQL, and how is it different from REST?
8) How do Apollo cache policies such as cache-first and network-only work?
9) How do GraphQL subscriptions work?
10)Explain normalized caching in Apollo Client?
11)When would REST be a better choice than GraphQL?
12) Remove duplicate letters so every character appears once and the result is lexicographically smallest.
Input:  "cbacdcbc"
Output: "acdb"
13)Build a Product Listing page using React.js and GraphQL with search, pagination, and Apollo Client caching.


1. How does event delegation work in JavaScript? Why is it efficient?
2. Difference between let, const, and var. Explain hoisting and the Temporal Dead Zone (TDZ).
3. Explain the JavaScript Event Loop (Call Stack, Web APIs, Callback Queue, and Microtask Queue).
4. Difference between == and ===. Explain type coercion with examples.
5. What are closures? Explain with a real-world use case.
6. Explain async/await vs Promises. How does the Event Loop handle them?
7. Deep Copy vs Shallow Copy in JavaScript objects and arrays.
8. Explain debouncing and throttling. When would you use each?
9. Explain call(), apply(), and bind().
10. Explain the this keyword in different execution contexts.
11. Difference between map(), filter(), reduce(), forEach(), and find().
12. What is currying in JavaScript?
13. What are higher-order functions? Give examples.
14. Difference between nullish coalescing (??) and logical OR (||).
15. How does garbage collection work in JavaScript?

• What will be the output of a code snippet involving closures, var, and loops?
• How would you implement a polyfill for Array.prototype.map()?
• What is the difference between shallow copy and deep copy?
• Explain Promise.all() vs Promise.allSettled(). When would you use each?
• What is an Event Emitter? How would you implement a basic one?




Build a Bangalore Pincode Explorer (Full stack app: pincode - area name)



Hi, I’m a Full Stack Developer with a strong focus on Backend Engineering using Node.js. I have hands-on experience building and deploying full-stack applications, with expertise in backend architecture, authentication, APIs, databases, security, and performance.

If prior professional experience is not mandatory, I believe my technical skills and hands-on project experience would make me a strong fit for this role. I’m highly motivated to learn, contribute, and grow with the team.