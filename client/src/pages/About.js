import React from "react";
import ContactForm from "../components/ContactForm";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full pt-0">
        <img
          src="/images/corp team.jpg"
          className="block w-full"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="mx-auto max-w-75 p-8">
        <div className="flex items-stretch space-x-8 w-full">
          <div className="flex-1">
            <h2 className="text-6xl font-didot text-gray-700 leading-tight mb-3">
              Transforming Mental Healthcare
            </h2>
            <p className="text-xl text-gray-600 font-didot mb-4">
              Welcome to TheHealthyMinds, a pioneering mental health collective
              dedicated to integrating quality mental health care into the
              fabric of business growth strategies. Our team, composed of
              esteemed doctoral-level psychologists, psychiatrists, and seasoned
              healthcare consultants, is united by a common mission: to make
              exceptional mental health services accessible to everyone.
            </p>
            <p className="text-xl text-gray-600 font-didot mb-4">
              At TheHealthyMinds, we believe that mental wellness is a
              cornerstone of organizational success. We are committed to
              assisting businesses, their employees, and families by offering a
              spectrum of comprehensive mental healthcare solutions. From
              tailored wellness programs that address the unique needs of
              various industries to innovative tools that facilitate early
              intervention, our approach is designed to nurture healthier work
              environments and promote sustained growth.
            </p>
            <p className="text-xl text-gray-600 font-didot mb-4">
              Through our expertise and compassionate care, we empower companies
              to embrace mental health as a critical asset, transforming
              challenges into opportunities for strengthening resilience and
              enhancing productivity. Join us in redefining how mental health
              care is perceived and implemented in the workplace, paving the way
              for a future where well-being and business success go hand in
              hand.
            </p>
          </div>
          <div className="w-1/2 flex">
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102938127-AEFUOLOCS5NCKUHZTF90/image-asset.jpeg?format=1500w"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-dark-green min-h-screen p-8 flex justify-center items-center w-full mt-8">
        <div className="flex w-full max-w-6xl mx-auto">
          <div className="flex-1 text-left p-8">
            <h1 className="text-5xl font-didot text-white mb-4">Contact Us!</h1>
            <p className="text-xl text-white font-didot">
              Reach out for additional details
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
