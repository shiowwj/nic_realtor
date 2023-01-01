// log the pageview with their URL
export const pageview = (url) => {
	window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
		page_path: url,
	});
};

// log specific events happening.
export const event = ({ action, category, label, value }) => {
	window.gtag("event", action, {
		event_category: category,
		event_label: label,
		value,
	});
};

export const conversionBookAppointment = (url) => {
	let callback = function () {
		if (typeof url != "undefined") {
			window.location = url;
		}
	};
	window.gtag("event", "conversion", { send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS}/JgPACJav44YYEJWuh48p` });
};
