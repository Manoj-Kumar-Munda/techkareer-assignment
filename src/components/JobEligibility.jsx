import React from "react";
import SkillBtn from "./SkillBtn";
import figmaIcon from "../assets/icons/figma.png";
import AdobeIllustratorIcon from "../assets/icons/adobeI.png";
import AdobeXdIcon from "../assets/icons/adobeXd.png";

const JobEligibility = () => {
  return (
    <div className="border-b">
      <div className="mt-4 mb-3 px-4 md:pl-10 flex gap-6 max-w-3xl justify-between flex-wrap">
        <div className="space-y-2">
          <h2 className="text-[#6E6D6D]">Skills required</h2>
          <div className="flex flex-col gap-2">
            <SkillBtn icon={figmaIcon} btnTitle={"Figma"} />
            <SkillBtn icon={AdobeIllustratorIcon} btnTitle={"Adobe Illustrator"} />
            <SkillBtn icon={AdobeXdIcon} btnTitle={"Adobe XD"} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[#6E6D6D]">Prefered language</h2>
          <span className="">English</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[#6E6D6D]">Type</h2>
          <span>Full time</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[#6E6D6D]">Years of experience</h2>
          <span>3+ Years of Experience</span>
        </div>
      </div>
    </div>
  );
};

export default JobEligibility;
