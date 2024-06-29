import client from '@/lib/sanity/client'
import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { notFound } from 'next/navigation'
import processMetadata from '@/lib/processMetadata'
import Listing from '@/ui/modules/listing/Listing'
import ContactForm from '@/ui/modules/ContactForm'

export default async function Page({ params }: Props) {
	const listing = await getListing(params)
	if (!listing) notFound()
	return <Listing listing={listing} />
}

export async function generateMetadata({ params }: Props) {
	const listing = await getListing(params)
	if (!listing) notFound()
	return processMetadata(listing)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[_type == 'listing.post' && defined(metadata.slug.current)].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug }))
}

async function getListing(params: Props['params']) {
	return await fetchSanity<Sanity.ListingPost>(
		groq`*[_type == 'listing.post' && metadata.slug.current == $slug][0]{
			...,
			'body': select(_type == 'image' => asset->, body),
			'readTime': length(pt::text(body)) / 200,
			'headings': body[style in ['h2', 'h3']]{
				style,
				'text': pt::text(@)
			},
			categories[]->,
			metadata {
				...,
				'ogimage': image.asset->url
			},
			'contactForm':contactForm->contactForm
		}`,
		{
			params,
			tags: ['listing.post'],
		},
	)
}

type Props = {
	params: { slug?: string }
}
