 Core Node.js Concepts
The default port for HTTP is 80, and the default port for HTTPS is 443, MongoDB: 27017  ,Redis: 6379
 what is n p x? : npx is a tool that comes with npm. Its job is basically: Find and execute a package's command-line executable.
	e g : If you install TypeScript: npm install -D typescript : you get the tsc executable inside: node_modules/.bin/tsc
		Instead of manually running that path, you can do: npx tsc

Node.js is a powerful, open-source runtime environment that allows developers to run JavaScript code outside of a web browser, primarily on the server side. Built on Google Chrome’s V8 JavaScript engine, Node.js is designed to build scalable network applications. It employs an event-driven, non-blocking I/O model, making it lightweight and efficient for data-intensive real-time applications that run across distributed devices.

This architecture allows Node.js to handle multiple requests simultaneously without waiting for a task to complete, which significantly improves performance for applications that require high concurrency. Additionally, its package manager, npm, provides access to a vast ecosystem of open-source libraries and tools, enabling developers to quickly add new features and functionalities to their applications.

API means : Application Programming Interface


LEARN SOME SECUITY HEADERS , OAUTH IN DEEP , SECURITY TOPICS WEBHOOK ETC

# ✅ CORS = Cross-Origin Resource Sharing
 It is a browser security feature that controls whether one website can make requests to another website.
By default, the browser does not send cookies on cross-origin requests. so thats why need to do credentials true in both server and frontend

# ✅A webhook is a way for one application to automatically notify another application when an event happens.
 Instead of constantly asking "Did something happen?", the other application simply sends a message immediately when it happens.

# ✅What is Caching?
Caching = Saving a copy of data in a fast place so you don't have to fetch it again from a slow place.


# ✅ What is Node.js and how does its event-driven architecture work?
Node.js is a tool that lets you run JavaScript outside the browser—directly on your computer or a backend server. It is what allows you to build powerful backend APIs and WebSocket servers using simple JavaScript!
Event-Driven Architecture means that the flow of the application is controlled by events.
An event is simply something that happens in the system, such as:

An HTTP request arrives.
A file finishes reading.
A timer expires.
A socket receives a message.
A database query completes.

In Node.js, instead of continuously waiting for each operation to finish, the runtime registers functions (called event handlers or listeners) that should execute when specific events occur.


# ✅ How does the Node.js Event Loop handle asynchronous operations?
Node.js has a Single Thread, meaning it only has one main worker executing your code. To handle thousands of users at once without freezing, it uses the Event Loop.The Event Loop is an endless spinning loop that constantly asks one question: "Is the main worker free right now?"
If the main worker is busy, the Event Loop waits.
As soon as the main worker finishes its current line of code, the Event Loop grabs the first finished task from the Queue and pushes it to the main worker to execute.


# ✅ How does the Node.js  handle asynchronous operations in one thread ?
Node.js executes JavaScript on a single main thread. When it encounters an asynchronous operation like reading a file, making an API request, or querying a database, it delegates that work to libuv and the operating system instead of blocking the main thread. While the operation is running, the main thread continues executing other JavaScript. When the operation completes, the Event Loop schedules the callback or Promise handler to run on the main thread. This is how Node.js handles many concurrent I/O operations efficiently while keeping JavaScript single-threaded.
libuv is a high-performance C library that gives Node.js its superpower: the ability to handle asynchronous, non-blocking operations.






# ✅ OAUTH

OAUTH,OAUTH2.0, OPEN ID CONNECCT --
OAuth is an authorization framework that allows an application to access a user's resources without knowing their password. basically its a authorization .
OAuth 2.0 is the modern version of that framework.

 OpenID Connect (OIDC) is an authentication layer built on top of OAuth 2.0 that adds an ID Token, allowing applications to verify the user's identity while still using OAuth 2.0 for authorization.
<GoogleLogin
  onSuccess={(credentialResponse) => {
    console.log(credentialResponse.credential);
  }}
/>
The credential you receive is an ID Token (JWT).and in backend we verifies it

GSI (Google Sign-In) is Google's authentication solution that allows users to log in using their Google account. It is built on OAuth 2.0 and OpenID Connect. After the user signs in, Google returns an ID Token, which the backend verifies before creating the application's own session or JWT.

