function Icon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-full rounded-full border-2 border-purple-600 bg-transparent from-indigo-600 to-fuchsia-800 p-2 text-xl transition-none duration-200 hover:bg-gradient-to-r hover:transition-all"
    >
      {icon}
    </a>
  );
}

export default Icon;
