import { FaPython, FaJava, FaReact, FaJs, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiC, SiTailwindcss, SiGit, SiMysql } from "react-icons/si";

const languages = [
    { name: "C", icon: <SiC className="text-gray-500 text-5xl mb-4" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-5xl mb-4" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl mb-4" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl mb-4" /> },
];

const frameworks = [
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl mb-4" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl mb-4" /> },
    { name: "Git", icon: <SiGit className="text-orange-500 text-5xl mb-4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-5xl mb-4" /> },
    { name: "MySQL", icon: <SiMysql className="text-violet-700 text-6xl mb-4" /> },
    ];

export default function Skills() {
    return (
        <div>
            <h2 className="text-center text-4xl font-semibold mt-6">Skills</h2>
            <div className="shadow-blue-100 shadow-md m-2">
            <h2 className="text-2xl text-center mt-3">Programming Languages</h2>
            <div className="flex flex-wrap justify-center gap-6 p-6 m-3">
                {languages.map((language, index) => (
                    <div key={index} className="w-64 h-48 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
                        {language.icon}
                        <h1 className="px-6 py-2 text-lg font-semibold text-black rounded-lg">
                            {language.name}
                        </h1>
                    </div>
                ))}
            </div>
            </div>

            <div className="shadow-blue-100 shadow-lg m-2">
            <h2 className="text-2xl text-center mt-5">Frameworks, Tools and Technologies</h2>
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {frameworks.map((framework, index) => (
                    <div key={index} className="w-64 h-48 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
                        {framework.icon}
                        <h1 className="px-6 py-2 text-lg font-semibold text-black rounded-lg">
                            {framework.name}
                        </h1>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
