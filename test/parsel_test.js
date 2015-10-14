var assert = require('assert');
var parsel = require('../parsel');
var parselJSON = require('../json');
var key = 'my secret key';
var iv = '41318de76c0f5763';

//==========================================================
// Uses default method signature
//==========================================================

assert.notEqual(parsel.encrypt(key, 'hello'), 'hello', 'it encrypts data');

var encrypted = parsel.encrypt(key, 'hello');
assert.equal(parsel.decrypt(key, encrypted), 'hello', 'it decrypts data');

assert.equal(parsel.decrypt('abc', '123'), false, 'it returns false when decryption fails');

//==========================================================
// Uses custom IV
//==========================================================

var encrypted = parsel.encrypt(key, iv, 'hello');

assert.equal(parsel.decrypt(key, iv, encrypted), 'hello', 'it decrypts data');
assert.equal(parsel.decrypt('abc', encrypted), false, 'it returns false when decryption fails');

//==========================================================
// Sets up global IV
// =========================================================
var config = require('../config');
config.DEFAULT_IV = iv;
var encrypted = parsel.encrypt(key, 'hello');

assert.equal(parsel.decrypt(key, iv, encrypted), 'hello', 'it decrypts data');

//==========================================================
// Uses JSON
//==========================================================
var encrypted = parselJSON.encrypt(key, ['hello']);
var data = parselJSON.decrypt(key, encrypted);
assert.equal(JSON.stringify(data), '["hello"]', 'it decrypts data');

assert.equal(parselJSON.decrypt('abc', '123'), false, 'it returns false when decryption fails');

//==========================================================
// JSON uses custom IV
//==========================================================

var encrypted = parselJSON.encrypt(key, iv, 'hello');

assert.equal(parselJSON.decrypt(key, iv, encrypted), 'hello', 'it decrypts data');
assert.equal(parselJSON.decrypt('abc', encrypted), false, 'it returns false when decryption fails');
