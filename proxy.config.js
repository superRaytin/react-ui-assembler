const assign = require('object-assign');
const proto = require('./mocks/proto');
const widget = require('./mocks/widget');

module.exports = assign({}, proto, widget);
