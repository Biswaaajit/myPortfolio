import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Name({ name }) {
  const nameArr = name.split("");
  console.log(nameArr);
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from("#name p", {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.1,
        repeat: -1,
        repeatDelay: 1.2,
        yoyo: true,
        ease: "power2.out",
      });
    }, "#name");

    return () => ctx.revert();
  }, []);
  return (
    <div className="flex w-fit items-center justify-center gap-2">
      <p className="grad text-2xl font-bold lg:text-4xl">I am</p>
      <div id="name" className="flex items-center justify-center gap-0.5">
        {nameArr.map((char, i) => (
          <p key={i} className="grad text-2xl font-bold lg:text-4xl">
            {char}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Name;
