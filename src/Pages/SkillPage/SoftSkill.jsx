function SoftSkill({ name, percent }) {
  return (
    <div className="w-[90%] rounded-lg bg-[#140c1c73] px-4 py-4 shadow-md shadow-purple-600/50">
      <p className="flex justify-between px-3 pb-2 font-semibold">
        <span>{name}</span>
        <span>{percent}%</span>
      </p>
      <div className="h-2 w-full rounded-full bg-zinc-800">
        <div
          style={{ width: `${percent}%` }}
          className="skill h-full rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-800"
        ></div>
      </div>
    </div>
  );
}

export default SoftSkill;
