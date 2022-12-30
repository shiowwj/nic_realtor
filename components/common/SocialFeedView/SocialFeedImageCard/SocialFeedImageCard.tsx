import { IinstragramPost } from "@customTypes/instagram";
import { FC, useState } from "react";
import cn from "clsx";

import s from "./SocialFeedImageCard.module.css";
import Image from "next/image";

interface Props {
	className?: string;
	igpost?: IinstragramPost;
	cardIdx: number;
}

const SocialFeedCard: FC<Props> = ({ className, igpost, cardIdx }) => {
	// console.log('igpost',igpost)
	const rootClassName = cn(s.root, className);

	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => {
		setTimeout(() => setIsHovered(true), 400);
	};
	const onMouseLeave = () => {
		setTimeout(() => setIsHovered(false), 400);
	};
	const onClickPost = () => {
		window.open(igpost?.permalink);
	};

	const cardGap = (idx: number): boolean => {
		if ((idx + 3) % 3 === 0) return false;
		return true;
	};

	return (
		<div className={cn(rootClassName, cardGap(cardIdx) ? "lg:mt-10" : "")} onMouseLeave={onMouseLeave} onScroll={onMouseEnter}>
			<a href={igpost?.permalink} target={"_blank"} rel={"noreferrer"}>
			<Image
				// src={`/api/imageproxy?url=${encodeURIComponent(igpost?.mediaUrl ? igpost?.mediaUrl : "/blog-image.jpg")}`}
				src={igpost?.mediaUrl ? igpost?.mediaUrl.replace(/^[^.]*/, 'https://scontent-akl1-1') : "/blog-image.jpg"}
				alt={"ig post"}
				quality={100}
				fill
				className="rounded-3xl"
			/>
			</a>
			{/* <div className={cn(s.card, isHovering ? s.overlay : "")}>{true ? <p className={s.caption}>{igpost?.caption}</p> : <></>}</div> */}
		</div>
	);
};

export default SocialFeedCard;
