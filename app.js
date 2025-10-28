const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server running on VS Code! - \n Now I am implement webhook for complete cicd');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('✅ Server running on http://localhost:3000');
});
