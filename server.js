const { ApolloServer, gql } = require('apollo-server');
const fs = require('file-system');
const resolvers = require('./src/typeDef/resolver');
const typeDefs = gql(fs.readFileSync('./src/typeDef/schema.graphql', {encoding: 'utf-8' }));
const server = new ApolloServer({ typeDefs: typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});