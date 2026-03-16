 import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My portfolio</h4>
      <h2 className="text-center text-5xl">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-4">
        Welcome to my web development portfolio. Explore projects showcasing my
        frontend development skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video overflow-hidden bg-gray-100">
              <img
                src={project.bgImage}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4 flex items-center justify-between bg-white dark:bg-gray-900">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {project.description}
                </p>
              </div>


               <a href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="ml-4 shrink-0 w-9 h-9 rounded-full border border-black dark:border-white flex items-center justify-center hover:bg-lime-300 hover:border-lime-300 transition duration-300"
              >
                <Image src={assets.send_icon} alt="open project" className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
