import React from "react";
import { useNavigate } from "react-router-dom";
export default function Team() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full pt-0">
        <img
          src="/images/corp team.jpg"
          className="block w-full"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="mt-10 mb-8">
        <p className="text-7xl font-didot text-gray-900">Our Team</p>
      </div>

      <div className="flex items-center justify-center w-full mt-8 px-12 mb-8">
        <div className="flex items-start justify-between w-full max-w-4xl mx-auto">
          <img
            src="/images/team member 1.jpeg"
            alt="Descriptive Alt Text"
            className="w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="ml-8 flex-1">
            <p className="text-xl font-didot mb-2 text-gray-900">
              THERAPY, COACHING
            </p>
            <p className="text-5xl font-didot mb-4 mt-8">Tai Schell, PHD</p>
            <p className="text-2xl font-didot mt-8 text-gray-700">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-8 px-12 mb-8">
        <div className="flex items-start justify-between w-full max-w-4xl mx-auto">
          <div className="mr-8 flex-1">
            <p className="text-xl font-didot mb-2 text-gray-900">
              THERAPY, PSYCHIATRY, COACHING
            </p>
            <p className="text-5xl font-didot mb-4 mt-8">
              Larissa O Connor, MD
            </p>
            <p className="text-2xl font-didot mt-8 text-gray-700">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>
          </div>
          <img
            src="/images/team member 2.png"
            alt="Descriptive Alt Text"
            className="w-1/2 h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-8 px-12 mb-8">
        <div className="flex items-start justify-between w-full max-w-4xl mx-auto">
          <img
            src="/images/team member 3.jpg"
            alt="Descriptive Alt Text"
            className="w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="ml-8 flex-1">
            <p className="text-xl font-didot mb-2 text-gray-900">
              PSYCHIATRY, COACHING
            </p>
            <p className="text-5xl font-didot mb-4 mt-8">Emmett Marsh, PHD</p>
            <p className="text-2xl font-didot mt-8 text-gray-700">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-8 px-12 mb-8">
        <div className="flex items-start justify-between w-full max-w-4xl mx-auto">
          <div className="mr-8 flex-1">
            <p className="text-xl font-didot mb-2 text-gray-900">ACUPUNCTURE</p>
            <p className="text-5xl font-didot mb-4 mt-8">
              Lana Vargas, ND, LAc
            </p>
            <p className="text-2xl font-didot mt-8 text-gray-700">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>
          </div>
          <img
            src="/images/team member 4.jpeg"
            alt="Descriptive Alt Text"
            className="w-1/2 h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="bg-dark-green text-white flex flex-col items-center justify-center p-8 h-96 w-full">
        <p className="text-5xl mb-4 font-didot">Get Started, Today!</p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="bg-dark-green hover:opacity-90 text-neon-green font-didot py-2 px-4 rounded mt-3"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
