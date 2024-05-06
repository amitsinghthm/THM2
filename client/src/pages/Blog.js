import React from "react";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div className=" p-8 justify-center">
      <div className="flex justify-between mb-8">
        <div className="flex flex-col items-center mx-8 p-8">
          <Link to="/blog/blog1" className="cursor-pointer">
            <img
              src="/images/blogpic1.jpg"
              alt="First Image"
              className="mb-4"
            />
          </Link>
          <p className="text-sm mb-1">7/25/23</p>
          <Link to="/blog/blog1" className="cursor-pointer">
            <h3 className="mb-1 text-3xl font-didot text-center text-gray-700">
              Mental Wellbeing:An important boardroom discussion amongst
              Corporate India
            </h3>
          </Link>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-900 hover:underline"
          >
            {" "}
            Read More
          </a>
        </div>

        <div className="flex flex-col items-center px-8 mx-8 p-8">
          <Link to="/blog/blog2" className="cursor-pointer">
            <img
              src="/images/blogpic2.jpg"
              alt="Second Image"
              className="mb-4"
            />
          </Link>
          <p className="text-sm mb-1">8/6/20</p>
          <Link to="/blog/blog2" className="cursor-pointer">
            <h3 className="mb-1 text-3xl font-didot text-center text-gray-700">
              Mental Health At Work
            </h3>
          </Link>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-900 hover:underline"
          >
            {" "}
            Read More
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center p-8">
        <Link to="/blog/blog3" className="cursor-pointer">
          <img src="/images/blogpic3.jpg" alt="Third Image" className="mb-4" />
        </Link>
        <p className="text-sm mb-1">8/5/20</p>
        <Link to="/blog/blog3" className="cursor-pointer">
          <h3 className="mb-1 text-3xl font-didot text-center text-gray-700">
            Effects of Mental Health In the Workspace and why it is Important
          </h3>
        </Link>
        <Link
          to="/blog/blog3"
          className="font-didot text-orange-900 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
