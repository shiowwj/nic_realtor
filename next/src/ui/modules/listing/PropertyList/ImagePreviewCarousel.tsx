import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel'
import React from 'react'

type Props = {}

const ImagePreviewCarousel = (props: Props) => {
	return (
		<Carousel
			className="w-full"
			opts={{
				align: 'start',
				loop: true,
			}}
		>
			<CarouselContent className="-ml-2">
				{Array.from({ length: 10 }).map((_, index) => (
					<CarouselItem key={index} className="pl-2 md:basis-1/3 lg:basis-1/4">
						<div className="">
							<Card>
								<CardContent className="flex aspect-[16/9] items-center justify-center p-6">
									<span className="text-2xl font-semibold">{index + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="absolute left-2" />
			<CarouselNext className="absolute right-2" />
		</Carousel>
	)
}

export default ImagePreviewCarousel
