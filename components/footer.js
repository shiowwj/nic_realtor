import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

export default function Header({
	logo,
	companyLinkList,
	connectLinkList,
	expertLinkList,
	termLink,
	privacyLink,
}) {
	const [email, setEmail] = useState("");
	const subscribe = () => {
		if (!isValidEmail(email)) {
			alert("Not a Valid Email");
		} else {
			alert("Subscribed Succeessfully");
		}
	};
	const styles = {
		wrapper:
			" justify-center gap-10  text-center text-black lg:w-[1180px] mx-auto shrink lg:flex p-10 lg:p-[50px]  ",
		logoDiv: "lg:w-1/3 lg:text-left ",
		logo: `font-["Arapey"]  text-[64px] leading-[70px] `,
		subHeading: ` text-[18px] leading-[1.5] font-semibold my-2 font-["Montserrat"]  `,
		iconWrapper:
			"p-2 rounded-md text-white bg-black w-fit  absolute ml-auto mt-auto inset-x-0 mt-[-1px] ",
		menuDiv: `lg:w-2/3 h-fit my-auto`,
		menus: `flex shrink lg:gap-20 text-left font-['Arapey'] gap-10 my-5 lg:my-0 text-[16px] uppercase `,
		menuItems: "text-[14px] mb-3 capitalize",
		newsletter: `lg:w-1/3 font-['Arapey'] w-3/5 relative lg:text-left text-[16px] uppercase w-fit mx-auto`,
		input: `  w-full text-black bg-white p-3 h-[40px] placeholder-opacity-100 placeholder:capitalize placeholder:text-black  `,
	};
	return (
		<div className="w-screen bg-light-blue">
			<div className={styles.wrapper}>
				<div className={styles.logoDiv}>
					<div className={styles.logo}>{logo ? logo : "logo"}</div>
					<div className={styles.subHeading}>
						The communications platform for companies where complete
						privacy is business critical.
					</div>
				</div>
				<div className={styles.menuDiv}>
					<div className="flex flex-wrap lg:flex-nowrap justify-center shrink  gap-10">
						<div className={styles.menus}>
							<div className={styles.menuList}>
								<div className="pb-5">company</div>
								{companyLinkList.map((l) => (
									<Link href={l.link} key={l.id}>
										<div className={styles.menuItems}>
											{l.text}
										</div>
									</Link>
								))}
							</div>
							<div className={styles.menuList}>
								<div className="pb-5">connect</div>
								{connectLinkList.map((l) => (
									<Link href={l.link} key={l.id}>
										<div className={styles.menuItems}>
											{l.text}
										</div>
									</Link>
								))}
							</div>
							<div className={styles.menuList}>
								<div className="pb-5">expert</div>
								{expertLinkList.map((l) => (
									<Link href={l.link} key={l.id}>
										<div className={styles.menuItems}>
											{l.text}
										</div>
									</Link>
								))}
							</div>
						</div>
						<div className={styles.newsletter}>
							Stay Up to Date
							<div
								className="cursor-pointer my-2 underline capitalize text-[14px] "
								onClick={subscribe}
							>
								Sign up for newsletter
							</div>
							<div className="my-2">
								<div className={styles.iconWrapper}>
									<BsFillPlayFill size={25} />
								</div>
								<input
									type="text"
									placeholder="email"
									className={styles.input}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex lg:w-[1180px] mx-auto p-10">
				<div className="mr-auto text-[16px]">
					2020 - Logo - All rights reserved
				</div>
				<div className="ml-auto flex gap-2 underline text-[14px] ">
					<Link href={termLink ? termLink : "/"}>
						<div>Terms</div>
					</Link>
					<Link href={privacyLink ? privacyLink : "/"}>
						<div>Privacy</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export const isValidEmail = (email) => {
	return /\S+@\S+\.\S+/.test(email);
};
