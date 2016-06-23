var babelRelayPlugin   = require('babel-relay-plugin');
var introspectionQuery = require('graphql/utilities').introspectionQuery;
var request            = require('sync-request');

var fs = require("fs");
 


// var graphqlHubUrl = 'http://www.GraphQLHub.com/graphql';
var graphqlHubUrl = 'http://localhost:4000/graphql/';
var response = request('GET', graphqlHubUrl, {
  qs: {
    query: introspectionQuery
  }
});

var schema = response.body.toString('utf-8');
console.dir(schema);

var writeStream = fs.createWriteStream("schema.json");
writeStream.write(schema);
writeStream.end();

// module.exports = babelRelayPlugin(schema.data, {
//   abortOnError: true,
// });