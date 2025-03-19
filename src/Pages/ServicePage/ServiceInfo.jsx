import { FaDiamond } from "react-icons/fa6";

function ServiceInfo({ text }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <FaDiamond className="text-lg text-purple-400" />
      <p className="text-justify text-sm sm:text-base lg:text-lg">{text}</p>
    </div>
  );
}

export default ServiceInfo;
