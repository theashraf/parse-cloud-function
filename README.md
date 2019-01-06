# Parse Cloud Function

[![npm](https://img.shields.io/npm/v/parse-cloud-function.svg)](https://www.npmjs.com/package/parse-cloud-function)
[![license](https://img.shields.io/github/license/theashraf/parse-cloud-function.svg)](https://github.com/theashraf/parse-cloud-function/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dw/parse-cloud-function.svg)](https://www.npmjs.com/package/parse-cloud-function)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](#badge)

> Create scalable parse cloud functions

Parse Cloud Function helps in adding middlewares to cloud functions for more clean,reusable and scalable cloud code

## Installation

```sh
npm install --save parse-cloud-function
```

## Example

A working example can be found [here](example)

### Supported versions

- parse-server >= 3.0.0
- node >= 6.4

### Basic Usage

```js
//parse cloud code file
const CloudFunction = require('parse-cloud-function')
const authMiddleware = async req => {
	if (!req.user) throw 'unauthorized'
	return req // passes the req to the next middleware function
}
const anotherMiddleware = async req => {
	req.data = 'some data'
	return req
}
new CloudFunction(Parse)
	.use([authMiddleware, anotherMiddleware])
	.define('myFunction', async req => {
		console.log(req.data) // 'some data'
		return 'success'
	})
```

## Development setup

```sh
npm install && npm run dev
```

## Contribution

1. Fork the project
2. Create your feature branch (`git checkout -b feature/fooBar`), or hotfix branch (`git checkout -b hotfix/fooBar`)
3. Commit your changes (`npm run cz`)
4. Push to the feature branch (`git push origin feature/fooBar`), or hotfix branch (`git push origin hotfix/fooBar`)
5. Create a new Pull Request
