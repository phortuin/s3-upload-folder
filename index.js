const validateAWSEnvironment = require('./lib/aws-validate-environment')
const access = require('fs').promises.access
const emptyBucket = require('./lib/s3-empty-bucket')
const listFolderFiles = require('./lib/folder-files-list')
const convertFileToS3Object = require('./lib/file-convert-to-s3-object')
const uploadS3Objects = require('./lib/s3-upload-objects')

module.exports = async (folder, bucket) => {
	validateAWSEnvironment()
	await access(folder)
	await emptyBucket(bucket)
	return listFolderFiles(folder)
		.then(files => files.map(convertFileToS3Object(folder, bucket)))
		.then(uploadS3Objects)
}
