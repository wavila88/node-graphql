var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
var schema = buildSchema(`
type Query {
  me: [User]
  titles: [Profession],
 
}
 
type User {
  id: ID
  name: String
}

type Profession {
  title: String
  yearsExperience: Int
  active: Boolean
}
  
`);
 
var root = { 
  me: GetUser([{id: 1, name: 'William'},{ id : 2, name : 'Jessika'}]),
  titles: GetTitle([{title: 'Ingeniero', yearsExperience : 5, active: true},{title: 'Analista Bilingue', yearsExperience : 6, active: false}]),

};
 
function GetUser(user) {
  return user;
}

function GetTitle(profession){
  return profession;
}
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));