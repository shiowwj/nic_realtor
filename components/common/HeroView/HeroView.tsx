import Link from "next/link";
import { FC, ReactNode } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Button, Text } from "@components/ui";
import cn from 'clsx'

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
  const rootClassName = cn(s.root, className)
	return (
		<div className={rootClassName}>
      {/* <Navbar pagel/> */}
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
				<Text className={s.title} variant="heading"><span className={s.highlightSpan}>{title}</span></Text>
				<Text className={s.subheading} variant="body"><span className={s.highlightSpan}>{subheading}</span></Text>
					<Link href={link ? link : ""}>
						<Button className={s.ctabutton}>{ctaButtonText ? ctaButtonText : "Learn More"}</Button>
					</Link>
					<Link href="" scroll={false}>
						<AiOutlineArrowDown className={s.icon} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroView;
