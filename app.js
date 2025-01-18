const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = 5751;

app.use(express.static(__dirname + '/dist/cds-front'));

app.get('*', (req, res) => res.sendFile(path.resolve('dist/cds-front/index.html')));
const server = http.createServer(app);

server.listen(port, () => console.log(`App running  on: http://localhost:${port}`));



