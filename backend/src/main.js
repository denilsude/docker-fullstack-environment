const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Backend OK!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});