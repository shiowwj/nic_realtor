import { getSite } from '@/lib/sanity/queries'
import processUrl, { BASE_URL } from './processUrl'
import type { Metadata } from 'next'

export default async function processMetadata(
	page: Sanity.Page | Sanity.BlogPost | Sanity.ListingPost,
): Promise<Metadata> {
	const site = await getSite()

	const url = processUrl(page)
	const { title, description, ogimage, noIndex } = page.metadata
	// console.log('url', url)
	return {
		metadataBase: new URL(BASE_URL),
		title,
		description,
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			images: ogimage || site.ogimage,
		},
		robots: {
			index: !noIndex,
		},
		alternates: {
			canonical: url,
			types: {
				'application/rss+xml': '/blog/rss.xml',
			},
		},
	}
}
