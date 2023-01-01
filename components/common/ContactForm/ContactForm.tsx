import { FC, useState } from "react";
import cn from "clsx";
import * as gtag from '@lib/ga/googletag'
import s from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@components/ui";
import { ErrorMessage } from "@hookform/error-message";
import ErrorMsg from "../ErrorMessage/ErrorMessage";
import { ContactFormValues, TypeOfServices } from "@customTypes/contactform";
import axios from "axios";
import { useRouter } from "next/router";

interface Props {
	className?: string;
	// slice?: any;
	// variant?: "blog" | "consult";
}

const ContactForm: FC<Props> = ({ className }) => {
	const rootClassName = cn(s.root, className);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormValues>({});
	 const router = useRouter();
	const [handleFormSubmit, sethandleFormSubmit] = useState(false);
	const [handleDisableFormSubmit, setHandleDisableFormSubmit] = useState(false);
	const onSubmit = async (formData: Record<string, any>) => {
		sethandleFormSubmit(true);
		gtag.event({
      action: "Submit Contact Me Form", 
			category: "button click",
			label: "button",
			value: "Submit Contact Me Form button click"
    })
		try {
			const response = await axios.post("/api/contact-form", formData);
			if (response.status !== 200) {
				// 6. if no app id display error / something went wrong
				// setSubmitError(true)
				return;
			}
			setHandleDisableFormSubmit(true);
			gtag.conversionBookAppointment(router.pathname)
		} catch (error) {
			console.error("failed to submitform", error);
			// setSubmitError(true)
			return;
		}
	};

	const onErrors = (errors: any) => {
		// console.error('form errors', errors)
	};
	// console.log(errors);
	return (
		<section className={rootClassName} id={`contact-form`}>
			<div className={s.title}>{`Contact Me`}</div>
			<div className="flex-1 pb-2">
				<form onSubmit={handleSubmit(onSubmit, onErrors)}>
					<div className={s.sectionRoot}>
						<div className="px-4 sm:px-6 flex-1 pb-2">
							{/* Name */}
							<div className="grid gap-3 grid-flow-row grid-cols-12">
								<div className={cn(s.fieldset, "col-span-full")}>
									<label htmlFor="name" className="hidden mb-2 text-sm font-medium text-site-s-dark">
										Name
									</label>
									<input
										className={handleDisableFormSubmit ? s.inputDisable : s.input}
										type="text"
										autoComplete=""
										placeholder="How do I address you?*"
										disabled={handleDisableFormSubmit}
										{...register("name", { required: "This is required" })}
									/>
									<ErrorMessage errors={errors} name="name" render={({ message }) => <ErrorMsg message={message} />} />
								</div>
							</div>

							{/* phone number + service */}
							<div className="grid gap-3 grid-flow-row grid-cols-12 item-end">

								<div className={cn(s.fieldset, "col-span-6")}>
									<label htmlFor="typeOfConsultation" className="hidden mb-2 text-sm font-medium text-site-s-dark">
										Type of Consultation
									</label>
									<select
										placeholder="How Can I Help You?*"
										className={handleDisableFormSubmit ? s.inputDisable : s.input}
										disabled={handleDisableFormSubmit}
										{...register("typeOfConsultation", { required: "This is required" })}
									>
										<option value="">Select a service</option>
										<option value={TypeOfServices.BUY}>Buy</option>
										<option value={TypeOfServices.SELL}>Sell</option>
										<option value={TypeOfServices.RENT}>Rent</option>
										<option value={TypeOfServices.INVESTMENT}>Investment</option>
										<option value={TypeOfServices.PROPERTYWEALTHPLANNING}>Property Wealth Planning</option>
										<option value={TypeOfServices.OTHERS}>Others</option>
									</select>
									<ErrorMessage errors={errors} name="typeOfConsultation" render={({ message }) => <ErrorMsg message={message} />} />
								</div>

								<div className={cn(s.fieldset, "col-span-6")}>
									<label htmlFor="phone" className="hidden mb-2 text-sm font-medium text-site-s-dark">
										Phone Number
									</label>
									<input
										className={handleDisableFormSubmit ? s.inputDisable : cn(s.input, s.removeWebkit)}
										type="number"
										autoComplete=""
										placeholder="Contact Number*"
										disabled={handleDisableFormSubmit}
										{...register("phone", { required: "This is required", setValueAs: (v) => v.toString() })}
									/>
									<ErrorMessage errors={errors} name="phone" render={({ message }) => <ErrorMsg message={message} />} />
								</div>
							</div>

								{/* consultation type */}
							{/* <div className="grid gap-3 grid-flow-row grid-cols-12">

							</div> */}
							{/* email */}
							<div className="grid gap-3 grid-flow-row grid-cols-12">
								<div className={cn(s.fieldset, "col-span-8")}>
									<label htmlFor="email" className="hidden mb-2 text-sm font-medium text-site-s-dark">
										Email Address
									</label>
									<input
										className={handleDisableFormSubmit ? s.inputDisable : s.input}
										type="email"
										autoComplete=""
										placeholder="Email*"
										disabled={handleDisableFormSubmit}
										{...register("email", { required: "This is required" })}
									/>
									<ErrorMessage errors={errors} name="email" render={({ message }) => <ErrorMsg message={message} />} />
								</div>
							</div>

							{/* message */}
							<div className="grid gap-3 grid-flow-row grid-cols-12">
								<div className={cn(s.fieldset, "col-span-full")}>
									<label htmlFor="message" className="hidden mb-2 text-sm font-medium text-site-s-dark">
										Additional Message
									</label>
									<textarea
										className={handleDisableFormSubmit ? s.inputDisable : s.input}
										autoComplete=""
										placeholder="Write a message here*"
										disabled={handleDisableFormSubmit}
										{...register("message", { required: "This is required", maxLength: 1000 })}
									/>
									<ErrorMessage errors={errors} name="message" render={({ message }) => <ErrorMsg message={message} />} />
								</div>
							</div>
						</div>
					</div>

					<div className="h-full mx-auto mt-6">
						<div className="px-4 sm:px-6 flex">
							{!handleDisableFormSubmit ? (
								<Button type="submit" variant="form" className={s.contactButton} loading={handleFormSubmit} disabled={handleDisableFormSubmit}>
									{`Submit`}
								</Button>
							) : (
								<Button type="submit" variant="form" className={s.contactButtonDisabled} loading={false} disabled={handleDisableFormSubmit}>
									{`Let me reach out to you :)`}
								</Button>
							)}
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
