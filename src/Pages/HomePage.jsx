import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Icon from "../Components/Icon";
import { TbBrandGithubFilled } from "react-icons/tb";
import Name from "./Name";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function HomePage() {
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(infoRef.current.querySelectorAll(".para"), {
      opacity: 0,
      x: 100,
      stagger: 0.5,
    });
    t1.from(iconRef.current.querySelectorAll("a"), {
      x: 80,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(imageRef.current, {
      delay: 0.5,
      scale: 0,
    });
  }, []);
  return (
    <section className="gradient flex min-h-screen w-full flex-col-reverse items-center justify-center gap-10 px-4 pb-11 pt-24 md:box-border md:h-screen md:flex-row md:justify-evenly md:gap-0 md:px-0 md:pb-0 md:pt-12">
      <div
        ref={infoRef}
        className="ml-2 w-full space-y-3 md:w-[45%] md:space-y-5"
      >
        <Name name="Biswajeet" />

        <p className="para gradient-text lead ml-0 flex w-fit flex-wrap gap-[4vw] text-[8vw] font-bold xs:gap-4 md:-ml-2 md:flex-col md:text-5xl lg:text-7xl">
          <span>Full Stack</span>
          <span>Developer</span>
        </p>

        <p className="para text-base lg:text-lg">
          I create visually appealing, user-friendly, and responsive websites
          that provide seamless experiences across all devices, ensuring that
          every user interaction is engaging and efficient.
        </p>

        <div
          ref={iconRef}
          className="flex flex-col-reverse items-start gap-0 md:gap-7 lg:flex-row lg:items-center"
        >
          <a
            href="https://drive.google.com/file/d/1Hf0p1nPXgKOrXDiIdHiliDRPv15YKrdt/view?usp=sharing"
            target="_blank"
            className="rounded-full border-2 border-purple-600 from-indigo-600 to-fuchsia-800 px-5 py-2 text-base transition-none duration-300 hover:bg-gradient-to-r hover:transition-all lg:text-lg"
          >
            Download CV
          </a>

          <div className="my-6 flex items-center gap-3 md:my-0">
            <Icon
              icon={<TbBrandGithubFilled />}
              link="https://github.com/Biswaaajit"
            />
            <Icon
              icon={<FaLinkedinIn />}
              link="https://www.linkedin.com/in/biswajeet-barik-5a573521a/"
            />
            <Icon
              icon={<FaFacebookF />}
              link="https://www.facebook.com/biswajeet.biswa.73?mibextid=ZbWKwL"
            />
          </div>
        </div>
      </div>
      {/* <!--     My image       --> */}
      <div ref={imageRef} className="flex flex-col items-center">
        <div className="relative h-fit w-fit rounded-full shadow-[0px_0px_20px_0.5px] shadow-purple-300 md:w-[30vw] lg:w-[20rem]">
          <img
            className="mx-auto w-[35vw] rounded-2xl md:mx-0 md:w-full"
            src="./user.png"
            alt="author picture"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
