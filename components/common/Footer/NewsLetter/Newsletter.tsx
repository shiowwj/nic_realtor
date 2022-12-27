import axios from "axios";
import { FC, useState } from "react";
import cn from "clsx";

import s from "./Newsletter.module.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorMsg from "../../ErrorMessage/ErrorMessage";
import { NewsletterValues } from "@customTypes/newsletter";
import { Button } from "@components/ui";

interface Props {
	className?: string;
	// slice?: any;
	// variant?: "blog" | "consult";
}

const Newsletter: FC<Props> = ({ className }) => {
	const rootClassName = cn(s.root, className);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewsletterValues>({});
	const [handleFormSubmit, sethandleFormSubmit] = useState(false);
	const [handleDisableFormSubmit, setHandleDisableFormSubmit] = useState(false);
	const onSubmit = async (formData: Record<string, any>) => {
		sethandleFormSubmit(true);
		try {
			const response = await axios.post("/api/newsletter-subscribe", formData);
			if (response.status !== 200) {
				// 6. if no app id display error / something went wrong
				// setSubmitError(true)
				return;
			}
			setHandleDisableFormSubmit(true);
		} catch (error) {
			console.error("failed to submitform", error);
			// setSubmitError(true)
			return;
		}
	};
	const onErrors = (errors: any) => {
		// console.error('form errors', errors)
	};
	return (
		<div className={rootClassName}>
			<div className={s.wrapper}>
				<h2 className={s.newslettertitle}>
					Newsletter<span className="text-lg ml-3"> (no spam, i promise)</span>{" "}
				</h2>
				<p className={s.newsletterdescription}>Get informed on the current market trends & practical real estate investment insights</p>
				<form onSubmit={handleSubmit(onSubmit, onErrors)}>
					<div className={s.fieldset}>
						<div className="relative w-full">
							<label htmlFor="email" className="hidden mb-2 text-sm font-medium text-site-p-dark ">
								Email address
							</label>
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg className="w-5 h-5 text-site-s-dark " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
							</div>
							<input
								className={handleDisableFormSubmit ? s.inputDisable : s.input}
								placeholder="Enter your email"
								type="email"
								id="email"
								disabled={handleDisableFormSubmit}
								{...register("email", { required: "This is required" })}
							/>
							
						</div>
						<div>
							{!handleDisableFormSubmit ? (
								<button type="submit" className={s.submitbutton}  disabled={handleDisableFormSubmit}>
									Subscribe
								</button>
							) : (
								<></>
							)}
						</div>
            
					</div>
          <div className="flex justify-center px-16">
          <ErrorMessage errors={errors} name="email" render={({ message }) => <ErrorMsg message={message} />} />

          </div>
					{/* <div className={s.privacyBlock}>
						We care about the protection of your data.{" "}
						<a href="#" className="font-medium text-primary-600  hover:underline">
							Read our Privacy Policy
						</a>
						.
					</div> */}
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
