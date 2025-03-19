function Btn({ name, func }) {
  return (
    <button className="border-2 text-base lg:text-lg border-purple-600  hover:bg-gradient-to-r to-fuchsia-800 from-indigo-600 px-5  py-2  rounded-full transition-all duration-300">
      {name}
    </button>
  );
}

export default Btn;
