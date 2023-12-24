function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-2x1 mb-5 font-bold text-stone-900 underline decoration-4 underline-offset-8"
    >
      {children}
    </h1>
  );
}

export default Title;
