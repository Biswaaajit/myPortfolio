function Heading({ title }) {
  return (
    <h1 className="gradient-text mx-auto mt-2 hidden py-1 text-center text-4xl font-bold transition-all md:block lg:mt-0 lg:text-5xl">
      {title}
    </h1>
  );
}

export default Heading;
