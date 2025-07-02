import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNavigationDeatil } from "../Utils/getNavigationDetail";
import Heading from "./Heading";

function Navigation() {
  const [icon, setIcon] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { title, bgColor } = getNavigationDeatil(location.pathname);

  // function to handle navigation
  function handleIcon() {
    if (icon) {
      setIcon(false);
      navigate("/portfolio");
    }
    if (!icon) {
      setIcon(true);
      navigate("/portfolio/menu");
    }
  }

  // handle menu animation
  useGSAP(() => {
    if (icon === true) {
      gsap.to("#bar1", {
        rotate: 45,
      });
      gsap.to("#bar2", {
        rotate: -45,
      });
    }
    if (!icon) {
      gsap.to("#bar1", {
        rotate: 180,
      });
      gsap.to("#bar2", {
        rotate: 180,
      });
    }
  }, [icon]);

  return (
    <div
      className={`fixed top-0 z-50 flex w-full items-center justify-between rounded-b-[40px] px-[5%] py-4 shadow-lg shadow-purple-900/50 ${bgColor ? bgColor : "bg-transparent"}`}
    >
      <img
        src="/logo.png"
        className="sm-[4rem] w-[20vw] md:w-[6.5rem] lg:w-[8rem]"
      />
      <Heading title={title} />
      <div
        className="flex cursor-pointer items-center gap-6 p-4 text-slate-100 md:p-3"
        onClick={handleIcon}
      >
        <p className="hidden text-lg font-semibold tracking-wider md:block xl:text-xl">
          Menu
        </p>
        <div className={icon ? "relative space-y-0" : "space-y-2"}>
          <div
            className="h-[2.5px] w-6 rounded-full bg-slate-100"
            id="bar1"
          ></div>
          <div
            className={`h-[2.5px] w-6 rounded-full bg-slate-100 ${
              icon && "absolute top-0"
            }`}
            id="bar2"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
