import { FC, useState } from "react";
import cn from "clsx";
import Link from "next/link";

import s from "./Hamburger.module.css";

interface HamburgerProps {
	className?: string;
	pageLinks: Record<string, Record<string, string>[]>;
}

const Hamburger: FC<HamburgerProps> = ({ className, pageLinks }) => {
	const rootClassName = cn(s.root, className);
	const [handleMenuState, setHandleMenuState] = useState(false)
	const handleMenuItemClick = () => {
		setHandleMenuState(false)
	}
	const handleMenuClick = () => {
		if (handleMenuState) {
			setHandleMenuState(false)
		} else {
			setHandleMenuState(true)
		}
	}
	return (
		<div className={rootClassName}>
			<input type="checkbox" className={s.navigation__checkbox} id="nav-toggle" checked={handleMenuState} onChange={handleMenuClick}/>
			<label htmlFor="nav-toggle" className={s.navigation__button}>
				<span className={s.navigation__icon} aria-label="toggle navigation menu icon"></span>
			</label>
			<div className={s.navigation__background}></div>

			<nav className={s.navigation__nav} role="navigation">
				<ul className={s.navigation__list}>
					{pageLinks["left"].map((val, idx) => {
						return (
							<li key={idx} className={s.navigation__item} onClick={handleMenuItemClick}>
								<Link className={s.navigation__link} href={val["link"]}>
									<span className="">{val["text"]}</span>
								</Link>
							</li>
						);
					})}
					{pageLinks["right"].map((val, idx) => {
						return (
							<li key={idx} className={s.navigation__item} onClick={handleMenuItemClick}>
								<Link className={s.navigation__link} href={val["link"]}>
									<span className="">{val["text"]}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Hamburger;
