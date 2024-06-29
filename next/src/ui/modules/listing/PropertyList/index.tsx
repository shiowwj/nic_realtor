import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { PortableText } from '@portabletext/react'
// import Filtering from '@/ui/modules/blog/BlogList/Filtering'
import List from './List'
import { stegaClean } from '@sanity/client/stega'
import { cn } from '@/lib/utils'

export default async function PropertyList({
	intro,
	limit = 20,
	// layout,
	// displayFilters,
	// predefinedFilters,
}: Partial<{
	intro: any
	limit: number
	// layout: 'grid' | 'carousel'
	// displayFilters: boolean
	// predefinedFilters: Sanity.BlogCategory[]
}>) {
	const posts = await fetchSanity<Sanity.ListingPost[]>(
		groq`*[_type == 'listing.post'][0...$limit]|order(publishDate desc){
			...,
			categories[]->
		}`,
		{
			params: { limit },
			tags: ['posts'],
		},
	)
	// console.log('posts:', posts)
	return (
		<section className="section space-y-8">
			{intro && (
				<header className="richtext">
					<PortableText value={intro} />
				</header>
			)}

			{/* // add filter feature here */}
			{/* {displayFilters && <Filtering predefinedFilters={predefinedFilters} />} */}

			<List
				posts={posts}
				// predefinedFilters={predefinedFilters}
				className={cn(
					'gap-x-6 gap-y-12',
					'grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
					// stegaClean(layout) === 'grid'
					// 	? 'grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'
					// 	: 'carousel max-xl:full-bleed md:overflow-fade-r pb-4 [--size:320px] max-xl:px-4',
				)}
			/>
		</section>
	)
}
