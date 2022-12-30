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

const Noop: FC<{ children?: ReactNode }> = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const Layout = (Component as any).Layout || Noop;

	useEffect(() => {
		document.body.classList?.remove("loading");
	}, []);

	return (
		<>
		<Head/>
			{/* <Head>
				<title>Nicole Lee - Properlee Property</title>
				<meta
					name="description"
					content="Hi there, I'm Nicole Lee a bubbly real estate agent/content creator with a mission to add value to people's lives!"
					key="desc"
				/>
				<meta property="og:title" content="Nicole Lee - Properlee Property" />
				<meta property="og:description" content="Hi there, I'm Nicole Lee a bubbly real estate agent/content creator with a mission to add value to people's lives!" />
				<meta property="og:image" content="/public/favicon.ico" />

			</Head> */}
			{/* <Head/> */}
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
