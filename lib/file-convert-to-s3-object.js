const getFileBodyAndMimetype = require('./file-get-body-and-mimetype')

module.exports = (folder, bucket) => {
	return async file => {
		try {
			const { body, mimeType } = await getFileBodyAndMimetype(file)
			const filename = file.replace(`${folder}/`, '')
			return {
				Bucket: bucket,
				Key: filename,
				ContentType: mimeType,
				Body: body
			}
		} catch(error) {
			throw new Error(`[Error] could not convert file ${file} into S3 object\n=> ${error.message}`)
		}
	}
}
