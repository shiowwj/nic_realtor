// import Head from "next/head";
import "@styles/main.css";

import { FC, ReactNode, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Head } from "@components/common";
import Script from "next/script";

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const Layout = (Component as any).Layout || Noop;

	useEffect(() => {
		document.body.classList?.remove("loading");
	}, []);

	return (
		<>
			<Head />
			<Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						page_path: window.location.pathname,
					});
        `}
      </Script>
			<PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
				<PrismicPreview repositoryName={repositoryName}>
					<Layout pageProps={pageProps} currentPath={router.pathname}>
						<Component {...pageProps} />
					</Layout>
				</PrismicPreview>
			</PrismicProvider>
		</>
	);
}
