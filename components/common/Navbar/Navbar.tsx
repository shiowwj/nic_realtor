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
				<div className="lg:block hidden">
					<div>
						{pageLinks["left"].map((val, idx) => {
							return (
								<Link key={idx} className={s.links} href={val["link"]}>
									{val["text"]}
								</Link>
							);
						})}

						<a className={s.logo}>{brandLogoImgSrc ? <Image src={brandLogoImgSrc} alt={`brand logo`} /> : "LOGO"}</a>
						{pageLinks["right"].map((val, idx) => {
							return (
								<Link key={idx} className={s.links} href={val["link"]}>
									{val["text"]}
								</Link>
							);
						})}
					</div>
				</div>

        {/* mobile / hamburger menu */}
        <div className={s.mobileMenu}>
          {/* <a className={s.logo}>{brandLogoImgSrc ? <Image src={brandLogoImgSrc} alt={`brand logo`} /> : "LOGO"}</a> */}
              <Hamburger pageLinks={pageLinks}/>
        </div>  
			</div>
		</div>
	);
};

export default Navbar;
