import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ForegroundImage from "../../assets/images/myself_bg.png";
import WaterMark from "../../assets/images/watermark.png";
import LeftSide from "../../assets/images/graph.png";
import Link from "next/link";
import ChangingLetters from "../Typography/ChangingLetters";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function IntroHeader() {
  return (
    <div className="relative">
      <Image
        priority
        className="absolute top-2 right-0"
        height={670}
        src={ForegroundImage}
        alt="Abdul Rehman - Full Stack Developer"
      />
      <Image
        priority
        className="absolute left-0 opacity-[0.02] -z-10"
        fill
        style={{ objectFit: "cover" }}
        src={LeftSide}
        alt="Abdul Rehman - Full Stack Developer"
      />

      <div className="mx-20">
        <div className="flex justify-center flex-col min-h-[500px] mx-28">
          <div className="lg:w-1/3 md:w-1/3">
            <p className="ml-1 text-sm block">Hello! I am Abdul Rehman, a</p>
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
              5+ years of experience. Specialized in UX, SPAs, SSR, SaaS,
              Desktop Applications and Backend Infrastructures.
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
          </div>
        </div>
      </div>
    </div>
  );
}
