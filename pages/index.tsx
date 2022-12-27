import Head from "next/head";
// import Footer from "../components/footer.js";

import { BlogsView, ContactForm, CtaView, Footer, HeroView, Navbar, ServicesView, SocialFeedView } from "@components/common";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { HERO_SECTION, PAGE_LINKS, SERVICES, BLOG_LINKS } from "@config/site.config";
import { Wave } from "@components/ui";
import { initIGPost } from "@lib/instagramapi/instagram";

import { createClient } from "@prismicio/client";
import sm from "../sm.json";

export const getStaticProps = async ({ previewData }: GetStaticPropsContext) => {
	const client = createClient(sm.apiEndpoint as string);
	const servicePage = await client.getByUID("articles_section", "latest-research-articles");
	const consultationSection = await client.getByUID("articles_section", "consultation-block");
	const ctaSection = await client.getByUID("cta_learn_more", "cta-learnmore-block");

	const igPosts = await initIGPost();
	const heroContent = HERO_SECTION;
	const pageLinks = PAGE_LINKS;
	const servicesContent = SERVICES;
	const blogContent = BLOG_LINKS;
	// console.log(igPosts.length)
	// console.log('ctaSection',ctaSection)
	return {
		props: {
			heroContent,
			pageLinks,
			servicesContent,
			blogContent,
			igPosts,
			servicePage,
			consultationSection,
			ctaSection,
		},
	};
};

// igPosts
export default function Home({
	heroContent,
	pageLinks,
	servicesContent,
	blogContent,
	igPosts,
	servicePage,
	consultationSection,
	ctaSection,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Nicole Lee - Properlee Property</title>
			</Head>
			<div className="scroll-smooth transition-all bg-site-p-light text-site-p-dark overflow-x-hidden">
				<HeroView
					imgUrl={heroContent.imgUrl}
					title={heroContent.title}
					subheading={heroContent.subheading}
					ctaButtonText={heroContent.ctaButtonText}
					link={"#services"}
				>
					<Navbar pageLinks={pageLinks} />
				</HeroView>
				<Wave className={"fill-site-p-light"} />
				<ServicesView title={servicesContent.title} caption={servicesContent.caption} services={servicesContent.listOfServices} />

				{/* <BlogsView slice={servicePage.data.slices} variant={'blog'}/> */}

				<SocialFeedView igPosts={igPosts} />
				<BlogsView slice={consultationSection.data.slices} variant={"consult"} />
				{/* <Instagram posts={examplePosts} /> */}
				<CtaView slice={ctaSection.data.slices} />
				<ContactForm />
				{/* <Contact /> */}
				<Footer />
			</div>
		</>
	);
}
