import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { name, email, message };
    console.log("Form data submitted:", formData);

    alert("Thank you for your message! Check the console to see the data.");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:-translate-y-0.5 hover:shadow-xl transition">
      <h1 className="text-left mb-8 text-gray-800 text-2xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Name Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-gray-600 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-gray-600 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-gray-600 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-red-700 text-white rounded-md text-base font-bold hover:bg-red-800 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
