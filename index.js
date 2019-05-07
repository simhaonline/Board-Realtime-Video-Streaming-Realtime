const express = require('express');
const app = express();
const server = require('./server/server')
const { login } = require('./functions/database')
const path = require('path');
const http = require('http').Server(app)
const io = require("socket.io")(http);
const socket = require('./functions/socket')

app.use(express.static('public'));
server.run(app, path)
socket.socket(io)
http.listen(process.env.port || 80, function () {
    console.log('Server listening on port 80!');
});