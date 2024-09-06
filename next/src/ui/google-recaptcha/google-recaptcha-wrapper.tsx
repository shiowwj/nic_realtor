'use client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import React from 'react'
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
			// scriptProps={{
			// 	async: true,
			// 	defer: true,
			// 	appendTo: 'body',
			// }}
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
