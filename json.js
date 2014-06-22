var parsel = require('parsel');

module.exports = {
    encrypt: function(key, data) {
      return parsel.encrypt(key, JSON.stringify(data));
    }

  , decrypt: function(key, data) {
      try {
        return JSON.parse(parsel.decrypt(key, data));
      } catch (error) {
        return false;
      }
    }
};
