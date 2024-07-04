import { POSTAL_DISTRICTS, PROPERTY_TYPE } from '@/constants/property'
import { numberWithCommas, removeUnderscores } from '@/lib/utils'
import React from 'react'

type Props = {
	title: string
	value: string | number | string[]
}

const DetailItemComponent: React.FC<Props> = ({ title, value }) => {
	return (
		<div className="flex flex-col">
			<h4 className="h4 font-semibold">{title}</h4>
			{Array.isArray(value) ? (
				<div className="flex flex-col">
					{value.map((item, index) => (
						<p key={index} className="text-base font-extralight text-black/75">
							{item}
						</p>
					))}
				</div>
			) : (
				<p className="text-base font-extralight text-black/75">{value}</p>
			)}
		</div>
	)
}

const PropertyDetails = (listing: Sanity.ListingPost) => {
	const district = POSTAL_DISTRICTS.filter((v) => {
		if (v.value === (listing.propertyDetails.district as number)) {
			return v
		}
	})

	return (
		<div className="bg-inherit p-4 md:p-2">
			<div className="mx-auto w-full max-w-screen-xl p-4 max-md:px-4 md:py-8">
				<div className="relative border-b-[1px] border-accent/25 pb-1">
					<h3 className="h3 text-balance">{`Property Details`}</h3>
					<div className="absolute -bottom-[0.5px] left-0 h-[2px] w-1/6 bg-accent"></div>
				</div>
				<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
					<div className="flex flex-col gap-y-4">
						<DetailItemComponent title="Address" value={listing.address} />
						{listing.propertyDetails.district && (
							<DetailItemComponent
								title="District"
								value={district[0].title}
								// value={removeUnderscores(
								// 	POSTAL_DISTRICTS.filter((v) => {
								// 		if (
								// 			v.value === (listing.propertyDetails.district as string)
								// 		) {
								// 			return 'D14'
								// 		}
								// 	}),
								// )}
							/>
						)}
						{listing.nearestMRT && (
							<DetailItemComponent
								title="Nearby MRT"
								value={listing.nearestMRT.map((mrt) => removeUnderscores(mrt))}
							/>
						)}
					</div>

					<div className="flex flex-col gap-y-4">
						{listing.propertyDetails.propertyType && (
							<DetailItemComponent
								title="Property Type"
								value={
									PROPERTY_TYPE.filter(
										(v) => v.value === listing.propertyDetails.propertyType,
									)[0].title
								}
							/>
						)}

						{listing.propertyDetails.tenure && (
							<DetailItemComponent
								title="Tenure"
								value={removeUnderscores(listing.propertyDetails.tenure)}
							/>
						)}
					</div>
					<div className="flex flex-col gap-y-4">
						{listing.propertyDetails.propertyType !== 'landed' &&
							listing.propertyDetails.totalSqFt && (
								<DetailItemComponent
									title="PSF"
									value={
										`$` +
										numberWithCommas(
											Math.floor(
												listing.listingPrice /
													listing.propertyDetails.totalSqFt,
											),
										) +
										` psf`
									}
								/>
							)}

						{listing.propertyDetails.propertyType == 'landed' &&
							listing.propertyDetails.builtUpSize && (
								<DetailItemComponent
									title="Built-Up Size"
									value={listing.propertyDetails.builtUpSize + ` sqft`}
								/>
							)}
						{listing.propertyDetails.propertyType == 'landed' &&
							listing.propertyDetails.landSize && (
								<DetailItemComponent
									title="Land Size"
									value={listing.propertyDetails.landSize + ` sqft`}
								/>
							)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyDetails
