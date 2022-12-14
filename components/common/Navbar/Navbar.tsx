import { FC } from "react";
import cn from "clsx";
import Link from "next/link";
import Hamburger from "./HamburgerMenu/Hamburger";

import s from "./Navbar.module.css";
import Image from "next/image";

interface NavbarProps {
	className?: string;
	pageLinks: Record<string, Record<string, string>[]>;
	brandLogoImgSrc?: string;
}

const Navbar: FC<NavbarProps> = ({ className, pageLinks, brandLogoImgSrc }) => {
	const rootClassName = cn(s.root, className);
	return (
		<div className={rootClassName}>
			<div className={s.wrapper}>
				<div className="lg:block">
					<div>
						{pageLinks["left"].map((val, idx) => {
							return (
								<Link key={idx} className={cn(s.links, "hidden")} href={val["link"]}>
									{val["text"]}
								</Link>
							);
						})}

						<Link className={s.logo} href="/" id="sticky-logo">
							{brandLogoImgSrc ? (
								<Image src={brandLogoImgSrc} alt={`brand logo`} />
							) : (
								<span className="font-extrabold md:tracking-wider text-5xl cursor-pointer w-[15vw] md:w-full text-orange-600">{`NICOLE LEE`}</span>
							)}
						</Link>
						{pageLinks["right"].map((val, idx) => {
							return (
								<Link key={idx} className={cn(s.links, "hidden")} href={val["link"]}>
									{val["text"]}
								</Link>
							);
						})}
					</div>
				</div>

				{/* mobile / hamburger menu */}
				<div className={s.mobileMenu}>
					{/* <a className={s.logo}>{brandLogoImgSrc ? <Image src={brandLogoImgSrc} alt={`brand logo`} /> : "LOGO"}</a> */}
					<Hamburger pageLinks={pageLinks} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
