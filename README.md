# parsel

Encrypt and decrypt data with a given key.

This library was created to allow an easy data
exchange between Ruby and Node.js.

Check it out the Ruby counter-part: <http://github.com/fnando/parsel-rb>.

## Installation

    npm install parsel

## Usage

```js
var parsel = require('parsel');

var secret_key = 'mysupersecretkeythatnobodyknowsabout'
var encrypted = parsel.encrypt(secret_key, 'hello from ruby!');
var decrypted = parsel.decrypt(secret_key, encrypted);
```

You also use JSON as your serializer.

```js
var parsel = require('parsel/json');
var data = {user_id: 1234};
var secret_key = 'mysupersecretkeythatnobodyknowsabout';

var encrypted = parsel.encrypt(secret_key, data);
var decrypted = parsel.decrypt(secret_key, encrypted);
//=> {user_id: 1234}
```

### Using a custom cipher IV

You can provide a custom 16-chars IV.

```js
var parsel = require('parsel');
var secret_key = 'mysupersecretkeythatnobodyknowsabout';
var iv = '41318de76c0f5763';

var encrypted = parsel.encrypt(secret_key, iv, 'hello');
var decrypted = parsel.decrypt(secret_key, iv, encrypted);
```

You may set the custom cipher globally:

```js
var parsel = require('parsel');
var config = require('parsel/config');

config.DEFAULT_CIPHER = '41318de76c0f5763';
```

**REMEMBER:** The cipher has to be 16-chars long.

## Maintainer

- Nando Vieira (<http://nandovieira.com.br>)

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
