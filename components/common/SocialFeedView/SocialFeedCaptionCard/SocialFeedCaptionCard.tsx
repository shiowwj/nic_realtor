import { IinstragramPost } from "@customTypes/instagram";
import { FC, useState } from "react";
import cn from "clsx";

import s from "./SocialFeedCaptionCard.module.css";

interface Props {
	className?: string;
	caption?: string;
	cardIdx: number;
}

const SocialFeedCaptionCard: FC<Props> = ({ className, caption, cardIdx }) => {
	const rootClassName = cn(s.root, className);
	return (
		<div className={cn(rootClassName)}>
			<p className={s.caption}>{caption}</p>
		</div>
	);
};

export default SocialFeedCaptionCard;
