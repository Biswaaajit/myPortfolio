import { useRef } from "react";
import SoftSkill from "./SoftSkill";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SoftSkills() {
  const softSkillsRef = useRef(null);

  // Animation

  useGSAP(() => {
    gsap.from(".skill", {
      width: "0%",
      delay: 0.2,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: softSkillsRef.current,
        start: "top 40%",
        end: "bottom 10%",
      },
    });
  }, []);

  return (
    <div
      ref={softSkillsRef}
      className="flex min-h-screen w-full flex-col justify-center gap-12 py-14 md:mt-0 md:gap-24"
    >
      <p className="gradient-text w-full text-center text-[7vw] font-bold xs:text-3xl lg:text-4xl">
        Soft Skills
      </p>
      <div className="grid grid-cols-1 place-items-center gap-x-12 gap-y-16 md:grid-cols-2">
        <SoftSkill name="Communication" percent={92} />
        <SoftSkill name="Creativity" percent={90} />
        <SoftSkill name="Team Work" percent={96} />
        <SoftSkill name="Critical Thinking" percent={87} />
        <SoftSkill name="Leadership" percent={86} />
        <SoftSkill name="Adaptibility" percent={95} />
      </div>
    </div>
  );
}

export default SoftSkills;
