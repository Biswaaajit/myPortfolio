function Input({ type, placeholder, value, setFunc }) {
  return (
    <input
      type={type}
      onChange={(e) => setFunc(e.target.value)}
      value={value}
      placeholder={placeholder}
      className="rounded-lg border-2 border-zinc-800 bg-zinc-950 px-2 py-1.5 text-base transition-all hover:border-indigo-600 focus:border-0 focus:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 lg:grow lg:px-3 lg:py-2"
    />
  );
}

export default Input;
