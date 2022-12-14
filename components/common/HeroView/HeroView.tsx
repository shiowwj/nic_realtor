import Link from "next/link";
import { FC, ReactNode } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Button, Text } from "@components/ui";
import Image from "next/image";
import coverImg from "../../../public/cover.png";
import cn from "clsx";
import * as gtag from '@lib/ga/googletag'
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

	const handleCTA = () => {
		gtag.event({
      action: "Find out more", 
			category: "button click",
			label: "button",
			value: "Find out more button click"
    })
	}
	return (
		<section className={rootClassName}>
			{children}
			<div className={cn(s.header, "")}>
				<Image
					src={coverImg}
					alt={`cover image`}
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
					placeholder="blur"
				/>
				<div className={s.wrapper}>
					<Text className={cn(s.title, "leading-5")} variant="heading">
						<span className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r to-site-p-blue from-site-p-pink">{title}</span>
					</Text>
					<Text className={s.subheading} variant="body">
						<span className={s.highlightSpan}>{subheading}</span>
					</Text>
					<Link href={link ? link : ""} scroll={false}>
						<Button type="button" className={s.ctabutton} onClick={handleCTA}>
							{ctaButtonText ? ctaButtonText : "Learn More"}
						</Button>
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
