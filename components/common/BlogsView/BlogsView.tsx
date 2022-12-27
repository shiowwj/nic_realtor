/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Text } from "@components/ui";
import cn from "clsx";

import s from "./BlogsView.module.css";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "slices";

interface Props {
	className?: string;
	slice: any;
	variant?: "blog" | "consult";
}

// buy, sell, rent, property wealth planning

const BlogsView: FC<Props> = ({ className, slice, variant }) => {
	const rootClassName = cn(s.root, className);
	return (
		<>
			{variant === "blog" ? (
				<div className={cn(rootClassName, s.rootBlog)}>
					{slice[0].primary.title ? (
						<PrismicRichText
							field={slice[0].primary.title}
							components={{
								heading1: ({ children }) => (
									<Text className={cn(s.title, ' mt-60 pb-24 pt-80 my-4  text-site-p-light')} variant="sectionHeading">
										{children}
									</Text>
								),
							}}
						/>
					) : (
						`Template slice, update me!`
					)}

					<SliceZone slices={slice} components={components} />
				</div>
			) : (
				<div className={cn(rootClassName, s.rootConsult)} id={`consult`}>

					{slice[0].primary.title ? (
						<PrismicRichText
							field={slice[0].primary.title}
							components={{
								heading1: ({ children }) => (
									<Text className={cn(s.title, 'py-16 text-site-p-dark')} variant="sectionHeading">
										{children}
									</Text>
								),
							}}
						/>
					) : (
						`Template slice, update me!`
					)}

					<SliceZone slices={slice} components={components} />
				</div>
			)}
		</>
	);
};
export default BlogsView;
