import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Our Address</h2>
          <p className="text-sm">
            Gul Mehandi Creations <br />
            123 Celebration Street, <br />
            Pune, Maharashtra, India
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <MdPhone /> +91 98765 43210
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <MdEmail /> gulmehandi@example.com
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center border-t border-gray-500 mt-8 pt-4 text-sm">
        © {new Date().getFullYear()} Gul Mehandi Creations. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
