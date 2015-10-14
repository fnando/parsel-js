var crypto = require('crypto');
var expandArgs = require('./expand_args');
var ALGORITHM = 'aes-256-cbc';

function cipher(mode, key, iv) {
  key = crypto.createHash('sha256').update(key).digest();
  return crypto[mode](ALGORITHM, key, iv);
}

module.exports = {
  encrypt: function() {
    var args = expandArgs(arguments);
    var _cipher = cipher('createCipheriv', args.key, args.iv);
    var encrypted = _cipher.update(args.data, 'utf8', 'base64') + _cipher.final('base64');
    return encrypted.replace(/[\r\n]/gm, '');
  },

  decrypt: function() {
    var args = expandArgs(arguments);
    var _cipher = cipher('createDecipheriv', args.key, args.iv);

    try {
      return _cipher.update(args.data, 'base64', 'utf8') + _cipher.final('utf8') || false;
    } catch (error) {
      return false;
    }
  }
};
