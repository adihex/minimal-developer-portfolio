function Intro() {
  return (
    <div className="flex flex-col items-center justify-center pb-6 pt-10 text-center">
      <h1 className="mb-0 font-bold md:mb-5">Aditya Balakrishnan</h1>
      <p className="md:text-x1 mb-3 text-base font-medium">
        {" "}
        Software Engineer and Web Developer
      </p>
      <div className="font-light">
        <p>This is my entire bio!</p>
        <p>
          I am a final year CSE student at IIT Bhubaneswar and I have been
          interested in computers ever since my dad bought our first computer
          when I was a kid.
        </p>
      </div>
      <p>
        {" "}
        I am interested in the concept of using computers to bring together
        people from different cultures and backgrounds.
      </p>
    </div>
  );
}

export default Intro;
