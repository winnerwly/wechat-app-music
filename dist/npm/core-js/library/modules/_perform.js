'use strict';
(function(module,require){var exports=module.exports={};
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

})(module,require);