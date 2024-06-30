import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel'
import React from 'react'
import Img from '@/ui/Img'
import { extractYouTubeVideoId } from '@/lib/utils'

type Props = {}

const ImagePreviewCarousel = (listing: Sanity.ListingPost) => {
	return (
		<Carousel
			className="w-full"
			opts={{
				align: 'start',
				loop: true,
			}}
		>
			<CarouselContent className="-ml-2">
				{listing.featureVideo && (
					<CarouselItem
						key="featureVideo"
						className="pl-2 md:basis-1/3 lg:basis-1/4"
					>
						<Card>
							<CardContent className="video-wrapper flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg p-0">
								<iframe
									className="h-full w-full"
									src={`https://www.youtube.com/embed/${extractYouTubeVideoId(listing.featureVideo)}`}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</CardContent>
						</Card>
					</CarouselItem>
				)}

				{listing.photos &&
					listing.photos.length > 0 &&
					listing.photos.map((photo, index) => (
						<CarouselItem
							key={index}
							className="pl-2 md:basis-1/3 lg:basis-1/4"
						>
							<Card>
								<CardContent className="flex aspect-[16/9] items-center justify-center p-0">
									<figure>
										<Img
											className="w-full rounded-lg object-cover"
											style={{ aspectRatio: '16/9' }}
											image={photo}
										/>
									</figure>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
			</CarouselContent>
			<CarouselPrevious className="absolute left-2" />
			<CarouselNext className="absolute right-2" />
		</Carousel>
	)
}

export default ImagePreviewCarousel
