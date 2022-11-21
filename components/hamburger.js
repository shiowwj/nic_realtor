import { useState, useEffect, useContext } from "react";

import Link from "next/link";

import styles from "../styles/hamburger.module.css";

export default function Hamburger(services, contact, about, research) {
	return (
		<div className={styles.navigation}>
			<input
				type="checkbox"
				className={styles.navigation__checkbox}
				id="nav-toggle"
			/>
			<label htmlFor="nav-toggle" className={styles.navigation__button}>
				<span
					className={styles.navigation__icon}
					aria-label="toggle navigation menu"
				></span>
			</label>
			<div className={styles.navigation__background}></div>

			<nav className={styles.navigation__nav} role="navigation">
				<ul className={styles.navigation__list}>
					<li className={styles.navigation__item}>
						<Link
							className={styles.navigation__link}
							href={services ? services : ""}
						>
							<span className="">Services</span>
						</Link>
					</li>
					<li className={styles.navigation__item}>
						<Link
							className={styles.navigation__link}
							href={contact ? contact : ""}
						>
							<span className="">Contact</span>
						</Link>
					</li>
					<li className={styles.navigation__item}>
						<Link
							className={styles.navigation__link}
							href={about ? about : ""}
						>
							<span className="">About</span>
						</Link>
					</li>
					<li className={styles.navigation__item}>
						<Link
							className={styles.navigation__link}
							href={research ? research : ""}
						>
							<span className="">Research</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
