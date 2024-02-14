// index.js

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
require('dotenv').config();

const typeDefs = require('./src/schema');
const resolvers = require('./src/resolver');

const app = express();

// Create executable schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Middleware for GraphQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL for testing
}));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
