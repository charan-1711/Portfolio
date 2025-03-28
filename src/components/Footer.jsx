import { FaCopyright } from "react-icons/fa";
export default function Footer(){
    return(
        <footer className="flex flex-row bg-cyan-200 w-screen p-2 m-2 justify-center space-x-2">
            <h1>Charanraj</h1>
            <FaCopyright className="text-white font-2xl" />
            <p className="">All rights reserved</p>
        </footer>
    );
}