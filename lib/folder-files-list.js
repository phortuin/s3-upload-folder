const globby = require('globby')

module.exports = folder => {
	return globby(`${folder}/**/*`)
}
