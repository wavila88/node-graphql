const express = require('express');
const app = express();
const { buildSchema } = require('graphql');
const express_graphql = require('express-graphql');

app.listen('8080',() => console.log('server on port 8080'));