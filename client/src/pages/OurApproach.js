import React from "react";
import { useNavigate } from "react-router-dom";
export default function OurApproach() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full pt-0 mb-8">
        <img
          src="/images/approach.jpg"
          className="block w-full"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="w-full min-h-screen p-8 flex flex-col justify-center">
        <h1 className="text-6xl font-didot text-center mb-6">
          Connecting you with us
        </h1>
        <div className="flex justify-around items-start mt-12 p-11">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-didot"> 1</h2>
            <p className="mt-2 font-didot text-center text-xl">
              What are you looking for? You will be asked a few questions to
              help us tailor our suggestions.
            </p>
          </div>
          <div className="flex flex-col items-center px-4">
            <h2 className="text-5xl font-didot"> 2</h2>
            <p className="mt-2 font-didot text-center text-xl">
              Personalized suggestions. We will share who from our team is the
              best fit for your needs and preferences.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-didot">3</h2>
            <p className="mt-2 font-didot text-center text-xl">
              Pick the right therapist. Schedule a free consultation with any of
              your recommended doctors to see is the right fit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-dark-green w-full min-h-screen flex flex-col justify-center items-center p-8 text-center">
        <p className="text-5xl font-didot text-white mb-4">
          "Its a scary thing trying to get help, but TheHealthyMinds took a lot
          of that anxiety and fear out of the equation. I was able to get
          personalized recommendations on which provider from the team would
          best fit my needs."
        </p>
        <p className=" font-didot text-white text-lg">
          — An Indian Tech Consulting Employee, TheHealthyMinds
        </p>
      </div>

      <div className="bg-gray-200 w-full h-64 flex flex-col justify-center items-center p-8 text-center">
        <p className="text-5xl font-didot mb-4">
          Let us help you find care that's right for you.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="bg-dark-green text-neon-green text-lg font-didot py-2 px-4 rounded hover:opacity-90 mt-5"
        >
          Reach Out to Us
        </button>
      </div>
    </div>
  );
}