Google OAuth is permission-based.
In fact, the primary reason OAuth exists is to delegate limited permission to a third-party app without handing over your actual Google account password.

What "Permission-Based" Means in Practice
Instead of giving an app full, unlimited access to your Google account, Google OAuth forces the app to state exactly what actions it wants to perform.
You, as the user, are shown a consent screen where you explicitly agree to (or reject) those specific permissions.


# ✅ Understanding npm and package.json
npm (Node Package Manager) is the default package manager for Node.js. it helps to add remove update delete packages
A package is simply a reusable library written by someone else.

package.json is the(configuration) file of a Node.js project. It tells npm everything about your project.
Dependencies are packages that your application needs to run in production.

What are devDependencies?
These packages are only needed during development.eg nodemon

package-lock json:  is automatically generated by npm and locks the exact versions of all installed packages, including nested dependencies. This ensures that every developer and deployment installs the exact same dependency tree, making builds consistent and reproducible.

🔹 Server & API Development
# ✅ Creating HTTP servers using Node.js
Node provides a built-in http module that allows you to create a server capable of listening to network traffic. When you create a server, you define a callback function that runs every time a request hits your designated port. This function receives the incoming data and determines what to send back.

# ✅ Express.js middleware and its importance
In Express.js, middleware is a function that executes during the request-response lifecycle. It sits directly between the incoming HTTP request from the client and the final route handler or final response sent back by your server.
 inbuilt middleware - xpress.json
application middleware - app.use
routes middleware - req,res middleware , endpoint
third party mw - cors()

# ✅what are global error handlers
there are global error middlware which are initialized after all the global middleware and have 4 calling argument (err, req, res, next) When Express sees a middleware with four arguments, it automatically treats it as an error handler.

# ✅ Routing and REST API design principles
Routing is the process of mapping an incoming HTTP request (URL + HTTP method) to a specific function (route handler).
Common Routing Methods
app.get()app.post()app.put()app.patch()app.delete()

REST stands for Representational State Transfer. A REST API is a set of rules for designing APIs that allow a client (frontend, mobile app, etc.) to communicate with a server using HTTP.
1. Resources are represented by URLs eg /users
2. Use HTTP methods correctly eg GET /users , DELETE /users/1


# ✅ Request & response lifecycle
the Request-Response Lifecycle is the journey an HTTP request takes from the exact moment a client (like a browser or Postman) sends it,
 to the moment the server sends a response back


🔹 Asynchronous Programming
# ✅ Non-blocking I/O in Node.js
Non-blocking I/O means that when Node.js initiates an I/O operation (like reading a file, querying a database, or making a network call), it does not stop execution to wait for the result. Instead, it delegates the task to the system, attaches a callback (or Promise), and immediately moves on to process the next line of code or the next incoming request.


# ✅ Handling callback hell
callback is inside another callback. It looks like a pyramid.This is called Callback Hell.
A callback is simply a function passed as an argument to another function, which is called later. JavaScript introduced Promises to solve callback hell
very


# ✅ Promise chaining
. A Promise represents a value that may be available now, later, or never. A Promise has three states:
pending , fulfilled , rejected
Each .then() returns another Promise. .then() is a method that says: "When this promise finishes successfully, run this function."

Each .then() callback executes asynchronously as a microtask after the Promise settles.
 In a chained sequence, each .then() depends on the previous one because it receives the value or Promise returned by the previous .then().
 However, if multiple .then() calls are attached to the same Promise independently (not chained), they are not dependent on each other—they all run when that Promise resolves.


# ✅Why do Promise callbacks run before setTimeout(..., 0)?
When the Call Stack becomes empty:
JavaScript first empties the entire Microtask Queue.
Only then does it execute one Macrotask.
Call Stack Empty
       │
       ▼
Microtasks
(Promise)

       ▼
Macrotasks
(setTimeout)

Microtask stops only when the Microtask Queue becomes completely empty.

# ✅ Error handling with async/await
 using try catch


