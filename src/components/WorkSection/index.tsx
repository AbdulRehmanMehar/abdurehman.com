import { Montserrat } from "@/config/fonts";
import SlimBoldText from "../SlimBoldText";

export default function WorkSection() {
  return (
    <div className="mx-12">
      <h2
        className={`text-xl my-2 ${Montserrat.className} tracking-widest font-light`}
      >
        <SlimBoldText>Work Portfolio</SlimBoldText>
      </h2>
    </div>
  );
}
