import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";
import Navbar from "./navbar.js";
export default function Header({
	img,
	title,
	link,
	onClick,
	subHeading,
	buttonText,
}) {
	const styles = {
		header: "w-screen justify-center bg-red-900 text-center flex h-[750px] text-white ",
		wrapper: "h-fit m-auto",
		title: `font-["Arapey"] pt-[120px] lg:text-[64px] text-5xl leading-[70px] `,
		subHeading: `lg:w-[560px] text-[18px] leading-loose my-[25px] font-["Noto_Sans"]  `,
		button: "bg-blue w-[365px] m-auto h-[55px] shadow-xl flex font-['Montserrat'] ",
		icon: "h-8 w-8 text-white mt-[120px] mx-auto animate-bounce ",
	};
	return (
		<div>
			<Navbar />
			<div
				style={{
					backgroundImage: `url(${img})`,
				}}
				className={styles.header}
			>
				<div className={styles.wrapper}>
					<div className={styles.title}>
						{title ? title : "Realtor Serving You"}
					</div>
					<div className={styles.subHeading}>
						{subHeading
							? subHeading
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu"}
					</div>
					<Link href={link ? link : ""}>
						<div className={styles.button}>
							<div className="h-fit m-auto">
								{buttonText ? buttonText : "Learn More"}
							</div>
						</div>
					</Link>
					<Link href="#cta" scroll={false}>
						<AiOutlineArrowDown className={styles.icon} />
					</Link>
				</div>
			</div>
		</div>
	);
}
