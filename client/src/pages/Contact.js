import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
export default function Contact() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex flex-col w-1/2 px-40 pt-12">
        <h1 className="text-6xl font-didot text-gray-700 mb-6">Contact Us</h1>
        <h2 className="text-xl font-didot text-gray-700 mb-4 mt-8">
          email@thehealthyminds.in
        </h2>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          +91 98905 72887
        </h2>
      </div>

      <div className="w-1/2 flex items-start justify-center pt-12">
        <ContactForm />
      </div>
    </div>
  );
}
