'use client'
import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { RECAPTCHA_SITE_KEY } from '@/lib/env'

export default function GoogleCaptchaWrapper({
	children,
}: {
	children: React.ReactNode
}) {
	const recaptchaKey: string = RECAPTCHA_SITE_KEY as string

	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={recaptchaKey}
			scriptProps={{
				async: false,
				defer: false,
				appendTo: 'head',
			}}
			container={{
				// element: 'recaptcha-container',
				parameters: {
					badge: 'bottomleft',
				},
			}}
		>
			{children}
		</GoogleReCaptchaProvider>
	)
}