and diff between async and .then -
 Both .then() and await are used to handle Promises. .then() attaches a callback that runs when the Promise resolves, while await pauses the execution of the current async function until the Promise settles. They achieve the same result, but async/await generally produces cleaner, more readable code and works well with try...catch for error handling. Internally, await is built on top of Promises—it doesn't replace them.

# ✅  What happens under the hood of await?
Pause function-> Return control to Event Loop -> Continue running remaining code -> Promise resolves -> Resume function as a Microtask


🔹 Database Integration
✅ Connecting Node.js with SQL/NoSQL databases
✅ CRUD operations
✅ Database optimization techniques

🔹 Advanced Node.js Topics
✅ Streams and Buffers: A Buffer is a fixed-size area of memory used to temporarily store raw binary data, such as bytes from files, images, or network packets. A Stream is a mechanism for processing data incrementally in chunks rather than loading it all into memory at once. In Node.js, readable streams emit chunks as Buffer objects by default, making streams memory-efficient and ideal for handling large files and network communication.

✅ Event Emitters
✅ Authentication & Authorization : Authentication verifies who you are, while authorization determines what you are allowed to do
✅ Security best practices
✅ Performance optimization


• How would you prevent memory leaks in a long-running Node.js application? and Memory leak handeliing .
# ✅ Memory leak handling :
 In Node.js, memory leak means your application keeps holding references to objects that it no longer needs, so the V8 garbage collector cannot free that memory.
	Node.js uses V8 Garbage Collection, so normally unused objects are automatically removed.
	 A memory leak happens when something accidentally keeps them reachable. Common causes of memory leaks
1. Global variables : Every request adds data to global variable , and nothing removes it. So memory keeps growing:
 so Fix it by removing data when it is no longer needed or using an appropriate cache with limits/TTL. eg if we storing value inside a var user = newMap{} and we are keep isnerting values inside and not deleting it when we don't need it anymore this cause memory leak

2-  Event listeners not removed  e.g. : function handle Request() { const handler = () => {
    console.log("data");};
  emitter. On("data", handler);
  // later need to do this
  emitter. Off("data", handler);}

3. set Interval() : If you create intervals repeatedly and never stop them, they continue running and can retain references.
 	e.g. : const interval = set Interval(do Something, 1000);
			clear Interval(interval); // should clear like this

5. Cache growing forever and not clearing up e.g. : const cache = new Map() , we insert data inside  this but not clear it this cause memory leak



# ✅ Scaling Node.js applications : 
1. Horizontal scaling Horizontal scaling means: Add more servers instead of making one server bigger.Horizontal scaling It means running multiple instances of the same application.

2- Database : using proper database using Redis for Caching
3- using tools like PM2
4- Load balancer : Nginx AWS Elastic Load Balancer  Cloud load balancers  Kubernetes ingress/load-balancing systems

🔹 Real-Time & Production Concepts
✅ WebSocket implementation
✅ Microservices architecture
✅ Docker deployment
✅ Logging and monitoring


# ✅ What are Worker Threads, and when would you use them instead of Child Processes?
Worker Threads allow Node.js to execute JavaScript on separate threads within the same process. I would use them for CPU-intensive JavaScript tasks such as image processing or heavy calculations, because they prevent the main event loop from being blocked.

Child process : are independent diff process with their own event loop , I would use Child Processes when I need stronger process isolation or need to execute an independent program such as Python or a shell command. Worker Threads generally have lower overhead, while Child Processes provide stronger isolation



•✅ How would you implement a graceful shutdown in a production Node.js service?
  > In a production Node.js service, graceful shutdown means: Stop accepting new requests → finish existing work → close connections/resources → exit the process.
	You don't want to suddenly kill the Node process because users could have requests in progress, database operations running, or files being uploaded.
	
	""I would listen for SIGTERM and SIGINT, stop accepting new HTTP traffic with server.close(), allow active requests to finish, then close resources such as MongoDB, Redis, 	Socket.IO connections and message queues. I'd also add a shutdown timeout so a stuck request cannot keep the process alive indefinitely. Finally, I'd exit with code 0 for a 	successful shutdown or 1 if cleanup fails.""

 e.g. :  const shutdown = async (signal) => {
  console.log(`${signal} received. Starting graceful shutdown...`);

  // 1. Stop accepting new HTTP requests
  server. Close(async () => {
    console.log("HTTP server closed");

    try {
      // 2. Close database connection
      await mongoose. connection. close();
      console.log("MongoDB connection closed");

      // 3. Close other resources here
      // await Redis. Quit();
      // await queue. close();

      console.log("Graceful shutdown completed");

      // 4. Exit process
      process. exit(0);
    } catch (error) {
      console. error("Shutdown error:", error);
      process .exit(1);
    }
  });
};

