import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-[400px] bg-green-800 text-white py-10 px-5 sm:px-20 md:px-32">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-2xl text-yellow-400" />
            <div>
              <p className="text-lg">+91 98765 43210 </p>
              <p className="text-lg">+91 98765 67890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-yellow-400" />
            <p className="text-lg">arjun.ayesha.wedding@example.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-yellow-400" />
            <p className="text-lg">Royal Banquet Hall, MG Road, Pune, India</p>
          </div>
          <div className="flex items-center gap-4">
            <FaInstagram className="text-2xl text-pink-500" />
            <p className="text-lg">@arjun_ayesha_wedding</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white text-black p-6 rounded-xl shadow-2xl flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="tel"
            placeholder="Your Contact No"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
