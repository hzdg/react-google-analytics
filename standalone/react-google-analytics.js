!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.ReactGoogleAnalytics=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var React, ga, script, scriptIsAdded, _name,
  __slice = [].slice;

React = (window.React);

script = React.DOM.script;

if (typeof window !== "undefined" && window !== null) {
  if (window.GoogleAnalyticsObject == null) {
    window.GoogleAnalyticsObject = 'ga';
  }
}

if (typeof window !== "undefined" && window !== null) {
  if (window.ga == null) {
    window.ga = ga;
  }
}

ga = function() {
  var args;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return typeof window !== "undefined" && window !== null ? window[window.GoogleAnalyticsObject].apply(window, args) : void 0;
};

if (typeof window !== "undefined" && window !== null) {
  if (window[_name = window.GoogleAnalyticsObject] == null) {
    window[_name] = function() {
      var api, args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      api = window[window.GoogleAnalyticsObject];
      (api.q || (api.q = [])).push(args);
    };
  }
}

scriptIsAdded = false;

ga.Initializer = React.createClass({
  displayName: 'GAInitializer',
  componentDidMount: function() {
    window[window.GoogleAnalyticsObject].l = new Date().getTime();
    if (!scriptIsAdded) {
      return this.addScript();
    }
  },
  addScript: function() {
    var el, s;
    scriptIsAdded = true;
    el = document.createElement('script');
    el.type = 'text/javascript';
    el.async = true;
    el.src = '//www.google-analytics.com/analytics.js';
    s = document.getElementsByTagName('script')[0];
    return s.parentNode.insertBefore(el, s);
  },
  render: function() {
    return script(null);
  }
});

module.exports = ga;

},{}]},{},[1])
(1)
});