// Handle termination signals
process. on("SIGTERM", () => shutdown("SIGTERM"));
process. on("SIGINT", () => shutdown("SIGINT"));   // process is an Event Emitter, so it has .on().


 SIGINT and SIGTERM are signals/messages sent to your Node.js process.
	SIGINT = Signal Interrupt Usually, you get this when you press: Ctrl + C

	SIGTERM = Signal Terminate It's basically a request from the operating system/environment saying: "Please terminate this process."
	SIGKILL Forced termination Cannot be gracefully handled....



# ✅• How would you handle CPU-intensive tasks without blocking the Event Loop?
 	In Node.js, the key idea is: Don't perform heavy CPU work directly on the main thread, because Node's Event Loop runs there.
How do you solve it?

There are several approaches.
1. Worker Threads — best for CPU-heavy JavaScript , Node.js provides worker threads. e g:

	import { Worker } from "worker threads";

app. get("/calculate", (req, res) => {
  const worker = new Worker("./worker.js");  // new worker  do ? : Node creates a separate worker thread and tells it: "Run the code inside worker.js."

  worker. On("message", (result) => {
    res. json({ result });
  });
});
 

2. Use a job queue : User  ↓ POST /generate-report ↓ API server ↓ Add job to Redis/Bull MQ  ↓ Return "Job started"

3. Use multiple Node.js processes

4- what about async/await :  it does NOT automatically move CPU work to another thread. async/await is mainly useful for asynchronous operations such as:



# ✅ How to handle race conditions when multiple requests try to update the same resource simultaneously?
A race condition happens when a program's final outcome depends on the unpredictable timing of events, like which network request finishes first. It is literally a "race" between two processes, and the winner unpredictably changes the result.
	A race condition happens when multiple requests read/update the same data at nearly the same time, and the final result depends on which request happens to execute first.
For a Node.js backend, you generally solve this using database-level concurrency control, not just JavaScript variables.

1. Use atomic database operations : atomic means: An operation happens completely or doesn't happen at all.

Instead of:

const user = await User. find By Id (user Id);
user. balance -= 80;
await user. Save();

use : const result = await User .update One(
  {
    _id: user Id,
    balance: { $gte: 80 }
  },
  {
    $inc: { balance: -80 }  // reduce the balance bye 80
  }
);


2. Use transactions for multiple related updates  //mongo db. transaction
	 session. start Transaction(); ,
   session. commit Transaction();

3. Unique indexes prevent duplicate resources


# ✅ How do you create a REST API endpoint?

  the routes we defined for the http req is the call the endpoint  and to handle req came to that endpoint we setup a callback  function called as controller function that run for that particular endpoint request

callback e.g. : 	function greet() { console.log("Hello"); }
		some Function(greet); // calling greet fun inside some other fun

same for http req controllers : function get User(req, res) {  res .j son({ name: "John" }); }
				router. Get("/users/:id", get User); //router. Get() is a fun and we are passing a callback fun i e a controller

internal callback logic behind this router .  get /post /put /patch :
function get(path, callback) {  / here path is the endpoint and callback is  the controller function i.e. get User for eg
 

    // later, when request comes:
    callback(req, res, next); // means get user( req , res next )and this is how callback happens
}




# ✅ How do you handle errors in an API?
  i will use try catch , global error handler middleware , handle expected situations


# ✅ How would you read and return data from a JSON file?
   i will use fs module method for read data and then simply parse it use json .parse
    e.g. : const data = await fs .read File("./data/users. j Son", "utf-8");
    const users = JSON .parse(data);


