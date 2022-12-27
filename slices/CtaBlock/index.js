import React from "react";
import { PrismicText } from "@prismicio/react";

import s from "./CtaBlock.module.css";
import { Button } from "@components/ui";
import Link from "next/link";
/**
 * @typedef {import("@prismicio/client").Content.CtaBlockSlice} CtaBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CtaBlockSlice>} CtaBlockProps
 * @param { CtaBlockProps }
 */
const CtaBlock = ({ slice }) => {
	return (
		<section className={s.root}>
			<div className={s.title}>
				<span>{slice.primary.title ? <h2>{slice.primary.title}</h2> : <h2>Template slice, update me!</h2>}</span>
			</div>
			{/* <div>
				{slice.primary.description ? (
					<p className={s.description}>{slice.primary.description}</p>
				) : (
					<p>start by editing this slice from inside Slice Machine!</p>
				)}
			</div> */}
			{slice.variation === "withCtaButton" ? (
				<div>
					<Link href={"#contact-form"} scroll={false}>
						<Button type="button" className={s.ctabutton}>
							{slice.primary.cta_button_text ? slice.primary.cta_button_text : "Learn More"}
						</Button>
					</Link>
				</div>
			) : (
				<></>
			)}
		</section>
	);
};

export default CtaBlock;
