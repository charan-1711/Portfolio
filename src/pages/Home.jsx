import { Link } from "react-router-dom";
import { FaPhoneAlt, FaCrown, FaFileAlt } from "react-icons/fa";

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Hey There! <br /> I'm <span className="text-blue-500">Charanraj</span><span className="text-4xl text-blue-500">.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl mt-4 max-w-2xl">
                Proficient and responsible, applying strong technical skills in software and applications. Skilled in handling challenging tasks with excellent time management and leadership abilities.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-around p-6 space-y-6 md:space-y-0 md:space-x-6">
            {/* Contact Button */}
            <div className="w-64 h-48 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
                <FaPhoneAlt className="text-blue-500 text-5xl mb-4" />
                <Link to="/contact">
                    <button className="px-6 py-2 text-lg font-semibold border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                        Contact Me
                    </button>
                </Link>
            </div>

            {/* Skills Button */}
            <div className="w-64 h-48 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
                <FaCrown className="text-blue-500 text-5xl mb-4" />
                <Link to="/skills">
                    <button className="px-6 py-2 text-lg font-semibold border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                        Skills
                    </button>
                </Link>
            </div>

            {/* Resume Button */}
            <div className="w-64 h-48 bg-white shadow-lg rounded-xl flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
                <FaFileAlt className="text-blue-500 text-5xl mb-4" />
                <Link to="/resume">
                    <button className="px-6 py-2 text-lg font-semibold border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                        Resume
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
}
