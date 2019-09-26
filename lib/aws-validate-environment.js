/**
 * Validates 3 mandatory AWS configuration variables. Should all be in the
 * .env file of the implementing package or project
 *
 * AWS_SECRET_ACCESS_KEY  40 characters, base64-ish
 * AWS_ACCESS_KEY_ID      20 characters, uppercase alphanumeric
 * AWS_DEFAULT_REGION     lowercase alphanumeric with hyphens
 */
module.exports = () => {
	const validSecretAccessKey = key => key && /^[a-zA-Z0-9+/]{40}$/.test(key)
	const validAccessKeyId = id => id && /^[A-Z0-9]{20}$/.test(id)
	const validDefaultRegion = region => region && /^[a-z0-9-]+$/.test(region)

	const errorMessage = variable => `[Error] AWS environment variable ${variable} was not found or has invalid formatting`

	if (!validSecretAccessKey(process.env.AWS_SECRET_ACCESS_KEY)) {
		throw new Error(errorMessage`AWS_SECRET_ACCESS_KEY`)
	}
	if (!validAccessKeyId(process.env.AWS_ACCESS_KEY_ID)) {
		throw new Error(errorMessage`AWS_ACCESS_KEY_ID`)
	}
	if (!validDefaultRegion(process.env.AWS_DEFAULT_REGION)) {
		throw new Error(errorMessage`AWS_DEFAULT_REGION`)
	}
}
