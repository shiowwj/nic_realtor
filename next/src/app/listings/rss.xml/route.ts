import { fetchSanity, groq } from '@/lib/sanity/fetch'
import processUrl, { BASE_URL } from '@/lib/processUrl'
import { Feed } from 'feed'
import { escapeHTML, toHTML } from '@portabletext/to-html'
import { urlFor } from '@/lib/sanity/urlFor'
import { list } from 'postcss'

// export async function GET() {
// 	const { listing, posts, copyright } = await fetchSanity<{
// 		listing: Sanity.Page
// 		posts: Array<Sanity.ListingPost & { image?: string }>
// 		copyright: string
// 	}>(
// 		groq`{
// 			'listing': *[_type == 'page' && metadata.slug.current == 'listings'][0]{
// 				_type,
// 				title,
// 				metadata,
// 				'image': metadata.image.asset->url
// 			},
// 			'posts': *[_type == 'listing.post']{
// 				_type,
// 				body,
// 				publishDate,
// 				metadata
// 			},
// 			'copyright': pt::text(*[_type == 'site'][0].copyright)
// 		}`,
// 		{ tags: ['listings-rss'] },
// 	)

// 	if (!listing || !posts) {
// 		return new Response(
// 			'Missing either a listings page or blog posts in Sanity Studio',
// 			{ status: 500 },
// 		)
// 	}

// 	const url = processUrl(listing)

// 	const feed = new Feed({
// 		title: listing?.title || listing.metadata.title,
// 		description: listing.metadata.description,
// 		link: url,
// 		id: url,
// 		copyright,
// 		favicon: BASE_URL + 'favicon.ico',
// 		language: 'en',
// 		// generator: 'https://www.com/nuotsu/sanitypress',
// 	})

// 	posts.map((post) =>
// 		feed.addItem({
// 			title: escapeHTML(post.metadata.title),
// 			description: post.metadata.description,
// 			id: processUrl(post),
// 			link: processUrl(post),
// 			date: new Date(post.publishDate),
// 			// content: toHTML(post.body, {
// 			// 	components: {
// 			// 		types: {
// 			// 			image: ({ value }) => {
// 			// 				const img = `<img src="${urlFor(value).url()}" alt="${value.alt}" />`
// 			// 				const figcaption =
// 			// 					value.caption && `<figcaption>${value.caption}</figcaption>`
// 			// 				const source =
// 			// 					value.source && `<a href="${value.source}">(Source)</a>`

// 			// 				return `<figure>${[img, figcaption, source].filter(Boolean).join(' ')}</figure>`
// 			// 			},
// 			// 			code: ({ value }) =>
// 			// 				`<pre><code>${escapeHTML(value.code)}</code></pre>`,
// 			// 		},
// 			// 	},
// 			// }),
// 			image: post.image,
// 		}),
// 	)

// 	return new Response(feed.atom1(), {
// 		headers: {
// 			'Content-Type': 'application/atom+xml',
// 		},
// 	})
// }
