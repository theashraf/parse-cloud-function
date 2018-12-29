/*global Parse*/
/*eslint-disable no-unused-vars*/
/*eslint-disable no-console*/

const CloudFunction = require('..')

//mocking async operation
const fetch = function(timeout) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, timeout)
	})
}

//middleware to return repsonse
new CloudFunction(Parse)
	.use([
		async req => {
			console.log('running first middleware')
			await fetch(1000)
			return req
		},
		async req => {
			console.log('running second middleware')
			await fetch(500)
			return { message: 'successfully return response' }
		},
	])
	.define('func1', async req => {
		return 'success'
	})

//middleware to throw error
new CloudFunction(Parse)
	.use([
		async req => {
			console.log('running first middleware')
			await fetch(1000)
			return req
		},
		async req => {
			console.log('running second middleware')
			await fetch(500)
			return req
		},
	])
	.use(async req => {
		console.log('running third middleware')
		await fetch(100)
		if (!req.user) throw 'unauthorized'
		return req
	})
	.define('func2', async req => {
		return 'success'
	})

//middleware to attach some data to req object
new CloudFunction(Parse)
	.use([
		async req => {
			console.log('running first middleware')
			await fetch(1000)
			req.data = 'some data'
			return req
		},
		async req => {
			console.log('running second middleware')
			await fetch(500)
			return req
		},
	])
	.define('func3', async req => {
		return req.data
	})
