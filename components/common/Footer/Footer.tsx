import { FC } from "react";
import cn from "clsx";
import { Email, Location, WhatsApp } from "@components/icons";

import s from "./Footer.module.css";
import NewsLetter from "./NewsLetter";

interface Props {
	className?: string;
	// slice?: any;
	// variant?: "blog" | "consult";
}

const Footer: FC<Props> = ({ className }) => {
	const rootClassName = cn(s.root, className);
	return (
		<>
			<section className={rootClassName}>
				<NewsLetter />
				{/* email + location + phone  */}
				<div className="">
					<div className="grid gap-3 grid-flow-row grid-cols-12">
						<div className={s.contactBlock}>
							<a
								href="https://api.whatsapp.com/send?phone=6591297537&text=I'm%20interested%20in%20enquirying%20for%20..."
								target="_blank"
								rel="noreferrer"
							>
								<div className="flex flex-col items-center">
									<WhatsApp />
									<h3 className="mt-3">{`+65 9129 7537`}</h3>
									<h3 className="mt-1 text-green">{`24/7 WhatsApp Availability`}</h3>
								</div>
							</a>
						</div>
						<div className={s.contactBlock}>
							<a href="https://www.google.com/maps?q=3+Bishan+Pl,+#05-01%20CPF%20Building,%20Singapore%20579838" target="_blank" rel="noreferrer">
								<div className="flex flex-col items-center">
									<Location />
									<h3 className="mt-3">{`3 Bishan Pl, #05-01 CPF Building, Singapore 579838`}</h3>
								</div>
							</a>
						</div>
						<div className={s.contactBlock}>
						<a href="mailto:nicolelee.propertysg@gmail.com?subject=Enquiry%20Property" target="_blank" rel="noreferrer">
							<div className="flex flex-col items-center">
								<Email />
								<h3 className="mt-3">{`nicolelee.propertysg@gmail.com`}</h3>
							</div>
							</a>
						</div>
					</div>
				</div>
			</section>
			<hr></hr>
			{/* disclaimer */}
			<div className="text-center p-6 flex flex-col font-light">
				<span>
					© 2022 Copyright:{" "}
					<a className="text-site-s-dark font-semibold" href="https://www.linkedin.com/in/nicolepropertyproperlee" target="_blank" rel="noreferrer">
						Nicole Lee
					</a>{" "}
				</span>

				<span className="text-sm mt-3 ">
					{`Disclaimer: The case studies are for educational use only and we make no representation or warranties with respect to the accuracy,
					applicability, or completeness of its contents. Any forward-looking statements outlined in this landing page are simply our opinions,
					estimates, expectations or forecasts for future potential, and thus are not guarantees or promises for actual performance. As required by
					law, we can make no guarantees that you will achieve any results. Results will vary from case to case.`}
				</span>
				<span className="text-sm mt-3 ">
					{`In adherence to the Personal Data
					Protection Act, by submitting your personal particulars through the forms in this website, you are hereby agreeing to allow us to contact
					you via the contact information you have provided.`}
				</span>
			</div>
		</>
	);
};

export default Footer;
