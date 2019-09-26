const aws = require('aws-sdk')
const s3 = new aws.S3()

/**
 * Empty S3 bucket by deleting all keys one by one
 * Note: listObjectsV2 returns max 1000 objects, no pagination implemented yet
 *
 * @param {String} S3 Bucket name
 * @return {Promise}
 */
module.exports = async bucket => {
	const objects = await s3.listObjectsV2({ Bucket: bucket }).promise()
	return Promise.all(
		objects.Contents.map(
			deleteS3Object
		)
	)

	function deleteS3Object(object) {
		return s3.deleteObject({
			Bucket: bucket,
			Key: object.Key
		}).promise()
	}
}
