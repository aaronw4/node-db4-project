const express = require('express');

const recipeRouter = require('./recipes.recipeRouter');

const server = express();

server.use(express.json());
server.use('/recipes', recipeRouter);

module.exports = server;