import { AiOutlineArrowDown } from "react-icons/ai";
import Post from "./post.js";
import { MdNavigateNext } from "react-icons/md";
import { useEffect } from "react";

export default function InstragramPosts({ posts }) {
	const styles = {
		wrapper: "w-screen bg-blue text-center lg:px-[75px] px-5 py-[30px]  ",
		grid: "lg:grid flex flex-wrap justify-center  mx-auto gap-x-10 grid-cols-3 lg:w-[1180px] ",
	};
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.grid}>
					{posts.map((p) => (
						<div key={p.id}>
							{(posts.indexOf(p) + 2) % 3 === 0 ? (
								<Post
									img={p.img}
									title={p.caption}
									date={p.date.split("-").slice(0, 2)}
									year="2022"
									link={p.link}
								/>
							) : (
								<div className="lg:mt-10 ">
									<Post
										img={p.img}
										title="Follow For More"
										date={p.date.split("-").slice(0, 2)}
										year="2022"
										link={p.link}
									/>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
