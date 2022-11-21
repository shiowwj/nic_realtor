import { useFormik } from "formik";
import * as Yup from "yup";

export default function InputForm({}) {
	const styles = {
		wrapper: `bg-pink text-center lg:p-[70px] p-10 `,
		title: `font-["Poppins"] mt-[90px] lg:text-[64px] text-5xl font-semibold leading-[70px] lg:mb-[90px] mb-20  `,
		formWrapper: `flex lg:w-[1160px] justify-between mx-auto gap-5 flex-wrap  font-["Montserrat"] `,
		inputDiv: `w-[565px]  shrink`,
		inputDivFull: `w-full `,
		input: ` border-[#717171] w-full text-black bg-transparent px-3 py-3 placeholder-opacity-100 placeholder:capitalize placeholder:text-black  border-b-2`,
		submit: "h-[90px] w-[150px] shadow-xl bg-blue mt-[90px] rounded-[15px] font-bold text-white mx-auto ",
	};

	const formik = useFormik({
		initialValues: {
			Subject: "",
			name: "",
			email: "",
			Phone: "",
			Organization: "",
			Message: "",
		},

		validationSchema: Yup.object({
			name: Yup.string()
				.min(5, "Invalid Name.")
				.max(20, "Too LOng Name")
				.required("Name is required"),
			Subject: Yup.string().required("Subject is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			Phone: Yup.number().required("Phone is required"),
		}),

		onSubmit: (values) => {
			console.log("form submitted");
			alert("Message Recieved");
		},
	});

	const fields = [
		{
			inputType: "text",
			id: "name",
			label: "name",
			required: true,
		},

		{
			inputType: "email",
			label: "email",
			id: "email",
			required: true,
		},

		{
			inputType: "number",
			id: "Phone",
			label: "Phone",
			required: true,
		},
		{
			inputType: "text",
			label: "Organization",
			id: "Organization",
		},

		{
			inputType: "text",
			id: "Message",
			label: "Message",
			multiline: true,
			fullwidth: true,
		},
	];

	const helpertext = (f) => {
		errors.includes(f.id) ? "Please Fill This Field" : "Required";
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>LET’S WORK TOGETHER</div>

			<form action="" className="w-full" onSubmit={formik.handleSubmit}>
				<div className={styles.formWrapper}>
					<div className={styles.inputDivFull}>
						<select
							className={styles.input}
							name="Subject"
							placeholder="How Can We Help You?*"
							onChange={formik.handleChange}
							value={formik.values.Subject}
							onBlur={formik.handleBlur}
						>
							<option value="Lorem Ipsum">Lorem Ipsum</option>
							<option value="Lorem Ipsum ">Lorem Ipsum</option>
							<option value="Lorem Ipsum ">Lorem Ipsum</option>
							<option value="Lorem Ipsum ">Lorem Ipsum</option>
						</select>
						<p className="text-sm text-left h-fit font-latoBold text-red-900 ">
							{formik.touched.Subject && formik.errors.Subject
								? formik.errors.Subject
								: ""}
						</p>
					</div>

					{fields.map((f) => (
						<div
							key={f.id}
							className={
								f.fullwidth
									? styles.inputDivFull
									: styles.inputDiv
							}
						>
							<div className="pb-4">
								<textarea
									cols={f.multiline ? 4 : 1}
									className={styles.input}
									type={f.type}
									name={f.id}
									placeholder={
										f.required ? f.label + "*" : f.label
									}
									onChange={formik.handleChange}
									value={formik.values[f.id]}
									onBlur={formik.handleBlur}
								/>
								<p className="text-sm text-left font-latoBold text-red-900 ">
									{formik.touched[f.id] && formik.errors[f.id]
										? formik.errors[f.id]
										: ""}
								</p>
							</div>
						</div>
					))}
					<button type="submit" className={styles.submit}>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}
