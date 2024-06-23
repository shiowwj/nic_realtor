'use client'
import { PortableText } from 'next-sanity'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { RECAPTCHA_SITE_KEY } from '@/lib/env'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const ContactForm = ({
	title,
	content,
	successMessage,
}: Partial<Sanity.ContactForm>) => {
	const { executeRecaptcha } = useGoogleReCaptcha()
	const [state, handleSubmit] = useForm('xanwwjed', {
		data: {
			'g-recaptcha-response': executeRecaptcha,
		},
	})

	return (
		<section className="section">
			<div className="section grid max-w-screen-lg items-center gap-12 gap-y-6 rounded bg-accent/5 md:grid-cols-[1fr,1fr]">
				<div className="flex flex-col gap-y-8">
					<h2 className="text-ink">{title}</h2>
					<div className="richtext">
						<PortableText value={content} />
					</div>
				</div>

				{state.succeeded ? (
					<div className="flex flex-row justify-center gap-y-8 rounded-lg border border-altAccent bg-white">
						<div className="richtext py-16">
							<PortableText value={successMessage} />
						</div>
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-y-4">
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Name"
								className="form-input"
							/>
							<ValidationError
								prefix="Name"
								field="name"
								errors={state.errors}
							/>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Email"
								className="form-input"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<input
								id="phonenumber"
								type="text"
								name="phonenumber"
								placeholder="Phone Number"
								className="form-input"
							/>
							<ValidationError
								prefix="Phone Number"
								field="phonenumber"
								errors={state.errors}
							/>
						</div>
						<button
							type="submit"
							disabled={state.submitting}
							className="action _btn mt-4"
						>
							Send
						</button>
					</form>
				)}
			</div>
		</section>
	)
}

export default ContactForm
