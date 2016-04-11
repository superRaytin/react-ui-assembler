window['css-animation'] = require('css-animation');
window['react-router'] = require('react-router');
window['rc-form'] = require('rc-form');
window['object-assign'] = require('object-assign');
window['classnames'] = require('classnames');
window['reqwest'] = require('reqwest');

var antd = require('antd');
var React = require('react');
var ReactDOM = require('react-dom');
var semver = require('semver');
window.antd = antd;
window.React = React;
window.react = React;
window.ReactDOM = ReactDOM;

window.require = function (path) {
  var result = window;
  var namespaces = path.split('/');
  namespaces.forEach(function (key, i) {
    if (i === 2) {
      key = camelize(key);
    }
    if (key !== 'lib') {
      if (result[key]) {
        result = result[key];
      } else {
        throw 'There should not have modules here: ' + path;
      }
    }
  });
  return result;
};
