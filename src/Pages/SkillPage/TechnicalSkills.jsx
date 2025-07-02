import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function TechincalSkills({ name, percent, icon }) {
  const currentRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      [currentRef.current],
      { backgroundImage: "conic-gradient(#86198f 0%, #27272a 0%)" },
      {
        backgroundImage: `conic-gradient(#86198f ${percent}%, #27272a 0%)`,
        duration: 2,
        ease: "power2.inOut",
      },
    );
  }, []);
  return (
    <div className="mb-10 w-fit space-y-2 rounded-lg bg-[#140c1c73] px-6 py-4 shadow-md shadow-purple-800 xl:mb-[70px]">
      <div
        ref={currentRef}
        className="html flex h-20 w-20 cursor-pointer items-center justify-center rounded-full sm:h-28 sm:w-28"
      >
        <div className="gradient flex h-[90%] w-[90%] flex-col items-center justify-center rounded-full text-2xl text-purple-300 transition-all sm:text-3xl">
          {icon}
          <p className="text-sm uppercase sm:text-base">{percent}%</p>
        </div>
      </div>
      <p className="mx-auto w-fit font-semibold">{name}</p>
    </div>
  );
}

export default TechincalSkills;
