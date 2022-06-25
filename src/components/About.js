import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Having 3.5 years of experience in web application development.
          Expertise in developing applications using React JS , JavaScript, CSS,
          redux and Restful Apis. Good understanding of algorithms and data
          structures. Having good problem solving and analytical skills.
        </p>
      </div>
    </div>
  );
};

export default About;
