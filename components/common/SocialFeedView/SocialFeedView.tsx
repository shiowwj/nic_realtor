import { FC } from "react";
import cn from "clsx";
import { IinstragramPost } from "@customTypes/instagram";

import s from "./SocialFeedView.module.css";
import SocialFeedCard from "./SocialFeedCard";

interface Props {
	className?: string;
	igPosts: IinstragramPost[];
}
const SocialFeedView: FC<Props> = ({ className, igPosts }) => {
	const rootClassName = cn(s.root, className);
	return (
		<div className={rootClassName}>
			<div className={s.gridContainer}>
        {igPosts.map((post) => (
          <>
            {(igPosts.indexOf(post) + 2) % 3 === 0 ? <SocialFeedCard igpost={post} key={post.id}/>:<SocialFeedCard className="lg:mt-10" igpost={post} key={post.id}/>}</>
        ))}
      </div>
		</div>
	);
};

export default SocialFeedView;
