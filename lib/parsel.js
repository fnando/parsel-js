var crypto = require("crypto")
  , ALGORITHM = "aes-256-cbc"
;

function cipher(mode, key, data) {
  key = crypto.createHash("sha256").update(key).digest();
  return crypto[mode](ALGORITHM, key, "f89209ffcdd1a225");
}

module.exports = {
    encrypt: function(key, data) {
      var _cipher = cipher("createCipheriv", key, data);
      var encrypted = _cipher.update(data, "utf8", "base64") + _cipher.final("base64");
      return encrypted.replace(/[\r\n]/gm, "");
    }

  , decrypt: function(key, data) {
      var _cipher = cipher("createDecipheriv", key, data);
      try {
        return _cipher.update(data, "base64", "utf8") + _cipher.final("utf8") || false;
      } catch (error) {
        return false;
      }
    }
};
