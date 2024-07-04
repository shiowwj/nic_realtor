'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel'
import {
	Modal,
	ModalContent,
	ModalBody,
	useDisclosure,
} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Img from '@/ui/Img'
import { extractYouTubeVideoId } from '@/lib/utils'
import GalleryCarousel from './ImageCarousel'

type Props = {}

const ImagePreviewCarousel = (listing: Sanity.ListingPost) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [currentImageIdx, setCurrentImageIdx] = useState(undefined)

	const handleFullScreen = (curID: any) => {
		return setCurrentImageIdx(curID)
	}

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
			return
		}
	}, [isOpen])
	return (
		<>
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
								onClick={() => {
									console.log('clickl on image')
									handleFullScreen(index)
									onOpen()
									document.body.classList.add('overflow-hidden')
								}}
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
				<CarouselPrevious className="z-50- absolute left-2" />
				<CarouselNext className="absolute right-2 z-50" />
			</Carousel>
			{listing.photos && listing.photos.length > 0 && (
				<Modal
					className={`bg-monolab-black z-[100]`}
					backdrop="opaque"
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					onClose={() => (document.body.style.overflow = 'auto')}
					size="full"
					motionProps={{
						variants: {
							enter: {
								y: 0,
								opacity: 1,
								transition: {
									duration: 0.3,
									ease: 'easeOut',
								},
							},
							exit: {
								y: -20,
								opacity: 0,
								transition: {
									duration: 0.2,
									ease: 'easeIn',
								},
							},
						},
					}}
				>
					<ModalContent>
						{(onClose) => {
							const currentImageObj =
								currentImageIdx === 0 || currentImageIdx
									? listing.photos[currentImageIdx]
									: null
							if (!currentImageObj) return null
							return (
								<ModalBody className="p-0">
									<GalleryCarousel
										slides={listing.photos}
										options={{
											loop: true,
										}}
										currentImageIdx={currentImageIdx}
									/>
								</ModalBody>
							)
						}}
					</ModalContent>
				</Modal>
			)}
		</>
	)
}

export default ImagePreviewCarousel
