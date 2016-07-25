"use strict";

var Promise = require("bluebird");
var dynogels = require("dynogels");

Promise.promisifyAll(require('dynogels/lib/table').prototype);
Promise.promisifyAll(require('dynogels/lib/item').prototype);
Promise.promisifyAll(require('dynogels/lib/query').prototype);
Promise.promisifyAll(require('dynogels/lib/scan').prototype);
Promise.promisifyAll(require('dynogels/lib/parallelScan').prototype);

var dynogels_model = dynogels.model;
dynogels.model = function(name, model){
  if (model) { Promise.promisifyAll(model); }
  return dynogels_model.apply(dynogels, arguments);
};

Promise.promisifyAll(dynogels);

module.exports = dynogels;
