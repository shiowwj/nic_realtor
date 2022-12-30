/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicRichText } from "@prismicio/react";

import s from "./ArticlesView.module.css";
/**
 * @typedef {import("@prismicio/client").Content.ArticlesViewSectionSlice} ArticlesViewSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlesViewSectionSlice>} ArticlesViewSectionProps
 * @param { ArticlesViewSectionProps }
 */
const ArticlesViewSection = ({ slice }) => {
	return (
		<div className={s.blogPostsContainer}>
			{slice?.items?.map((item, i) => (
				<div className={s.blogPostItem} key={i}>
					<div className={s.coverimageWrapper}>
						{slice.variation === "default" ? (
							<img className={s.coverimage} src={item.articleviewsectionimage.url} alt={"article description"} />
						) : (
							<></>
						)}
					</div>
					<span className={s.blogPostTitle}>
						<PrismicRichText field={item.articleviewcardtitle} />
					</span>
					<div className={s.blogPostDescription}>
						<PrismicRichText field={item.articleviewcarddescription} />
					</div>
				</div>
			))}
		</div>
		// </section>
	);
};

export default ArticlesViewSection;
