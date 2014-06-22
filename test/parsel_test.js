var assert = require('assert')
  , parsel = require('../lib/parsel')
  , parselJSON = require('../lib/parsel/json')
  , key = 'my secret key'
;

assert.notEqual(parsel.encrypt(key, 'hello'), 'hello', 'it encrypts data');

var encrypted = parsel.encrypt(key, 'hello');
assert.equal(parsel.decrypt(key, encrypted), 'hello', 'it decrypts data');

assert.equal(parsel.decrypt('abc', '123'), false, 'it returns false when decryption fails');

//==========================================================

var encrypted = parselJSON.encrypt(key, ['hello']);
var data = parselJSON.decrypt(key, encrypted);
assert.equal(JSON.stringify(data), '["hello"]', 'it decrypts data');

assert.equal(parselJSON.decrypt('abc', '123'), false, 'it returns false when decryption fails');
