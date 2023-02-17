# http-server
# Week 1
## Topics
- basics of the http module in node
- streams (very basics)
- routing and why libraries are used in production instead of just the http module
- briefly touching on blocking and non-blocking operations in node
- execution stack in a node runtime
## Challenge
- Popular backend Node.js frameworks/libraries are built on top of the core Node.js module called http.  Using just this core module, build a web server following this tutorial: https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
- Identify older js syntax and see if you can swap out it for more modern syntax. 
- Try swapping out the module require statements for import syntax - does it break?
- Be sure to add the endpoints that do the following, all on the same server:
- GET /json - send a json payload
- POST /json - receive data either through the body or in the request search params. send that data back as json in the response
- GET /blocking - add an endpoint that takes a really long time to do something before ending the stream (res.end). You should probably use a really long running loop. Make request to this endpoint (using Postman, a browser, or curl). Then immediately make a request to the GET /json endpoint (eg in another browser tab). You should notice that this request takes a long time to finish. This is because it won't execute until the long loop is complete.
- GET /blocking-file - add an endpoint that uses the file system (fs) method called readFileSync. Read a file, like json or txt, and send the result back in the response
- GET /non-blocking-file - do the same as the above, but this time use the fs method called readFile. Notice the difference between the two methods. 
- Bonus: take the readFile method and instead of using a callback, use a Promise to wait for the file to be read. Waiting for Promise to resolve is still an asynchronous task
- 
# Week 2
## Topics
- More on the concept of blocking and non-blocking operations in node
- single threaded vs multi-threaded languages
- execution stack in a node runtime
- node is not just javascript - the code executed by browser isn't either
- what node is good for and it what it isn’t good for
- TypeScript introduction
- types, compiling, setting up a dev environment
## Challenge
- Change the code for web server code in Week 1 using Express.js. We will convert this to TypeScript on the call and implement a few libraries for a better dev experience.
- Have a watch of this video - it’s one the best explanations of what the javascript execution stack is, what the event loop is, etc. It is browser focused, but remember that Node.js was created by taking the V8 engine out of the Chrome browser - so the principles are very similar. https://youtu.be/8zKuNo4ay8E
- Look at the following code block. Try to understand it, execute it, play around with it, and think about why the order of the printed logs is what it is
