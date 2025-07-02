import { useState } from "react";
import ServiceInfo from "./ServiceInfo";

function Service({ title, primary, secondary }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex h-fit w-[90%] items-center justify-center overflow-hidden rounded-lg transition-none hover:mb-8 hover:shadow-lg hover:shadow-fuchsia-700 hover:transition-all md:w-[80%]">
      <div className="absolute top-0 z-20 h-full w-full rounded-lg bg-gradient-to-r from-blue-900 to-fuchsia-600 p-4"></div>
      <div className="relative z-40 m-[2px] flex w-full items-center gap-6 rounded-lg bg-zinc-950 p-4 lg:p-8">
        <div className="space-y-2 lg:space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl">{title}</h2>
          <ServiceInfo text={primary} />
          {show && <ServiceInfo text={secondary} />}
          <button
            onClick={() => setShow(!show)}
            className="relative float-end w-fit cursor-pointer from-indigo-600 to-fuchsia-800 px-1.5 text-base after:absolute after:-bottom-[3px] after:left-0 after:h-[1.5px] after:w-0 after:rounded-full after:bg-gradient-to-r after:transition-all after:duration-300 after:content-[''] hover:after:w-full md:text-lg xl:text-xl"
          >
            {show ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
