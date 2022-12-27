/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import cn from "clsx";

import s from "./ServicesView.module.css";
import { Text, Tilt } from "@components/ui";
import Image from "next/image";

interface Props {
	className?: string;
	title: string;
	caption: string;
	services: Record<string, string>[];
}

// buy, sell, rent, property wealth planning

const ServicesView: FC<Props> = ({ className, title, caption, services }) => {
	const rootClassName = cn(s.root, className);
	return (
		<div className={rootClassName} id="services">
			<Text className={s.title} variant="sectionHeading">
				{title}
			</Text>
			<div className={s.servicesContainer}>
				{services.map((serviceItem, idx) => (
					<div className={s.serviceItem} key={idx}>
						<div className={s.iconWrapper}>
							<img
								className={s.icon}
								src={serviceItem["iconType"]}
								alt={`${serviceItem["title"]} service icon`}
							/>
						</div>
						<div className={s.serviceTitle}>{serviceItem["title"]}</div>
						<div className={s.serviceDescription}>{serviceItem["description"]}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default ServicesView;
