import { FaDownload, FaTimes } from "react-icons/fa";
import MyResume from "../assets/Charanraj-Resume.pdf";

export default function Resume({ onClose }) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-2xl max-w-4xl w-full relative">
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <FaTimes className="text-2xl" />
                </button>

                <h1 className="text-3xl font-bold text-gray-800 text-center">My Resume</h1>

                {/* Resume View */}
                <div className="mt-4 shadow-md w-full h-[80vh] overflow-hidden rounded-lg">
                    <iframe 
                        src={MyResume} 
                        className="w-full h-full border-none"
                        title="Resume Preview"
                    />
                </div>

                {/* Download Button */}
                <div className="flex justify-center mt-4">
                    <a 
                        href={MyResume} 
                        download 
                        className="inline-flex items-center px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition"
                    >
                        <FaDownload className="mr-2" />
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
}
