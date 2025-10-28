# node.js
Deploy node.js web application
Node.js Application using VS Code
1. Introduction

This document explains how to create and run a simple Node.js application using Visual Studio Code (VS Code).
It’s designed for beginners who want to learn how to build a small Node.js web server on their local computer.

2. Prerequisites

Before starting, make sure you have:

Node.js (LTS version) installed on your system

Visual Studio Code installed

Basic understanding of JavaScript and command line

3. Project Setup Steps

Open VS Code and create a new folder named my-node-app.

Open the terminal inside VS Code (Ctrl + ~).

Initialize a new Node.js project by running:

npm init -y


This will create a file called package.json.

Create a new file named app.js inside your folder.

4. Writing the Application Code

Paste the following code into app.js:

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server running on VS Code!');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('✅ Server running on http://localhost:3000');
});

5. Running the Application

In your VS Code terminal, run:

node app.js


You’ll see a message:

✅ Server running on http://localhost:3000


Open your browser and go to:
👉 http://localhost:3000

You’ll see the message:
Hello from Node.js server running on VS Code!

6. Using Nodemon (Optional)

If you want your app to restart automatically whenever you change the code:

Install nodemon globally:

npm install -g nodemon


Run your app using:

nodemon app.js


Now every time you save your file, the server will restart automatically.

7. Conclusion

You have successfully built and executed a basic Node.js web server using VS Code.
This simple project helps you understand how Node.js handles HTTP requests and responses.
From here, you can expand your project by:

Adding routes and APIs

Connecting to a database

Using frameworks like Express.js
