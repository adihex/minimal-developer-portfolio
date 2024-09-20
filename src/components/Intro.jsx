function Intro() {
  return (
    <div className="flex flex-col items-center justify-center pb-6 pt-10 text-center">
      <h1 className="mb-1 text-4xl font-bold dark:text-white md:mb-3 md:text-7xl">
        <a
          href={'https://www.github.com/adihex'}
          target="_blank"
          rel="noopenor noreferrer"
          className="overflow-hidden rounded-md "
        >
          Aditya Balakrishnan{' '}
        </a>
      </h1>
      <p className="md:text-x1 mb-3 text-base font-medium">
        {' '}
        Software Engineer and Web Developer
      </p>
      <div className="font-inter text-sm">
        <p className="px-20">
          {' '}
          I am Bachelor of Technology graduate in Computer Science and Engineering from
          Indian Institute of Technology (IIT) Bhubaneswar. I have completed my internship at Publicis Sapient from
          May-June 2023, where I was offered a full-time role as a Software Development Engineer based on my performance. I have always been passionate about computers and this
          led me to choose CSE as my branch and Software Engineering as my
          career profession.
        </p>
      </div>
    </div>
  );
}

export default Intro;