# ✅ What's the difference between process. next Tick() and set Immediate()?
"process. next Tick() and set Immediate() are both used to execute code asynchronously. process. next Tick() executes the callback immediately after the current operation completes, before the event loop continues. set Immediate() executes the callback in the check phase of the event loop, generally after I/O callbacks. So, next Tick() has higher priority than set Immediate()."


# ✅ How does Node.js handle child processes and CPU-intensive tasks?
In simple terms, Node.js is single-threaded for JavaScript, so if you perform a heavy CPU task directly, it can block the event loop.
For CPU-intensive work, Node.js can use child processes or worker threads.


# ✅What's the difference between require and import?
	 import is e S m syntax , require is common JS syntax .


# ✅ Vertical vs Horizontal Scaling
	Vertical scaling — "make the server bigger" You increase the resources of one machine.
before Server ,2 CPU , 4 GB RAM
After: Server , 16 CPU , 64 GB RAM
You are making the existing server more powerful. this is what vertical scaling means

Horizontal Scaling:  So horizontal scaling means increasing the number of instances means one service is getting too much req so we create copies of that services and create multiple diff Nodejs process. e g : bull Mq  worker deployed on multiple diff region



# → Explain the differences between SQL and NoSQL, and when you'd choose each
Practical/coding:
→ Implement a simple rate limiter
→ Debounce vs throttle — implement both
→ Design a REST API for a given use case, including error handling and status codes
→ Explain how you'd scale a Node.js app horizontally
→ Walk through how you'd secure a login endpoint end-to-end

System design:
→ How would you design a URL shortener?
→ How would you handle 1 million concurrent WebSocket connections?
→ How would you design a rate-limited, cached API for a high-traffic endpoint?


Building and Scaling APIs: Designing and building the APIs and microservices that power core customer experiences across Atlassian's product suite.

Build and architect distributed systems

Owning the Lifecycle: Driving complex projects autonomously, taking them all the way from initial technical design and architecture to launch and post-launch maintenance.

Architecture & Problem Solving: Solving complex architectural challenges, defining architectural standards, and evaluating trade-offs between performance, robustness, and space/time complexity.

Infrastructure & Reliability: Configuring monitoring and telemetry for backend services, building CI/CD pipelines, and ensuring that features are built with high reliability and fault tolerance in mind.

Code Quality & Maintenance: Leading thorough, meaningful code reviews, writing detailed documentation, and tackling complex bug fixes—especially those posing a high risk to the system.

Cross-Team Collaboration: Partnering with other engineering, product, and platform teams to handle company-wide initiatives that span multiple projects and codebases.

Mentorship: Setting standards for best practices and actively mentoring more junior members of the engineering team.


✅API & Production Debugging

✅ How do you design a REST API?
I design a REST API by first identifying the resources, like users, products, or orders. Then I create endpoints for those resources and use HTTP methods like GET, POST, PUT/PATCH, and DELETE.
For example:
GET /users → get users
POST /users → create a user
GET /users/1 → get a specific user
PUT /users/1 → update a user
DELETE /users/1 → delete a user
I also make sure to use proper status codes, validate the data, handle errors, and add authentication and authorization where needed.


✅What HTTP status codes/errors do you handle?
✅ What should the frontend do when an API returns no data?
✅How do you troubleshoot runtime errors occurring in production that aren't visible in the browser console?

2. Web API vs REST.
  Explain the difference between Web API and REST.


# ✅What is middleware and why do we use it ?
middleware are the function that run in before the req and res to or run in between the whole http req

# ✅ Is middleware synchronous or asynchronous?
Middleware can be either synchronous or asynchronous. It depends on what the middleware is doing.
For example, if it just checks a request, it can be synchronous. If it needs to fetch data from a database or call an API, it can be asynchronous.

synchronous e.g. : const check AUTH = (req, res, next) => {
    const token = req headers .authorization;

    if (!token) {
        return res.status(401).j son
            message: "Unauthorized"
        });
    }

    next() }

# ✅ How do you perform asynchronous operations inside middleware?
using async/await or Promises, and we call next() after the asynchronous operation completes.


