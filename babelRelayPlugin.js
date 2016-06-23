var babelRelayPlugin   = require('babel-relay-plugin');
var schema = require('./schema');

console.log(schema);

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});