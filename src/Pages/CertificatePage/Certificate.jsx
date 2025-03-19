function Certificate({ title, icon, children, link }) {
  return (
    <div className="relative flex h-fit w-[90%] items-center justify-center rounded-lg transition-all hover:mb-8 hover:shadow-lg hover:shadow-fuchsia-700/80">
      <div className="absolute top-0 z-20 h-full w-full rounded-lg bg-gradient-to-r from-blue-900 to-fuchsia-600 p-4"></div>
      <div className="relative z-40 m-[2px] flex w-full items-center gap-6 rounded-lg bg-zinc-950 p-4 lg:p-8">
        <div className="hidden text-4xl text-purple-400 md:block">{icon}</div>

        <div className="space-y-2 lg:space-y-4">
          <h2 className="hidden text-2xl md:block lg:text-3xl">{title}</h2>

          <div className="flex items-center gap-3 text-xl sm:text-2xl md:hidden">
            <div className="text-2xl text-purple-400 sm:text-4xl">{icon}</div>
            <h2>{title}</h2>
          </div>

          <p className="text-justify text-xs xs:text-base lg:text-lg">
            {children}
          </p>
          <a
            href={link}
            target="_blank"
            className="relative float-end w-fit cursor-pointer from-indigo-600 to-fuchsia-800 px-1.5 text-base text-purple-400 after:absolute after:-bottom-[3px] after:left-0 after:h-[1.5px] after:w-0 after:rounded-full after:bg-gradient-to-r after:transition-all after:duration-300 after:content-[''] hover:text-slate-100 hover:after:w-full md:text-lg xl:text-xl"
          >
            Certificate Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
