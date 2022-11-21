import { SlGraph } from "react-icons/sl";
import { GiShakingHands, GiPencilRuler } from "react-icons/gi";
import { TbMessages } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { BsDiagram3Fill } from "react-icons/bs";

export default function Services({}) {
	const styles = {
		wrapper: `text-center font-["Inter"] bg-white text-black lg:w-[1180px] mx-auto px-[50px] py-[70px] `,
		title: `text-[64px] leading-[70px] my-[90px]  `,
		services: "flex justify-center lg:text-left shrink gap-20  flex-wrap ",
		serviceDiv: "lg:w-[300px]  ",
		iconWrapper: "p-5 rounded-full w-fit mx-auto lg:mr-auto lg:ml-0 ",
		icon: " ",
		iconTitle: "font-semibold text-lg my-2 ",
		iconDesciption: "",
	};
	const ServicesList = [
		{
			id: 1,
			title: "Team Surveys & Reports",
			description:
				"Short, anonymous surveys track your team’s needs weekly so you can focus.",
			color: "red-100",
			icon: (
				<SlGraph className={styles.icon + " text-red-500"} size={28} />
			),
		},
		{
			id: 2,
			title: "Collaborative 1:1 ",
			description:
				"Build relationships by planning 1-on-1s and start meeting",
			color: "blue-100",
			icon: (
				<GiShakingHands
					className={styles.icon + "  text-indigo-800"}
					size={35}
				/>
			),
		},
		{
			id: 3,
			title: "Anonymous Messaging",
			description:
				"Develop trust in a safe channel for important conversations.",
			color: "red-100",
			icon: (
				<TbMessages
					className={styles.icon + " text-[#F65D88] "}
					size={35}
				/>
			),
		},
		{
			id: 4,
			title: "Exclusives Manager",
			description:
				"Access manager tips, activities and best practices from our team of experts.",
			color: "orange-100",
			icon: (
				<GrUserManager
					className={styles.icon + " text-orange-500 "}
					size={35}
				/>
			),
		},
		{
			id: 5,
			title: "Conversation Engine",
			description:
				"Communicate confidently with recommended talking points.",
			icon: (
				<BsDiagram3Fill
					className={styles.icon + " text-[#5526B3] "}
					size={35}
				/>
			),
		},
		{
			id: 6,
			title: "Learning Center",
			description:
				"Quickly get solutions tailored to your personal challenges from the manager.",
			icon: <GiPencilRuler className={styles.icon} size={28} />,
		},
	];

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Services</div>
			<div className={styles.services}>
				{ServicesList.map((s) => (
					<div className={styles.serviceDiv} key={s.id}>
						<div className={styles.iconWrapper + `bg-${s.color}`}>
							{s.icon}
						</div>
						<div className={styles.iconTitle}>{s.title}</div>
						<div className={styles.iconDesciption}>
							{s.description}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
