import { useState } from "react";
import profileImg from "../assets/profile.jpg";
import Resume from "./Resume";

export default function About() {
    const [showResume, setShowResume] = useState(false);
    return (
        <div className="p-10 max-w-screen mx-auto flex flex-col md:flex-row items-center">
            {/* Profile Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-100 lg:h-100 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img 
                    src={profileImg} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                />
            </div>
            {/* About Me Content */}
            <div className="p-10 max-w-screen mx-auto flex flex-col md:flex-row items-center">
            <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
                <p className="text-lg md:text-xl mt-4 text-gray-700">
                    I am a dedicated and motivated software developer with a passion for building efficient and scalable solutions. With a strong foundation in computer science and hands-on experience in various technologies, I continuously strive for innovation and learning.
                </p>
                <p className="text-lg md:text-xl mt-4 text-gray-700">
                    My journey in software development began during my undergraduate studies, where I developed a deep interest in problem-solving and real-world applications of technology. I thrive in collaborative environments and am always eager to explore new technologies and challenges.
                </p>
            </div>
        <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
        <button 
        onClick={()=>setShowResume(true)} className="bg-cyan-900 text-white p-2 text-center w-30 rounded-md hover:shadow-md hover:bg-cyan-950 transition-transform duration-300 hover:scale-105">View Resume</button>

        {showResume && <Resume onClose={()=> setShowResume(false)} />}
        </div>
    </div>
    </div>
    );
}
