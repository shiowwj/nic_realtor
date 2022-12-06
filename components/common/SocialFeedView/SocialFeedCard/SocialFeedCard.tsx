import { IinstragramPost } from "@customTypes/instagram";
import { FC, useState } from "react";
import cn from "clsx";

import s from "./SocialFeedCard.module.css";

interface Props {
	className?: string;
	igpost?: IinstragramPost;
}

const SocialFeedCard: FC<Props> = ({ className, igpost }) => {
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
	return (
		<div
			className={rootClassName}
			style={{
				backgroundImage: igpost?.mediaUrl ? `url(${igpost.mediaUrl})` : `url(/blog-image.jpg)`,
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
      onClick={onClickPost}
		>
			<div className={cn(s.card, isHovering ? s.overlay : "")}>{isHovering ? <p className={s.caption}>{igpost?.caption}</p> : <></>}</div>
		</div>
	);
};

export default SocialFeedCard;
