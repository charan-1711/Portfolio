import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaCrown, FaFileAlt, FaTimes, FaDownload } from "react-icons/fa";
import MyResume from "../assets/Charanraj-Resume.pdf";

export default function Home() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center px-6 py-10 my-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Hey There! <br /> I'm <span className="text-blue-500">Charanraj</span><span className="text-4xl text-blue-500">.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-center sm:text-xl mt-4 max-w-2xl">
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
                    <button 
                        onClick={() => setVisible(true)} 
                        className="px-6 py-2 text-lg font-semibold border border-blue-500 text-black rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                    >
                       Resume
                    </button>
                </div>
            </div>

            {/* Resume Modal */}
            {visible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full text-center relative">
                        {/* Close Button */}
                        <button 
                            onClick={() => setVisible(false)} 
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                        >
                            <FaTimes className="text-2xl" />
                        </button>

                        <h1 className="text-3xl font-bold text-gray-800">My Resume</h1>

                        {/* Resume PDF Embed */}
                        <object 
                            data={MyResume} 
                            type="application/pdf"
                            className="mt-4 w-full h-[500px] border"
                        >
                            <p>Your browser does not support PDF viewing. <a href={MyResume} download>Download it here.</a></p>
                        </object>
                    </div>
                </div>
            )}
        </div>
    );
}
