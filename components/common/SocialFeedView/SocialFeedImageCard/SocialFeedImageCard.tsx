import { IinstragramPost } from "@customTypes/instagram";
import { FC, useState } from "react";
import cn from "clsx";

import s from "./SocialFeedImageCard.module.css";

interface Props {
	className?: string;
	igpost?: IinstragramPost;
	cardIdx: number;
}

const SocialFeedCard: FC<Props> = ({ className, igpost, cardIdx }) => {
	const rootClassName = cn(s.root, className);

	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => {
		setTimeout(() => setIsHovered(true), 400);
	};
	const onMouseLeave = () => {
		setTimeout(() => setIsHovered(false), 400);
	};
  const onClickPost =() => {
    window.open(igpost?.permalink)
  }

	const cardGap = (idx: number):boolean => {
		if ((idx + 3) % 3 === 0) return false
		return true
	}

	return (
		<div
			className={cn(rootClassName, cardGap(cardIdx) ? 'lg:mt-10': '')}
			style={{
				backgroundImage: igpost?.mediaUrl ? `url(${igpost.mediaUrl})` : `url(/blog-image.jpg)`,
			}}
			// onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
      // onClick={onClickPost}
			onScroll={onMouseEnter}
		>
			<div className={cn(s.card, isHovering ? s.overlay : "")}>{isHovering ? <p className={s.caption}>{igpost?.caption}</p> : <></>}</div>
		</div>
	);
};

export default SocialFeedCard;
