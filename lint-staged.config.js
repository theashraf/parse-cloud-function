module.exports = {
	linters: {
		'**/*.+(md|json)': ['prettier --write', 'git add'],
		'**/*.+(js)': ['prettier --write', 'eslint', 'git add'],
	},
}
