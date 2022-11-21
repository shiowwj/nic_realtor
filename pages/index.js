import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header.js";
import Blogs from "../components/blogs.js";
import Instagram from "../components/instragamPosts.js";
import Services from "../components/services.js";
import Contact from "../components/contact.js";
import CtaForm from "../components/ctaForm.js";
import Footer from "../components/footer.js";

export default function Home() {
  //example blog list

  const exampleBlogs = [
    {
      id: 1,
      img: "/blog-image.jpg",
      title: "Viverra accumsan, sed vestibulum sit turpis neque, sit.",
      description:
        "At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas. Congue neque in mi vulputate tincidunt amet arcu varius pulvinar.",
      link: "",
    },
    {
      id: 2,
      img: "/blog-image.jpg",
      title: "Viverra accumsan, sed vestibulum sit turpis neque, sit.",
      description:
        "At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas. Congue neque in mi vulputate tincidunt amet arcu varius pulvinar.",
      link: "",
    },
    {
      id: 3,
      img: "/blog-image.jpg",
      title: "Viverra accumsan, sed vestibulum sit turpis neque, sit.",
      description:
        "At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas. Congue neque in mi vulputate tincidunt amet arcu varius pulvinar.",
      link: "",
    },
  ];

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
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>{" "}
      <div className="scroll-smooth transition-all bg-white text-black overflow-x-hidden">
        <Header
          //image file link
          img=""
          //Header heading title
          title="Realtor Serving You"
          //button link
          link="#button-link"
          //Sub Heading Text
          subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu"
          //Button text
          buttonText="Click Now"
        />
        <Services />
        <Blogs blogs={exampleBlogs} />
        <Instagram posts={examplePosts} />
        <CtaForm />
        <Contact />
        <Footer
          expertLinkList={linkList}
          companyLinkList={linkList}
          connectLinkList={linkList}
        />
      </div>
    </>
  );
}
