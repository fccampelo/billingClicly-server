const express = require('express');
const bodyParser = require('body-parser');
const queryParse = require('express-query-int')

const cors = require('cors');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors());
server.use(queryParse());

server.listen(8080, function() {
  console.log('rodando na porta 8080')
});

module.exports = server
