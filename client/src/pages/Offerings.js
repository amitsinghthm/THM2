import React from "react";
import { useNavigate } from "react-router-dom";
export default function Offerings() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full pt-0">
        <img
          src="/images/filler1.jpg"
          className="block w-full"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
          alt="img"
        />
      </div>

      <div className="text-center my-8 p-10 max-w-70">
        <h1 className="text-7xl font-didot text-gray-700 mb-8">
          Our Offerings
        </h1>

        <div className="flex justify-between items-start mx-8">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102931077-HG23UBVOWJOHXRYSX2I1/image-asset.png?format=1500w"
              alt="First Image"
              className="mb-4"
            />
            <p className="text-2xl font-didot mb-2">
              Bespoke Wellness Programs
            </p>
            <p className="italic">
              We offer customized mental health programs tailored to the unique
              dynamics of each industry. These programs are designed to address
              the specific stressors and challenges faced by employees in
              sectors such as IT, Sports, and Academia, ensuring that the
              support provided is both relevant and effective.{" "}
            </p>
          </div>

          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102931093-HNB2BHOQK8OQY7CG9OGM/image-asset.png?format=1500w"
              alt="Second Image"
              className="mb-5"
            />
            <p className="text-2xl mb-6 font-didot">AI-Enhanced Platform</p>
            <p className="italic">
              We leverage advanced AI within the mobile app to facilitate early
              detection of mental health needs, providing timely interventions.
              This technology-driven approach ensures scalability and
              efficiency, allowing for personalized care and support that
              evolves with the needs of the workforce.
            </p>
          </div>
        </div>

        <div className="my-8">
          <img
            src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102931086-I1LE3VIYXP2PFWZLW58J/image-asset.png?format=1500w"
            alt="Centered Image"
            className="mx-auto mb-4 w-full max-w-md"
          />
          <div className="mx-auto w-1/2">
            <p className="text-2xl mb-2 font-didot">Support for Whole Family</p>
            <p className="italic text-1xl">
              Understanding that an employee's performance is influenced by
              their overall life context, TheHealthyMinds extends its services
              to include family members. This holistic approach ensures that the
              well-being of the employee's family is supported, contributing to
              a more focused and content workforce.
            </p>
          </div>
        </div>
        <button
          className="bg-dark-green text-neon-green hover:opacity-90 text-xl font-didot py-4 px-8 rounded-lg mt-9 w-auto min-w-[300px]"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </button>
      </div>

      <div className="flex p-8">
        <img
          src="/images/woman in park.jpeg"
          alt="First Image"
          className="w-1/2"
        />
        <p className="text-5xl font-didot text-gray-700 px-8">
          I hadn't anticipated the challenges of becoming a new mom and how it
          would heighten my anxiety at work. Thankfully, TheHealthyMinds
          provided the support I needed to regain my focus and balance.” — Neha,
          a corporate member
        </p>
      </div>

      <div className="bg-dark-green p-6 text-center w-full h-[500px] flex flex-col justify-center items-center">
        <p className="text-6xl mb-6 font-didot text-white">
          Get started with TheHealthyMinds, today.
        </p>
        <button
          className="bg-dark-green text-neon-green hover:opacity-90 text-xl font-didot py-4 px-8 rounded-lg mt-9 w-auto min-w-[300px]"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
