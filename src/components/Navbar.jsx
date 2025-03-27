import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="max-w-screen px-4 py-4 shadow-md flex items-center justify-between bg-white">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
                CR<span className="text-blue-400 text-4xl">.</span>
            </Link>

            {/* Hamburger Menu Button (Only visible on small screens) */}
            <button 
                className="md:hidden text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navigation Links */}
            <ul className={`md:flex md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none md:bg-transparent transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                <li className="p-3 text-center md:p-0"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li className="p-3 text-center md:p-0"><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                <li className="p-3 text-center md:p-0"><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                <li className="p-3 text-center md:p-0"><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
                <li className="p-3 text-center md:p-0"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
}
