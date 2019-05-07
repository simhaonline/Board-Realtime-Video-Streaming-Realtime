const express = require('express');
const app = express();
const server = require('./server/server')
const { login } = require('./class/database')


server.run(app, express)
login("jei", "123")