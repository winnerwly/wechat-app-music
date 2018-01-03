'use strict';
(function(module,require){var exports=module.exports={};
var classof = require('./_classof.js');
var ITERATOR = require('./_wks.js')('iterator');
var Iterators = require('./_iterators.js');
module.exports = require('./_core.js').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

})(module,require);