import { fetchSanity, groq } from '@/lib/sanity/fetch'
import Breadcrumbs from '../Breadcrumbs'
import React from 'react'
import KeyStatsDetails from './KeyStatsDetails'
import ImagePreviewCarousel from './PropertyList/ImagePreviewCarousel'
import PropertyDetails from './PropertyDetails'
import AboutDetails from './AboutDetails'
import ContactForm from '../ContactForm'

export default async function Post({
	listing,
}: {
	listing: Sanity.ListingPost
}) {
	const crumbs = await fetchSanity<Sanity.Page[]>(
		groq`*[_type == 'page' && metadata.slug.current in ['index', 'listings']]{
			title,
			metadata,
			contactForm,
		}`,
	)
	// console.log('listing', listing)
	return (
		<>
			<div className="mx-auto max-w-screen-xl px-2">
				<Breadcrumbs
					crumbs={
						crumbs?.map((crumb) => ({
							type: 'internal',
							internal: crumb,
						})) as Omit<Sanity.Link[], '_type' | 'label'>
					}
					currentPage={listing}
				/>
			</div>
			{/* // image carousel + property at a glance details */}
			<section>
				<ImagePreviewCarousel {...listing} />
				<KeyStatsDetails {...listing} />
				<PropertyDetails {...listing} />
				<AboutDetails {...listing} />
			</section>
			{/* <div className="section grid gap-8 lg:grid-cols-[1fr,auto]"></div> */}

			{/* // property details */}
			{listing.contactForm && (
				<div className="rounded-lg p-4 text-ink shadow-lg md:p-2">
					<ContactForm {...listing.contactForm} />
				</div>
			)}
		</>
	)
}
