import Image from "next/image";
import ForegroundImage from "../../assets/images/myself_bg.png";
import WaterMark from "../../assets/images/watermark.png";
import LeftSide from "../../assets/images/graph.png";

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
            <p className="ml-1 text-sm block">Hello! I am Abdul Rehman</p>
            <h2 className="block text-2xl mb-4 font-bold text-primary">
              Full Stack Developer
            </h2>
            <p className="ml-1 text-sm opacity-60">
              5+ years of experience. Specialized in UX, SPAs, SSR, SaaS,
              Desktop Applications and Backend Infrastructures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
