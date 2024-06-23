import { defineField, defineType } from 'sanity'
import { RiContactsBook3Line } from 'react-icons/ri'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'contact-form',
	title: 'Contact Form',
	icon: RiContactsBook3Line,
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'successMessage',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
	preview: {
		select: {
			content: 'content',
			title: 'title',
		},
		prepare: ({ title }) => ({
			title: title,
			// subtitle: content,
		}),
	},
})
