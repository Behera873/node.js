# node.js
Deploy node.js web application
Simple Node.js App in VS Code

1. Setup

Install Node.js (LTS) and VS Code

Create a folder → open in VS Code

              Run:
              
              npm init -y


2. Create index.js

                const http = require('http');
                
                const server = http.createServer((req, res) => {
                  res.writeHead(200, { 'Content-Type': 'text/plain' });
                  res.end('Hello from Node.js server!');
                });
                
                server.listen(3000, '0.0.0.0', () => {
                  console.log('Server running on http://localhost:3000');
                });


3. Run the app

                node index.js


          Visit http://localhost:3000
 in your browser.

4. Optional (Auto Restart)

          npm install -g nodemon
          nodemon app.js


