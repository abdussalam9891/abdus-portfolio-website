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
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                aria-label={`Open ${project.title}`}
              >
                <Image
                  src={assets.send_icon}
                  alt="open project"
                  className="w-5"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
