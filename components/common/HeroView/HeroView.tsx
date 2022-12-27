import Link from "next/link";
import { FC, ReactNode } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Button, Text } from "@components/ui";
import cn from "clsx";

import s from "./HeroView.module.css";

interface Props {
	className?: string;
	imgUrl?: string;
	title: string;
	link?: string;
	subheading: string;
	ctaButtonText: string;
	children?: ReactNode;
}

const HeroView: FC<Props> = ({ children, className, imgUrl, title, link, subheading, ctaButtonText }) => {
	const rootClassName = cn(s.root, className);
	return (
		<section className={rootClassName}>
			{children}
			<div
				style={{
					backgroundImage: `url(${imgUrl})`,
					backgroundColor: "#e3f7ff",
					backgroundBlendMode: "multiply",
					// filter: "sepia(60%)"
				}}
				className={s.header}
			>
				<div className={s.wrapper}>
					<Text className={cn(s.title, 'leading-5')} variant="heading">
						<span className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r to-site-p-blue from-site-p-pink">{title}</span>
					</Text>
					<Text className={s.subheading} variant="body">
						<span className={s.highlightSpan}>{subheading}</span>
					</Text>
					<Link href={link ? link : ""} scroll={false}>
						<Button type="button" className={s.ctabutton}>{ctaButtonText ? ctaButtonText : "Learn More"}</Button>
					</Link>
					{/* <Link href="" scroll={false}> */}
						<AiOutlineArrowDown className={s.icon} />
					{/* </Link> */}
				</div>
			</div>
		</section>
	);
};

export default HeroView;
