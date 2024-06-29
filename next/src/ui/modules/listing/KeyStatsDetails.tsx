'use client'
import { numberWithCommas } from '@/lib/utils'
import React from 'react'

import { FaBed, FaBath } from 'react-icons/fa'
import { TbRulerMeasure } from 'react-icons/tb'

const MainDetails = (listing: Sanity.ListingPost) => {
	return (
		<div className="rounded-lg bg-accent/15 p-4 shadow-lg md:p-2">
			<div className="mx-auto grid max-w-screen-xl items-center gap-8 p-4 max-md:px-4 md:py-8 lg:grid-cols-[1fr,auto]">
				<div>
					<h2 className="h2 text-balance">{listing.name}</h2>
					<div className="flex flex-wrap gap-x-4 overflow-auto">
						{listing.propertyDetails.noOfBedrooms && (
							<div className="flex flex-row items-center gap-2">
								<FaBed />
								<span className="text-balance">
									{listing.propertyDetails.noOfBedrooms}
									{`-Beds`}
								</span>
							</div>
						)}
						{listing.propertyDetails.noOfBathooms && (
							<div className="flex flex-row items-center gap-2">
								<FaBath />
								<span className="text-balance">
									{listing.propertyDetails.noOfBathooms}
									{`-Baths`}
								</span>
							</div>
						)}
						{listing.propertyDetails.noOfStudyRooms && (
							<div className="flex flex-row items-center gap-2">
								<TbRulerMeasure />
								<span className="text-balance">
									{listing.propertyDetails.noOfStudyRooms}
									{`-Study rooms`}
								</span>
							</div>
						)}
						{listing.propertyDetails.noOfHelperRooms && (
							<div className="flex flex-row items-center gap-2">
								<TbRulerMeasure />
								<text className="text text-balance">
									{listing.propertyDetails.noOfHelperRooms}
									{`-Helper's room`}
								</text>
							</div>
						)}
						{listing.propertyDetails.totalSqFt && (
							<div className="flex flex-row items-center gap-2">
								<TbRulerMeasure />
								<span className="text-balance">
									{listing.propertyDetails.totalSqFt}
									{`-sqft`}
								</span>
							</div>
						)}
						{listing.propertyDetails.totalSqFt && (
							<div className="flex flex-row items-center gap-2">
								<span className="text-balance">
									{`$` +
										numberWithCommas(
											Math.floor(
												listing.listingPrice /
													listing.propertyDetails.totalSqFt,
											),
										) +
										` psf`}
								</span>
							</div>
						)}
					</div>
				</div>
				<div>
					<div className="flex flex-row items-center gap-1">
						<h2 className="h2 text-balance">
							{`$` + numberWithCommas(listing.listingPrice)}
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainDetails
