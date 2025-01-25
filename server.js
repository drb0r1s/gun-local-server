const Gun = require('gun');

const server = require('http').createServer();
const gun = Gun({ web: server });

server.listen(8765, () => console.log('Gun server running on http://localhost:8765'));