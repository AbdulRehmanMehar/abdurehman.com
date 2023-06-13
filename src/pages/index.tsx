import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import IntroHeader from "@/components/IntroHeader";
import WorkSection from "@/components/WorkSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdul Rehman - Full Stack Application Developer</title>
        <meta
          name="description"
          content={`
          I am a highly skilled and passionate full stack developer aka software engineer with a proven track record of delivering exceptional results for high-profile clients. My expertise includes Frontend, Backend, and Desktop Application Development, and I have a solid understanding of logic building and problem-solving.
        `}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="author"
          content="Abdul Rehman [contact@abdurehman.com, mehars.6925@gmail.com]"
        />
        <meta
          name="publisher"
          content="Abdul Rehman [contact@abdurehman.com, mehars.6925@gmail.com]"
        />
        <meta
          name="keywords"
          content="Frontend Developer, Backend Developer, Desktop Developer, Full Stack Developer, Software Engineer, React Developer, Vue Developer, MERN Stack Developer, Node Developer, Laravel Developer, Electron Developer, AWS Lambda and Node Developer, Senior Full Stack Developer"
        />
      </Head>
      <Navbar />
      <IntroHeader />
      <WorkSection></WorkSection>
    </>
  );
}
