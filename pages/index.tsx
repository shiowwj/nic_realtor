import Head from "next/head";
import Contact from "../components/contact.js";
import CtaForm from "../components/ctaForm.js";
import Footer from "../components/footer.js";

import { BlogsView, HeroView, Navbar, ServicesView, SocialFeedView } from "@components/common";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { HERO_SECTION, PAGE_LINKS, SERVICES, BLOG_LINKS } from "@config/site.config";
import {  Wave } from "@components/ui";
import { initIGPost } from "@lib/instagramapi/instagram";

// import { Wave } from "@components/ui/index.js";

export const getStaticProps = async ({}: GetStaticPropsContext) => {
	const igPosts = await initIGPost();

	const heroContent = HERO_SECTION;
	const pageLinks = PAGE_LINKS;
	const servicesContent = SERVICES;
	const blogContent = BLOG_LINKS;
	return {
		props: {
			heroContent,
			pageLinks,
			servicesContent,
			blogContent,
			igPosts
		},
	};
};

//example instragram posts
const examplePosts = [
	{
		id: "1",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "2",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "3",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "4",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "5",
		img: "/blog-image.jpg",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "6",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "7",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "8",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
	{
		id: "9",
		caption: "Viverra accumsan, sed vestibulum sit turpis neque, sit",
		date: "06-06-2000",
	},
];

//example footer link list
const linkList = [
	{
		id: "1",
		text: "Home",
		link: "/",
	},
	{
		id: "2",
		text: "Home",
		link: "/",
	},
	{
		id: "3",
		text: "Home",
		link: "/",
	},
];
export default function Home({ heroContent, pageLinks, servicesContent, blogContent, igPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Properlee Property</title>
			</Head>
			<div className="scroll-smooth transition-all bg-site-p-light text-site-p-dark overflow-x-hidden">
				<HeroView imgUrl={heroContent.imgUrl} title={heroContent.title} subheading={heroContent.subheading} ctaButtonText={heroContent.ctaButtonText}>
					<Navbar pageLinks={pageLinks} />
				</HeroView>
				<Wave className={"fill-site-p-light"} />
				<ServicesView title={servicesContent.title} caption={servicesContent.caption} services={servicesContent.listOfServices} />

				{/* <Services /> */}
				{/* <Blogs blogs={exampleBlogs} /> */}
				<div className="spacer layer1"></div>
				<BlogsView title={blogContent.title} caption={blogContent.caption} blogPosts={blogContent.blogPosts} />
				<SocialFeedView igPosts={igPosts}/>

				{/* <Instagram posts={examplePosts} /> */}
				<CtaForm />
				<Contact />
				{/* <Footer expertLinkList={linkList} companyLinkList={linkList} connectLinkList={linkList} /> */}
			</div>
		</>
	);
}
