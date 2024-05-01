import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-white text-neon-green font-didot text-lg p-8 w-full">
      <div className="max-w-screen-lg mx-auto flex justify-between">
        <div className="flex flex-col space-y-4">
          <p className="text-black text-2xl">Questions ?</p>
          <a
            href="https://www.linkedin.com/company/thehealthyminds/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bold text-black text-xl"
          >
            <FaLinkedinIn />
          </a>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/services" className="hover:underline">
            Offerings
          </Link>
          <Link to="/team" className="hover:underline">
            Team
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link to="/our-approach" className="hover:underline">
            Our Approach
          </Link>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
