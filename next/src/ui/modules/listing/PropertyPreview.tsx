import Link from 'next/link'
import processUrl from '@/lib/processUrl'
import Img from '@/ui/Img'
import { cn, extractYouTubeVideoId, numberWithCommas } from '@/lib/utils'
import { FaBed, FaBath } from 'react-icons/fa'

export default function PropertyPreview({
	post,
}: {
	post: Sanity.ListingPost
}) {
	// featureVideo

	const isSold = post.status === 'sold'
	return (
		<Link
			className={cn(
				'group block rounded-lg border border-gray-300 bg-[#F6FAFF]',
			)}
			href={processUrl(post, { base: false })}
		>
			<div className="relative">
				{/* Embed YouTube Video */}
				{post.featureVideo && (
					<div className="video-wrapper aspect-video overflow-hidden rounded-lg rounded-b-none">
						<iframe
							className="h-full w-full"
							src={`https://www.youtube.com/embed/${extractYouTubeVideoId(post.featureVideo)}`}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				)}

				{!post.featureVideo && post.photos && (
					<figure className="aspect-video overflow-hidden rounded-lg rounded-b-none bg-ink/5">
						<Img
							className="aspect-video w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
							image={post.photos[0]}
							imageWidth={800}
						/>
					</figure>
				)}

				{/* Sold banner */}
				{isSold ? (
					<div className="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center">
						<div className="absolute left-4 top-[10%] rotate-[-45deg] transform rounded-md bg-red-600 px-4 py-1 text-lg font-bold text-white">
							Sold
						</div>
					</div>
				) : null}
			</div>

			<div className="mx-auto max-w-screen-xl p-4">
				<div className="h3">{post.metadata.title}</div>

				<div className="flex flex-wrap gap-x-4">
					{post.propertyDetails.noOfBedrooms && (
						<div className="flex flex-row items-center gap-2">
							<FaBed />
							<span className="text-balance text-sm">
								{post.propertyDetails.noOfBedrooms}
							</span>
						</div>
					)}
					{post.propertyDetails.noOfBathooms && (
						<div className="flex flex-row items-center gap-2">
							<FaBath />
							<span className="text-balance text-sm">
								{post.propertyDetails.noOfBathooms}
							</span>
						</div>
					)}

					{/* <Date value={post.publishDate} /> */}
					{/* <Categories categories={post.categories} /> */}
				</div>
				<div className="my-2 flex flex-row items-center justify-between gap-1">
					<span className="text-balance text-xl">
						{`$` + numberWithCommas(post.listingPrice)}
					</span>
					<button className={cn('_btn', isSold ? 'action_disabled' : 'action')}>
						{isSold ? 'View Listing Details' : 'Inquire Now'}
					</button>
				</div>
			</div>
		</Link>
	)
}
