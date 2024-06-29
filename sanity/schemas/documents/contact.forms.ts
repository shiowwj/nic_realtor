import { RiContactsBook3Line } from 'react-icons/ri'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'contact.form',
	title: 'Contact Form',
	icon: RiContactsBook3Line,
	type: 'document',
	fields: [
		defineField({
			name: 'contactForm',
			type: 'contact-form',
		}),
	],
	preview: {
		select: {
			title: 'contactForm.title',
		},
		prepare: ({ title }) => ({
			title: title,
			subtitle: 'Contact Form',
		}),
	},
})
