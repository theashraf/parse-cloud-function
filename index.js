module.exports = class {
	constructor(Parse) {
		this.Parse = Parse
		this.middlewares = []
	}

	setParse(Parse) {
		this.Parse = Parse
		return this
	}

	use(fn) {
		if (Array.isArray(fn)) {
			this.middlewares = this.middlewares.concat(fn)
		} else if (typeof fn === 'function') {
			this.middlewares.push(fn)
		} else {
			throw 'should pass a middleware function or an array of middlewares'
		}
		return this
	}

	define(fnName, fn) {
		this.Parse.Cloud.define(fnName, async req => {
			let reqObject = req
			for (let middleware of this.middlewares) {
				reqObject = await middleware(reqObject)
				if (reqObject !== req) {
					let result = reqObject
					return result
				}
			}
			return await fn(reqObject)
		})
	}
}
