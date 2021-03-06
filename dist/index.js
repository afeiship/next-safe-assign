/*!
 * name: @jswork/next-safe-assign
 * description: Safe assign for next.
 * homepage: https://github.com/afeiship/next-safe-assign
 * version: 1.0.0
 * date: 2020-11-22 15:02:01
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FUNC = 'function';
  var OBJECT = 'object';
  var IGNORE_VALUE = function (key, value) {
    return value == null || value === '';
  };

  nx.safeAssign = function () {
    var args = nx.slice(arguments);
    var length = args.length;
    var len_ = length - 1;
    var last = args[len_];
    var target = args[0] || {};
    var hasIgnore = typeof last === FUNC;
    var ignore = hasIgnore ? last : IGNORE_VALUE;
    var size = hasIgnore ? len_ : length;
    for (var i = 1; i < size; i++) {
      var value = args[i];
      if (value != null && typeof value !== OBJECT) {
        throw new Error('source can not be primitives');
      }
      nx.forIn(value, function (key, value) {
        if (!ignore(key, value)) {
          target[key] = value;
        }
      });
    }
    return target;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.safeAssign;
  }
})();
