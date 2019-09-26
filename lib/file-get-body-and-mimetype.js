const readFile = require('fs').promises.readFile
const mime = require('mime')

module.exports = filePath => {
	return readFile(filePath)
		.then(body => ({
			body,
			mimeType: mime.getType(filePath) || 'application/octet-stream'
		}))
}
