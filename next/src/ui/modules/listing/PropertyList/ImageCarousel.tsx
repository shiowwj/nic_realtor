import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { useCallback, useEffect, useState } from 'react'
import { FaCaretLeft } from 'react-icons/fa'
import { FaCaretRight } from 'react-icons/fa'
import Img from '@/ui/Img'
// import { getImageSrc } from '@utils/common.utils';
import '@/styles/gallery_images.css'
import '@/styles/carousel.css'

type Props = {
	slides: Sanity.Image[]
	options: EmblaOptionsType
	currentImageIdx: any
	handleClose?: any
}

const GalleryCarousel = ({
	slides,
	options,
	currentImageIdx,
	handleClose,
}: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options)

	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
	const [scrollSnaps, setScrollSnaps] = useState([])
	const [selectedIndex, setSelectedIndex] = useState(currentImageIdx)

	const scrollPrev = useCallback(() => {
		if (!emblaApi) return
		if (emblaApi) emblaApi.scrollPrev()
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (!emblaApi) return
		if (emblaApi) emblaApi.scrollNext()
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi])

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		if (!emblaApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
	}, [])

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		if (!emblaApi) return
		emblaApi.scrollTo(selectedIndex, true)
	}, [])

	useEffect(() => {
		if (!emblaApi) return
		onInit(emblaApi)
		onSelect(emblaApi)

		emblaApi.on('reInit', onInit)
		emblaApi.on('reInit', onSelect)
		emblaApi.on('select', onSelect)
	}, [emblaApi, onInit, onSelect])

	useEffect(() => {
		// Initialize Embla Carousel when the component mounts
		if (!emblaApi) return

		// Event listener for keyboard navigation
		const handleKeyDown = (event: any) => {
			switch (event.key) {
				case 'ArrowLeft':
					emblaApi.scrollPrev()
					break
				case 'ArrowRight':
					emblaApi.scrollNext()
					break
				default:
					break
			}
		}

		// Attach the keydown event listener
		window.addEventListener('keydown', handleKeyDown)

		// Clean up when the component unmounts
		return () => {
			// embla.destroy();
			// Remove the keydown event listener
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [emblaApi])

	return (
		<>
			<div className="embla__individual_project -z-50">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{slides.map((slide, idx) => (
							<div className="embla__slide__gallery" key={`${idx}`}>
								{/* <Image
									removeWrapper
									className={`gallery_carousel_image aspect-auto max-h-[100vh]`}
									radius="none"
									src={slide.full_image_url}
									alt={slide.title}
									fallbackSrc={getImageSrc(slide.medium_srcset, 2)}
								/> */}
								<Img
									className="mx-auto w-full max-w-6xl rounded-lg object-cover"
									style={{ aspectRatio: '16/9' }}
									image={slide}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<button
				className="embla__prev TP:flex opacity-1 absolute inset-y-1/2 left-0 z-[100] text-accent hover:text-altAccent group-hover/slide:opacity-100 group-hover/slide:disabled:opacity-30"
				onClick={scrollPrev}
				id="prev-button"
			>
				<FaCaretLeft className="h-10 w-10" />
			</button>
			<button
				className="embla__next TP:flex opacity-1 absolute inset-y-1/2 right-0 z-[100] text-accent hover:text-altAccent group-hover/slide:opacity-100 group-hover/slide:disabled:opacity-30"
				onClick={scrollNext}
			>
				<FaCaretRight className="h-10 w-10" />
			</button>
		</>
	)
}

export default GalleryCarousel
