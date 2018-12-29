# Parse Cloud Function

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
- node >= 8

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

## Api

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
