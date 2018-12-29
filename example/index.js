const express = require('express')
const { ParseServer } = require('parse-server')
const app = express()

var api = new ParseServer({
	databaseURI: 'mongodb://localhost:27017/dev',
	cloud: __dirname + '/cloud.js',
	appId: 'myAppId',
	masterKey: 'myMasterKey',
	serverURL: 'http://localhost:1337/parse',
})

app.use('/parse', api)

app.listen(1337, function() {
	console.log('parse-cloud-function-example running on port 1337.')
})
