import projects from "../data/Projects";
import { SiGithub } from "react-icons/si";

export default function Projects(){
    return(
        <div className="p-10">
            <h1 className="text-4xl text-center ont-bold">My projects</h1>
            <div className="flex flex-wrap justify-center gap-6 p-4 mt-5">
                {projects.map((project) =>
                (
                    <div key={project.id} className="w-75 h-auto bg-white shadow-lg rounded-xl flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105">
                        <h2 className="text-xl text-blue-800 font-semibold">{project.title}</h2>
                        <p className="mt-4">{project.description}</p>
                        <p className="mt-2 text-xl font-semibold">Language and Tools Used:</p>
                        <h6 className="">{project.tools}</h6>
                        <a href={project.link} className="text-blue-500">View</a>
                    </div>
                ))}
            </div>
        </div>
    );
}