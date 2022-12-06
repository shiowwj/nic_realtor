/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Text } from "@components/ui";
import cn from "clsx";

import s from "./BlogsView.module.css" 

interface Props {
	className?: string;
	title: string;
	caption: string;
	blogPosts: Record<string, string | number>[];
}

// buy, sell, rent, property wealth planning

const BlogsView: FC<Props> = ({ className, title, caption, blogPosts }) => {
	const rootClassName = cn(s.root, className);
	return (
		<div className={rootClassName}>
			<Text className={s.title} variant="sectionHeading">
				{title}
			</Text>
			<div className={s.blogPostsContainer}>
				{blogPosts.map((blogItem, idx) => (
					<div className={s.blogPostItem} key={idx}>
						<div className={s.coverimageWrapper}>
							<img
								className={s.coverimage}
								src={blogItem["imgSrc"] as string}
								alt={`${blogItem["title"]} image`}
							/>
						</div>
						<div className={s.blogPostTitle}>{blogItem["title"]}</div>
						<div className={s.blogPostDescription}>{blogItem["description"]}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default BlogsView;
