export default process.env.NODE_ENV === 'development' ||
	process.env.ENABLE_PREVIEW === 'true'

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
