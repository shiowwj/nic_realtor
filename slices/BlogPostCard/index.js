/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicRichText } from "@prismicio/react";

import s from "./BlogsView.module.css";
/**
 * @typedef {import("@prismicio/client").Content.BlogPostCardSlice} BlogPostCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostCardSlice>} BlogPostCardProps
 * @param { BlogPostCardProps }
 */
const BlogPostCard = ({ slice }) => {
	return (
		<section className={s.blogPostItem}>
			<div className={s.coverimageWrapper}>
				<img className={s.coverimage} src={slice.primary.cardImage.url} alt={slice.primary.cardImage.alt} />
			</div>
			<span className={s.blogPostTitle}>
				{slice.primary.title ? <PrismicRichText field={slice.primary.title} /> : <h2>Template slice, update me!</h2>}
			</span>
			<div className={s.blogPostDescription}>
				{slice.primary.description ? (
					<PrismicRichText field={slice.primary.description} />
				) : (
					<p>start by editing this slice from inside Slice Machine!</p>
				)}
			</div>
			<style jsx>{`
				section {
					max-width: 600px;
					margin: 4em auto;
					text-align: center;
				}
			`}</style>
		</section>
	);
};

export default BlogPostCard;
