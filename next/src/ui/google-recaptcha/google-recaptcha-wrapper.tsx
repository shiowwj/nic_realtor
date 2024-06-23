'use client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import React from 'react'
import { RECAPTCHA_SITE_KEY } from '@/lib/env'

export default function GoogleCaptchaWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	const recaptchaKey: string | undefined = RECAPTCHA_SITE_KEY
	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={recaptchaKey ?? 'NOT DEFINED'}
			scriptProps={{
				async: false,
				defer: false,
				appendTo: 'head',
				nonce: undefined,
			}}
		>
			{children}
		</GoogleReCaptchaProvider>
	)
}
