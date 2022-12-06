import { AiOutlineArrowDown } from "react-icons/ai";
import Article from "./article.js";
import { MdNavigateNext } from "react-icons/md";

export default function Blogs({ blogs }) {
	const styles = {
		wrapper:
			"w-screen bg-site-p-pink text-center text-black lg:px-[75px] px-5 py-[30px] ",
		title: `font-["Arapey"]  text-[64px] leading-[70px] mb-[90px]  `,
		subHeading: `w-[560px] text-[18px] leading-loose my-[25px] font-["Noto_Sans"]  `,
		articles: `flex gap-10 flex-wrap  justify-center lg:flex-nowrap shrink `,
		btn: `flex w-fit m-[50px] text-[#382E53] font-medium ml-auto `,
		icon: `w-5 h-5 my-auto h-fit  `,
	};
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.title}>Latest Research Articles</div>
				<div className={styles.articles}>
					{blogs.map((b) => (
						<Article
							key={b.id}
							img={b.img}
							title={b.title}
							description={b.description}
							link={b.link}
						/>
					))}
				</div>
				<div className={styles.btn}>
					More Article
					<MdNavigateNext className={styles.icon} />
					<MdNavigateNext className={styles.icon + "ml-[-14px]"} />
				</div>
			</div>
		</div>
	);
}
