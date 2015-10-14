var config = require('./config');
var slice = Array.prototype.slice;

module.exports = function expandArgs(args) {
  var key, iv, data;

  args = slice.apply(args);

  if (args.length === 2) {
    key = args[0];
    iv  = config.DEFAULT_IV;
    data = args[1];
  } else {
    key = args[0];
    iv = args[1];
    data = args[2];
  }

  return {key: key, iv: iv, data: data};
};
