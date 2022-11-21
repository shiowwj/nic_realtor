import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";

export default function Article({ img, title, link, description }) {
	const descriptionToShortDesc = (des, wordNo) => {
		if (des.split(" ").length > wordNo) {
			return des.split(" ").slice(0, wordNo);
		} else {
			return des;
		}
	};

	const shortDescription = description
		? descriptionToShortDesc(description, 150)
		: "";

	const styles = {
		wrapper: `w-[350px] shadow-xl rounded-[20px] font-["Poppins"] bg-white `,
		title: `font-semibold text-left text-[16px] my-5  `,
		description: `text-left  text-[#464646] leading-loose `,
		readMore: `flex w-fit mt-[20px] text-[#382E53] font-medium ml-auto `,
		icon: `w-5 h-5 my-auto h-fit  `,
	};
	return (
		<div className={styles.wrapper}>
			<Image
				alt={title ? title : ""}
				src={img ? img : "/blog-image.jpg"}
				width={385}
				height={185}
				className="rounded-t-[20px]"
			/>
			<div className="p-[16px]">
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{shortDescription}</div>
				<div className={styles.readMore}>
					Read More
					<MdNavigateNext className={styles.icon} />
					<MdNavigateNext className={styles.icon + "ml-[-14px]"} />
				</div>
			</div>
		</div>
	);
}
