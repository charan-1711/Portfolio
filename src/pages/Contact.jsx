import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Clear error on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setError("All fields are required!");
            return;
        }

        // Simulate form submission
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 sec
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <div>
            <h1 className="text-4xl text-center font-bold text-gray-800 p-10">Contact Me</h1>
        <div className="p-10 my-6 max-w-3xl mx-auto text-center shadow-2xl rounded-lg">

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-3 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none"
                />

                <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-3 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none"
                />

                <textarea 
                    name="message"
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="border p-3 rounded-lg shadow-sm h-28 resize-none focus:border-blue-500 focus:outline-none"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button 
                    type="submit" 
                    className="bg-blue-600 text-white justify-center p-3 mx-auto rounded-lg font-semibold shadow-md w-50 hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
                >
                    Send
                </button>

                {success && <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>}
            </form>
        </div>
    </div>
    );
}
