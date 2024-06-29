import { stegaClean } from '@sanity/client/stega'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string

export default function (
	page: Sanity.PageBase,
	{
		base = true,
		params,
	}: {
		base?: boolean
		params?: string
	} = {},
) {
	let directory: string | null = null

	if (page._type === 'blog.post') {
		directory = 'blog'
	}

	if (page._type === 'listing.post') {
		directory = 'listings'
	}

	const slug = page.metadata?.slug?.current
	const path = slug === 'index' ? null : slug

	return (
		(base ? BASE_URL + '/' : '/') +
		[directory, path, stegaClean(params)].filter(Boolean).join('/')
	)
}
