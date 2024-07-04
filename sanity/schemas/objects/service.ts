import { defineType } from 'sanity'

export default defineType({
	name: 'service',
	title: 'Service',
	type: 'object',
	fields: [
		{
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required().max(60).warning(),
		},
		{
			name: 'description',
			type: 'text',
			rows: 3,
			validation: (Rule) => Rule.required().max(160).warning(),
		},
		{
			name: 'image',
			description: 'Image for the service',
			type: 'image',
		},
	],
})
