import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import TechnicalSkills from "./TechnicalSkills";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

function Technical() {
  return (
    <div className="space-y-12">
      <p className="gradient-text w-full text-center text-[7vw] font-bold xs:text-3xl lg:text-4xl">
        Technical Skills
      </p>
      <div className="grid grid-cols-2 place-items-center px-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <TechnicalSkills
          name="TypeScript"
          percent={70}
          icon={<TbBrandTypescript />}
        />
        <TechnicalSkills name="NextJs" percent={82} icon={<RiNextjsFill />} />
        <TechnicalSkills name="JavaScript" percent={90} icon={<FaJsSquare />} />
        <TechnicalSkills name="ReactJs" percent={92} icon={<FaReact />} />
        <TechnicalSkills name="NodeJs" percent={80} icon={<FaNodeJs />} />
        <TechnicalSkills name="ExpressJs" percent={90} icon={<SiExpress />} />
        <TechnicalSkills name="MongoDB" percent={85} icon={<SiMongodb />} />
        <TechnicalSkills name="Git" percent={80} icon={<FaGithub />} />
        <TechnicalSkills name="Redux" percent={90} icon={<SiRedux />} />
        <TechnicalSkills
          name="Tailwind"
          percent={95}
          icon={<RiTailwindCssLine />}
        />
      </div>
    </div>
  );
}

export default Technical;
