import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ForegroundImage from "../../assets/images/myself_bg.png";
import SmallForegroundImage from "../../assets/images/myself_sm.png";
import WaterMark from "../../assets/images/watermark.png";
import LeftSide from "../../assets/images/graph.png";
import Link from "next/link";
import ChangingLetters from "../Typography/ChangingLetters";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "@/helpers/hooks";
import {
  NextjsOriginalWordmark,
  ReactOriginal,
  NodejsPlain,
  ElectronOriginal,
  PostgresqlOriginal,
  MongodbOriginal,
  MysqlOriginal,
  VuejsOriginal,
  NextjsOriginal,
  ExpressOriginal,
} from "devicons-react";

export default function IntroHeader() {
  const { width } = useWindowDimensions();
  const isSmallDevice = width && width < 768;

  return (
    <div className="relative h-auto py-5 overflow-x-clip sm:pt-28">
      {isSmallDevice ? (
        <Image
          priority
          className="rounded-full my-5 mx-4 w-28 h-28"
          src={SmallForegroundImage}
          style={{ objectFit: "cover" }}
          title="Abdul Rehman"
          alt="Small Image of Abdul Rehman aka Software Engineer"
        />
      ) : (
        <>
          <Image
            priority
            className="absolute top-2 right-0 sm:hidden md:-right-1/3 lg:-right-1/4"
            height={670}
            src={ForegroundImage}
            title="Abdul Rehman"
            alt="Image of Abdul Rehman aka Full Stack Developer"
          />
          <Image
            className="absolute left-0 opacity-[0.02] -z-10"
            fill
            style={{ objectFit: "cover" }}
            src={LeftSide}
            alt="Background Cover - abdurehman.com"
          />
        </>
      )}

      <div className="mx-20 md:mx-10 sm:mx-4 relative">
        <div className="flex justify-center flex-col min-h-[500px] sm:min-h-0 lg:mx-28 xl:mx-28">
          <div className="w-1/3 md:w-1/3 sm:w-full">
            <p className="ml-1 text-sm block">Hello! I am Abdul Rehman</p>
            <h1 className="block text-2xl font-bold text-primary w-max border-r-8 outline-offset-2">
              <ChangingLetters className="pr-4">
                <span title="Developing scalable softwares for years.">
                  Software Engineer
                </span>
                <span title="Developed high performant backend infrastructures with Node.Js">
                  Node Technician
                </span>
                <span title="Expert React.js Developer, built dynamic, initutive & user friendly UIs for numerous clients">
                  React Artisan
                </span>
                <span title="Worked for Zepto.ai & Replayable.io as an Electron Developer, for their cross-platform Desktop Applications">
                  Electron Craftsman
                </span>
                <span title="Has expertise in Frontend, Backend & Desktop Application Development.">
                  Full Stack Developer
                </span>
              </ChangingLetters>
            </h1>
            <p className="ml-1 text-sm my-4 opacity-60">
              Specialized in UX, SPAs, SSR, SaaS, Desktop Applications and
              Backend Infrastructures.
            </p>

            <p className="text-sm ml-1 mt-6">
              <Link className="underline-offset-8 underline" href="#">
                <FontAwesomeIcon
                  className="text-sm mr-2 animate-bounce"
                  icon={faArrowDown}
                ></FontAwesomeIcon>
                <span>My Work</span>
              </Link>
            </p>
            <div
              title="Tech Stacks I've worked on"
              className="absolute bottom-10 sm:relative sm:mt-32"
            >
              <div>
                <ChangingLetters className="mr-1" delay={3000}>
                  <span title="MongoDb">
                    <MongodbOriginal className="inline-block" size={40} />
                  </span>
                  <span title="MySQL">
                    <MysqlOriginal className="inline-block" size={40} />
                  </span>
                  <span title="PostgreSQL">
                    <PostgresqlOriginal className="inline-block" size={40} />
                  </span>
                </ChangingLetters>
                <span title="Express.Js">
                  <ExpressOriginal className="inline-block mx-1" size={40} />
                </span>
                <ChangingLetters delay={1000}>
                  <span title="React.Js">
                    <ReactOriginal className="inline-block mx-1" size={40} />
                  </span>
                  <span title="Vue.Js">
                    <VuejsOriginal className="inline-block mx-1" size={40} />
                  </span>
                  <span>
                    <NextjsOriginal className="inline-block mx-1" size={40} />
                  </span>
                </ChangingLetters>
                <span title="Node.Js">
                  <NodejsPlain className="inline-block ml-1" size={40} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
