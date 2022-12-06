import { FC } from "react";
import cn from "clsx";
import Link from "next/link";

import s from "./Hamburger.module.css";

interface HamburgerProps {
	className?: string;
	pageLinks: Record<string, Record<string, string>[]>;
}

const Hamburger: FC<HamburgerProps> = ({ className, pageLinks }) => {
	const rootClassName = cn(s.root, className);
	return (
		<div className={rootClassName}>
			<input type="checkbox" className={s.navigation__checkbox} id="nav-toggle" />
			<label htmlFor="nav-toggle" className={s.navigation__button}>
				<span className={s.navigation__icon} aria-label="toggle navigation menu"></span>
			</label>
			<div className={s.navigation__background}></div>

			<nav className={s.navigation__nav} role="navigation">
				<ul className={s.navigation__list}>
					{pageLinks["left"].map((val, idx) => {
						return (
							<li key={idx} className={s.navigation__item}>
								<Link className={s.navigation__link} href={val["link"]}>
									<span className="">{val["text"]}</span>
								</Link>
							</li>
						);
					})}
					{pageLinks["right"].map((val, idx) => {
						return (
							<li key={idx} className={s.navigation__item}>
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
