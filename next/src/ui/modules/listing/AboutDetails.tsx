'use client'
import React, { useState } from 'react'
import Content from '../RichtextModule/Content'
import { cn } from '@/lib/utils'
import css from './Listing.module.css'
import { TiTick } from 'react-icons/ti'
import { PortableText } from '@portabletext/react'

const AboutDetails = (listing: Sanity.ListingPost) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggleExpand = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className="bg-inherit p-4 shadow-lg md:p-2">
			<div className="mx-auto w-full max-w-screen-xl p-4 max-md:px-4 md:py-8">
				<div className="relative border-b-[1px] border-accent/25 pb-1">
					<h3 className="h3 text-balance">{`About ${listing.name}`}</h3>
					<div className="absolute -bottom-[0.5px] left-0 h-[2px] w-1/6 bg-accent"></div>
				</div>
				{listing.propertyWriteUpAndFeatures && (
					<section className="relative">
						<div
							className={cn(
								{
									'max-h-[100px] overflow-hidden': !isExpanded, // Adjust max-h value based on your requirements
									[css.blurEffect]: !isExpanded, // Ensure you define this class in your CSS module to apply a blur effect
								},
								'transition-all duration-300',
							)}
						>
							{listing.propertyWriteUpAndFeatures.content && (
								<>
									<div
										className={cn(
											'richtext mx-auto w-full space-y-[1em] py-4 text-black/75 md:py-8 [&>:first-child]:!mt-0',
										)}
									>
										<PortableText
											value={listing.propertyWriteUpAndFeatures.content}
										/>
									</div>
									<hr />
								</>
							)}

							{listing.propertyWriteUpAndFeatures.additionalFeatures && (
								<div className="py-4 md:py-8">
									<h3 className="h3 text-balance">{`Additional Features`}</h3>
									<div className="grid grid-cols-1 gap-y-4 py-4 md:py-8 lg:grid-cols-2">
										{listing.propertyWriteUpAndFeatures.additionalFeatures.map(
											(feature, index) => (
												<div
													key={index}
													className={cn(
														css.featureItem,
														'flex flex-row items-center gap-2 py-1 text-base font-extralight text-black/75',
													)}
												>
													<TiTick />{' '}
													<span className="text-balance">{feature}</span>
												</div>
											),
										)}
									</div>
								</div>
							)}
						</div>

						<button
							onClick={toggleExpand}
							className="_btn action-outline relative z-[5] mt-2"
						>
							{isExpanded ? 'Show Less' : 'Show More'}
						</button>
						{!isExpanded && <div className={css.fadeOutOverlay}></div>}
						{/* //
					Optional: Add a fade-out overlay for a smoother transition */}
					</section>
				)}
			</div>
		</div>
	)
}

export default AboutDetails
