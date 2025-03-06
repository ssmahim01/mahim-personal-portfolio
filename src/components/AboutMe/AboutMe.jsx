import meWithLaptop from "../../assets/me-with-laptop.jpg";

const AboutMe = () => {
  return (
    <div className="lg:pt-24 pt-20 lg:pb-0 pb-10">
    {/* <Heading title={"About"} /> */}

      <div className="lg:w-4/5 w-11/12 mx-auto flex lg:flex-row-reverse flex-col justify-between items-center">
        <div className="space-y-3 lg:w-1/2">
          <h2 className="lg:text-5xl text-4xl md:text-left uppercase text-center font-extrabold pb-2">
            About Me
          </h2>

          <p className="md:text-base text-sm font-medium pb-5">
           Hello, I am <span className="text-teal-600 font-bold">Sayman Shakil Mahim.</span> I always like to introduce about my self as a web developer. I have chose it as a profession. I also worked in different places for the job. But, I found peace in that. I love to coding and make beautiful projects. In the programming life, we are always facing issues. But, issues will be solve when we can try and do hard work. Last time, when complete a website by perseverance then it is the best happy moment of every programmers life. My programming journey was not easy. But, I have never give up. I was started my programming journey with family, electrical issues and another. But, i wanted to be a web developer. Then i ignored the issues and continued my journey. Finally, i also completed a course on Programming Hero. Outside of programming, i love to play cricket. And it is my favorite sport.
          </p>

        </div>

        <figure>
          <img
            src={meWithLaptop}
            alt="Image of me with Laptop"
            className="lg:mt-0 mt-6 lg:h-96 lg:w-[450px] w-screen h-80 object-cover border-l-8 border-b-8 border-cyan-500 rounded-xl"
          />
        </figure>
      </div>
    </div>
  );
};

export default AboutMe;
