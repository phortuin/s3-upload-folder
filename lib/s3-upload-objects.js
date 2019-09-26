const aws = require('aws-sdk')
const s3 = new aws.S3()

module.exports = objects => {
	return Promise.all(objects.map(async object => s3.putObject(await object).promise()))
}
