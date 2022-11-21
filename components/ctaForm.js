export default function CtaForm() {
	const styles = {
		wrapper:
			" bg-white text-black w-screen  text-center lg:p-[75px] py-10 ",
		title: `font-["Arapey"]  text-[64px] leading-[70px] lg:mt-[90px] mb-[35px]  `,
		subHeading: `lg:w-[620px] text-[24px] text-[#6D7D8B] mx-auto text-center leading-loose mb-[55px]  font-["Noto_Sans"]  `,
		button: "bg-blue w-[215px] text-white m-auto h-[55px] shadow-xl flex font-['Montserrat'] ",
	};

	return (
		<div className={styles.wrapper} id="cta">
			<div className={styles.title}>Need a Properlee?</div>
			<div className={styles.subHeading}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</div>
			<div className={styles.button}>
				<div className="h-fit m-auto">Learn More</div>
			</div>
		</div>
	);
}
