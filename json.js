var parsel = require('.');
var expandArgs = require('./expand_args');

module.exports = {
  encrypt: function() {
    var args = expandArgs(arguments);
    return parsel.encrypt(args.key, args.iv, JSON.stringify(args.data));
  },

  decrypt: function() {
    var args = expandArgs(arguments);

    try {
      return JSON.parse(parsel.decrypt(args.key, args.iv, args.data));
    } catch (error) {
      return false;
    }
  }
};
