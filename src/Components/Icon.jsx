function Icon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-full rounded-full border-2 border-purple-600 bg-transparent from-indigo-600 to-fuchsia-800 text-xl transition-all duration-200 hover:bg-gradient-to-r p-2"
    >
      {icon}
    </a>
  );
}

export default Icon;