✅ Performance optimization : I optimize Node.js performance mainly by making sure the event loop is not blocked , using asynchronous I/O, streams for large data, caching, database connection pooling and indexes, pagination, and HTTP keep-alive. For CPU-intensive operations, I use Worker Threads, and for utilizing multiple CPU cores I can run multiple Node.js processes. I also profile the application using Node's inspector and monitor memory usage and event-loop latency instead of optimizing blindly


✅ Worker Thread :You use a Worker Thread when you have CPU-heavy JavaScript work that you don't want blocking your main event loop.
	Worker Thread = another thread inside the same Node.js process.
	Separate Process = completely independent Node.js process. eg : bullmq worker



✅ How would you handle multiple asynchronous API calls efficiently?
If the API calls are independent of each other, I would run them in parallel using `Promise.all()` instead of waiting for each call one by one.
For example:
const [users, products, orders] = await Promise. All
get Users(),
get Products(),
get Orders()
]);
```

This improves performance because all three requests run at the same time. If one request depends on another, then I would run them sequentially using `await`.

✅   Promise .all Settled() : When you want whatever succeeded, even if some operations fail: means it will give result of successful one 

✅  Use Promise. All() : When all operations are required: , if one d b call fail the whole promise will send error



1. How does HashMap work internally?

2\\\\\\\\. Hash collision — what happens?

3\\\\\\\\. Process vs Thread?

4\\\\\\\\. Why can DB indexes slow things down?

5\\\\\\\\. REST vs WebSocket?

6\\\\\\\\. First non-repeating character in a string?

7\\\\\\\\. What would you do if your API gets 10x traffic?





✅. Your API suddenly takes 5 seconds instead of 200ms. How would you find the bottleneck?

"First, I would not start optimizing blindly. I would measure where the 5 seconds is being spent."
My debugging approach

1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Check whether the problem is in the application or infrastructure

I would check:



CPU usage

Memory usage

Event-loop lag

Database latency

Network latency

External API latency



For example, if CPU is suddenly 100%, there may be a CPU-intensive operation blocking Node.js.



2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Add/request timing around each major operation



For example:



const start = performance. Now();



const users = await get Users();

console.log("DB:", performance. Now() - start);



Or preferably use proper application tracing/APM in production.



I want to find something like:



Total request:       5000ms



Database:             100ms

External API:        4500ms   ← bottleneck

Business logic:       200ms

Serialization:        100ms



Now I know where to investigate.



3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Check the database : If the DB call is slow, I'd check:

Slow queries

Missing indexes

N+1 queries

Connection-pool exhaustion

Database CPU/load

Locking

Query execution plans



4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Check external services : If my API calls another service:

const result = await payment Service();

In that case, optimizing Node.js itself won't solve the problem.



5\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Check Event Loop blocking: 

For Node.js specifically, I'd investigate whether synchronous or CPU-heavy code is blocking the event loop.

I'd use Node's profiling/inspector tools and event-loop monitoring to identify CPU-heavy functions.



6\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Check recent changes : I'd compare the current deployment with the last known-good version:













2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Your DB connection pool is exhausted. What would you check first?



3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Two users update the same record at the same time. How do you handle it?



4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. A payment request reaches your API twice. How do you prevent duplicate payments?



5\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. A downstream service takes 10 seconds to respond. What would you do?



6\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Your retry mechanism starts increasing traffic instead of reducing failures. Why?



7\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Kafka consumer lag keeps increasing. How would you troubleshoot it?



8\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Your application throws OutOfMemoryError only in production. What would you investigate?



9\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. The DB query takes 50ms, but the API takes 3 seconds. Where could the remaining time go?



10\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. One microservice goes down during an order transaction. How should your system behave?



11\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. A scheduled job executes twice after deployment. How would you prevent duplicate execution?



12\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. You need to introduce a new field in an API without breaking existing clients. How?



13\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Your application handles 1,000 requests/sec today. Tomorrow it needs to handle 10,000. What changes would you consider?



14\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Your logs don't let you trace a request across multiple microservices. How would you improve this?



15\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\. Your service is receiving duplicate requests during a network timeout. How would you make the operation safe?





