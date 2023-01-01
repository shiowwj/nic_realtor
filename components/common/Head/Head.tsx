import { SEO } from "@components/common";
import Script from "next/script";

const Head = () => {
	return (
		<SEO>
			<meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="manifest" href="/site.webmanifest" key="site-manifest" />\
			<link rel="icon" href="/favicon.png" />
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			

		</SEO>
	);
};

export default Head;
