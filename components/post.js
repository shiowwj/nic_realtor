import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

export default function Post({ title, date, year, img }) {
	const styles = {
		wrapper: "lg:flex shrink gap-5 lg:my-0 my-5 text-black   ",
		main: `   p-10 rounded-[10px]  h-full h-[450px]  flex bg-cover flex-wrap `,
		animation: " cursor-pointer w-full h-full flex item-center flex-wrap ",
		indexDiv: "flex w-full mb-auto",
		index: "text-sm text-left w-1/2 ",
		showcase: "text-sm text-right w-1/2 ",
		title1: `text-3xl lg:my-auto w-[250px] mx-auto my-10 h-fit  text-center w-full`,
		backgroundImage: "bg-cover rounded-[10px]",
	};

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.backgroundImage}
				style={{
					backgroundImage: img
						? `url(${img})`
						: `url(/blog-image.jpg)`,
				}}
			>
				<div className={styles.main}>
					<div className={styles.animation}>
						<div className={styles.indexDiv}>
							<div className={styles.index}>{date}.</div>
							<div className={styles.showcase}>{year} </div>
						</div>
						<div className={styles.title1}>{title}</div>
						<div className="mt-auto w-full text-right hidden lg:block invisible">
							Read More
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
