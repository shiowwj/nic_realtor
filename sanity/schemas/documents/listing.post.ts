import { defineField, defineType } from 'sanity'
import { BsHouse } from 'react-icons/bs'
import { TbRulerMeasure } from 'react-icons/tb'
import {
	MRT_STATIONS,
	POSTAL_DISTRICTS,
	PROPERTY_TYPE,
	TENURE_TYPE,
} from '../../src/constants/property'

export default defineType({
	name: 'listing.post',
	title: 'Listing post',
	icon: BsHouse,
	type: 'document',
	groups: [
		{
			name: 'propertyDetails',
			title: 'Property Details',
			default: true,
		},
		{
			name: 'nearestMrt',
			title: 'Nearest MRT',
		},
		{
			name: 'propertyWriteUp',
			title: 'Property Write Up',
		},
		{
			name: 'photosAndVideos',
			title: 'Photos and Videos',
		},
		{
			name: 'seo',
			title: 'SEO',
		},
		{
			name: 'contact',
			title: 'Contact Form',
		},
	],
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			group: 'propertyDetails',
		}),
		defineField({
			name: 'listingPrice',
			type: 'number',
			group: 'propertyDetails',
		}),
		defineField({
			name: 'address',
			type: 'string',
			group: 'propertyDetails',
		}),
		defineField({
			name: 'propertyDetails',
			type: 'object',
			options: {
				columns: 2,
			},
			group: 'propertyDetails',
			groups: [
				{ name: 'Key Stats', default: true },
				{ name: 'Size' },
				{ title: 'Other Details', name: 'otherDetails' },
			],
			fields: [
				defineField({
					name: 'noOfBedrooms',
					type: 'number',
					group: 'Key Stats',
					// description: 'Leave empty to not display Number of Bedrooms',
				}),
				defineField({
					name: 'noOfBathooms',
					type: 'number',
					group: 'Key Stats',

					// description: 'Leave empty to not display Number of Bathrooms',
				}),
				defineField({
					name: 'noOfHelperRooms',
					type: 'string',
					group: 'Key Stats',

					description: 'Leave empty to not display Number of Helper Rooms',
				}),
				defineField({
					name: 'noOfStudyRooms',
					type: 'string',
					group: 'Key Stats',

					description: 'Leave empty to not display Number of Study Rooms',
				}),
				defineField({
					name: 'district',
					type: 'number',
					group: 'Key Stats',
					options: {
						list: POSTAL_DISTRICTS,
					},
					description: 'Select the district',
				}),
				defineField({
					name: 'tenure',
					type: 'string',
					group: 'Key Stats',
					options: {
						list: TENURE_TYPE,
					},
					description: 'Select the type of tenure for property',
				}),

				defineField({
					name: 'propertyType',
					type: 'string',
					group: 'Size',
					options: {
						list: PROPERTY_TYPE,
					},
					description: 'Select the type of property type',
				}),
				defineField({
					name: 'totalSqFt',
					title: 'Total SqFt',
					type: 'number',
					group: 'Size',
					hidden: ({ parent }) => parent?.propertyType === 'landed',
				}),
				defineField({
					name: 'builtUpSize',
					title: 'Built-Up Size',
					group: 'Size',
					type: 'number',
					hidden: ({ parent }) => parent?.propertyType !== 'landed',
				}),
				defineField({
					name: 'landSize',
					title: 'Land Size',
					group: 'Size',
					type: 'number',
					hidden: ({ parent }) => parent?.propertyType !== 'landed',
				}),
				defineField({
					name: 'yearOfTOP',
					group: 'otherDetails',
					type: 'string',
					description: 'Leave empty to not display Year Of TOP',
				}),
				defineField({
					name: 'listedDate',
					group: 'otherDetails',
					type: 'date',
					description: 'Leave empty to not display Listed Date',
				}),
			],
		}),
		defineField({
			name: 'nearestMRT',
			type: 'array',
			of: [{ type: 'string' }],
			group: 'nearestMrt',
			options: {
				list: MRT_STATIONS,
			},
			description: 'Select MRT stations nearest to property',
		}),
		defineField({
			name: 'propertyWriteUpAndFeatures',
			type: 'object',
			group: 'propertyWriteUp',
			fields: [
				defineField({
					name: 'content',
					type: 'array',
					of: [
						{
							type: 'block',
							styles: [{ title: 'Normal', value: 'normal' }], // Allow only 'normal' style
							lists: [], // Disallow all lists
							marks: {
								// Disallow any kind of marks like bold, italic, etc.
								decorators: [],
								annotations: [],
							},
						},
					],
				}),
				defineField({
					name: 'additionalFeatures',
					title: 'Additional Features',
					type: 'array',
					of: [{ type: 'string' }],
				}),
			],
		}),
		defineField({
			name: 'featureVideo',
			type: 'url',
			group: 'photosAndVideos',
			description:
				'URL to marketing video (youtube only), leave empty if not available',
		}),
		defineField({
			name: 'photos',
			type: 'array',
			of: [{ type: 'image' }],
			group: 'photosAndVideos',
			description:
				'Upload marketing images, first photo will be the cover image',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'seo',
		}),
		defineField({
			name: 'propGuruListingUrl',
			type: 'url',
			group: 'propertyWriteUp',
			description: 'URL to Property Guru listing, leave empty if not available',
		}),
		// TODO: ADD A MODULES FIELD FOR ADDING THINGS LIKE
		// FACLITIES, FLOOR PLANS, ETC
		// defineField({
		// 	name: 'modules',
		// 	type: 'array',
		// 	of: [
		// 		{ type: 'callout' },
		// 	],
		// }),

		defineField({
			name: 'contactForm',
			title: 'Contact Form',
			group: 'contact',
			type: 'reference',
			to: { type: 'contact.form' },
		}),
	],
	preview: {
		select: {
			name: 'name',
		},
		prepare: ({ name }) => ({
			title: name,
		}),
	},
})
