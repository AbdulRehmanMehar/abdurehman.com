"use client";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import IntroHeader from "@/components/IntroHeader";
import HeaderImage from "../assets/images/headerLogo.png";
import heroImage from "@/assets/images/HeroImage.svg";

import NavLink from "@/components/NavLink";
import Button from "@/components/Button";

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

      {/* Hero Section */}
      <section className="flex flex-row justify-between min-h-full relative sm:flex-col-reverse sm:pt-16 sm:justify-end sm:gap-2 md:flex-col-reverse md:pt-16 md:justify-end md:gap-5 sm:h-auto md:h-auto">
        <div className="flex flex-col justify-center">
          <p className="text-light-black mb-3 text-xs font-light">
            Transforming Ideas into Exceptional Web Experiences - Meet
          </p>
          <h1 className="text-black text-3xl sm:text-2xl">
            <small className="block text-sm sm:text-xs">
              Abdul Rehman, the&nbsp;
            </small>
            MERN Stack Developer
          </h1>
          <p className="text-light-black my-3 text-base sm:text-sm sm:my-3">
            By combining cutting-edge technologies, seamless integrations, and
            clean code practices, I create powerful and scalable solutions
            tailored to your specific needs.
          </p>
          <p className="flex flex-row gap-3 my-2 sm:gap-2">
            <Button variant="primary">Book a Call</Button>
            <Button variant="secondary">Learn More</Button>
          </p>
        </div>
        <div className="relative min-h-full min-w-[50%] sm:w-full sm:h-[400px] md:h-[600px] md:w-full">
          <Image
            className="object-contain object-[top_0_right_0] sm:object-cover md:object-cover"
            src={heroImage}
            alt=""
            fill
          ></Image>
        </div>
      </section>
    </>
  );
}
