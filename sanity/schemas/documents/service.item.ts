import { defineField, defineType } from 'sanity'
import { MdOutlineRoomService } from 'react-icons/md'

export default defineType({
	name: 'service.item',
	title: 'Service Item',
	icon: MdOutlineRoomService,
	type: 'document',
	fields: [
		defineField({
			name: 'serviceItem',
			type: 'service',
		}),
	],
	preview: {
		select: {
			title: 'serviceItem.title',
		},
		prepare: ({ title }) => ({
			title: title,
			subtitle: 'Service Item',
		}),
	},
})
