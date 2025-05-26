import { useGSAP } from "@gsap/react";
import Links from "../Components/Links";
import gsap from "gsap";

function MenuPage() {
  useGSAP(() => {
    gsap.from("#menuLink a p", {
      y: 200,
      stagger: 0.25,
    });
  }, []);
  return (
    <div
      id="menuLink"
      className="flex h-screen flex-col items-center justify-center gap-6 bg-black pt-[80px]"
    >
      <Links to="/portfolio/skills">Skills</Links>
      <Links to="/portfolio/project">Projects</Links>
      <Links to="/portfolio/services">Services</Links>
      <Links to="/portfolio/certificates">Certificates</Links>
      <Links to="/portfolio/contact">Contact</Links>
    </div>
  );
}

export default MenuPage;
