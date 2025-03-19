import { useState } from "react";
import ProjectLinks from "../Pages/ProjectLinks";

function Project({ description, name, imgAddress, git, live }) {
  const [showLink, setShowLink] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
      className="w-[80vw] bg-[#140c1ceb] py-3 transition-all sm:w-[66vw] md:w-[40vw] lg:w-[28rem] xl:w-[30vw]"
    >
      <div className="relative mx-auto w-[90%]">
        <img
          src={imgAddress}
          className="aspect-video object-cover opacity-80"
          alt="project image"
        />
        <div
          className={`absolute top-0 flex h-full w-full flex-col items-start justify-end gap-0 bg-gradient-to-b from-transparent to-[#140c1c] pb-3 pl-4 transition-all duration-200 lg:gap-1 ${showLink ? "opacity-100" : "opacity-0"}`}
        >
          <h3 className="text-[7vw] font-semibold sm:text-[5vw] md:text-[3vw] lg:text-3xl">
            {name}
          </h3>
          <p className="text-[3.5vw] sm:text-[2.8vw] md:text-[2vw] lg:text-lg">
            {description}
          </p>
        </div>
      </div>
      {showLink && <ProjectLinks git={git} live={live} />}
    </div>
  );
}

export default Project;
