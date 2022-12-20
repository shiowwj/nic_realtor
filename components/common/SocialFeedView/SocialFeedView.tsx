import { FC } from "react";
import cn from "clsx";
import { IinstragramPost } from "@customTypes/instagram";

import s from "./SocialFeedView.module.css";
import SocialFeedCard from "./SocialFeedImageCard";
import SocialFeedCaptionCard from "./SocialFeedCaptionCard";

interface Props {
	className?: string;
	igPosts: IinstragramPost[];
}
const SocialFeedView: FC<Props> = ({ className, igPosts }) => {
	const rootClassName = cn(s.root, className);
	// console.log('igpost',igPosts)
	return (
		<div className={rootClassName}>
			<div className={s.gridContainer}>
			<p className={s.postTitle}>{`Our journey`}</p>
				{igPosts.map((post, idx) =>{ 
					if (idx === 3) return <SocialFeedCaptionCard className={'hover:translate-x-2'} cardIdx={idx} caption={igPosts[idx+1].caption} key={idx}/>
					if (idx === 7) return <SocialFeedCaptionCard className={'hover:-translate-x-2'} cardIdx={idx} caption={igPosts[idx-1].caption} key={idx}/>
					return (
					<SocialFeedCard igpost={post} key={post.id} cardIdx={idx}/>
				)})}
			</div>
		</div>
	);
};

export default SocialFeedView;
