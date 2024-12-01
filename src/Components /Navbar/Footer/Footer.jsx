import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-row items-center justify-evenly  w-36">
            <h2 className="text-3xl font-bold mb-2">
              {" "}
              <Logo />
            </h2>
            <p className="text-gray-400 font-extrabold">TEClift</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <Link to="/AboutUs" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-start">
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} TEClift. All rights reserved.
          </p>
          <ul className="flex space-x-4 text-gray-500 text-sm mt-4 sm:mt-0">
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
