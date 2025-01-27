// import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";
// import chess_gif from '../assets/chess.gif';

function Project({project_data}) {
  return (
    <a
      href={project_data.link}
      key={project_data.image}
      className="sm:w-1/2 w-100 p-4">
      <div className="flex relative">
        <img
          alt={project_data.image}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={project_data.image}
        />
        <div className="px-8 py-10 relative z-8 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
            {project_data.subtitle}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {project_data.title}
          </h1>
          <p className="leading-relaxed">{project_data.description}</p>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeBracketIcon className="mx-auto inline-block w-10 mb-4"/> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've worked on
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project_data) => <Project project_data={project_data}/>)}
        </div>
      </div>
    </section>
  );
};