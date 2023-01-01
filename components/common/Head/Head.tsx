import { SEO } from "@components/common";
import Script from "next/script";

const Head = () => {
	return (
		<SEO>
			<meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="manifest" href="/site.webmanifest" key="site-manifest" />\
			<link rel="icon" href="/favicon.png" />
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
			<Script id="google-analytics" strategy="lazyOnload">
				{`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });`}
			</Script>
		</SEO>
	);
};

export default Head;
