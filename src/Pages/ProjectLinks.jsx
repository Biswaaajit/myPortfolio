import { VscGithub } from "react-icons/vsc";

function ProjectLinks({ git, live }) {
  return (
    <div className="mx-auto mt-4 flex w-[90%] justify-between px-1 sm:px-6">
      <a
        href={git}
        target="_blank"
        className="flex w-fit cursor-pointer items-center gap-[6px] overflow-x-hidden rounded-xl border-2 border-purple-700/70 px-2 py-1.5 transition-all duration-300 hover:bg-purple-700 md:px-4 md:py-1"
      >
        <VscGithub className="shrink-0 grow text-base sm:text-lg" />
        <p className="sm:text-md text-xs sm:text-sm lg:text-base">GitHub</p>
      </a>
      <a
        href={live}
        target="_blank"
        className="flex cursor-pointer items-center gap-[6px] self-center rounded-xl border-2 border-purple-700/70 px-3 py-1.5 transition-all hover:bg-purple-700 md:px-4 lg:py-1"
      >
        <div className="h-[8px] w-[8px] rounded-full bg-green-600"></div>
        <p className="sm:text-md text-xs sm:text-sm lg:text-base">Live</p>
      </a>
    </div>
  );
}

export default ProjectLinks;
