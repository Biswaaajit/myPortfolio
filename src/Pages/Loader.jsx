import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Loader() {
  const [animate, setanimate] = useState(false);
  const navigate = useNavigate();
  useEffect(function () {
    let a = 0;
    const id = setInterval(function () {
      a = a + Math.floor(Math.random() * 5);
      if (a < 95) {
        document.querySelector("#load").innerHTML = a + "%";
      } else {
        document.querySelector("#load").innerHTML = "100%";
        setanimate(true);
      }
    }, 50);
    return () => clearInterval(id);
  }, []);
  useGSAP(
    function () {
      if (animate === true) {
        var v1 = gsap.timeline();
        v1.to(".load", {
          y: -800,
          duration: 2,
          onComplete: () => {
            navigate("/portfolio");
          },
        });
      }
    },
    [animate]
  );
  return (
    <div className={`w-full h-screen relative load ${animate && "z-10"}`}>
      <video
        autoPlay
        loop
        muted
        src="l2.mp4"
        className="w-full h-full object-cover"
      ></video>

      <div className="w-full h-full flex items-center justify-center bg-neutral-800/30 absolute top-0">
        <p className="text-6xl font-bold text-slate-200" id="load">
          50%
        </p>
      </div>
    </div>
  );
}

export default Loader;
