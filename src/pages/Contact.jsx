export default function Contact(){
    return(
        <div className="p-10 my-4 max-w-3xl items-center justify-center text-center mx-auto border border-amber-200 shadow-xl rounded-lg">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <form className="mt-4 flex flex-col space-y-4"> 
                <input type="text" placeholder="Your Name" className="border p-2"/>
                <input type="email" placeholder="Your Email"className="border p-2"/>
                <textarea placeholder="Your Message" className="border p-2"></textarea>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
            </form>
        </div>
    );
}