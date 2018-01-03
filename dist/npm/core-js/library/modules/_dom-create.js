'use strict';
(function(module,require){var exports=module.exports={};
var global=window=require('../../../labrador/global.js');
var isObject = require('./_is-object.js');
var document = require('./_global.js').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

})(module,require);