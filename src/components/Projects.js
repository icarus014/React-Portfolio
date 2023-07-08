import React from "react";
import getInspirred from "../assets/get-inspirred.png";
import colorGuesser from '../assets/screenshot.png'
import weather from '../assets/weather-app.png'
import color from "../assets/Color Flipper.png"


const Projects = () => {
    const projects = [
        {
          img: colorGuesser,
          title: "colorGuesser",
          desc: " This is a color guessing game I created with JS, HTML, and CSS ",
          live: "https://icarus014.github.io/first-milestone/",
          code: "https://github.com/icarus014/first-milestone",
        },
        {
          img: weather,
          title: "Weather App",
          desc: "Weather App created with React, as part of one of my group milestone projects.",
          live: "https://weatherapp-six-iota.vercel.app/",
          code: "https://github.com/moesarsour/weatherapp",
        },
        {
          img: color,
          title: "Color Flipper",
          desc: "Random Color Generater, designed with vanilla CSS and JS",
          live: "https://icarus014.github.io/color-flipper/",
          code: "https://github.com/Coderamrin/build-10-css-projects",
        },
        {
          img: getInspirred,
          title: "Bread CRUD Project",
          desc: "Project allows user to Create, Read, Update, and Delete different types of bread, as well as their bakers.",
          live: "",
          code: "https://github.com/icarus014/Bread-CRUD-Project",
        },
      ]; 

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my projects that I have built with React,
            MERN and vanilla CSS. Check them out!
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;