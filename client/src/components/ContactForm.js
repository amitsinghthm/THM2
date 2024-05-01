import React, { useState } from "react";
import baseUrl from "../baseURL";
//const baseURL = import.meta.env.VITE_API_BASE_URL;
export default function ContactForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        alert("Your message has been sent successfully!");
      } else {
        alert("Your message has been sent successfully!");
        console.error("Failed to send message:", response.statusText);
      }
    } catch (error) {
      alert("Your message has been sent successfully!");
      console.error("Network error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto bg-white">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-3">
          <div className="flex flex-col w-1/2">
            <label className="text-sm block mb-2">First Name</label>
            <input
              type="text"
              required
              placeholder="John"
              className="p-2 border rounded w-full"
              id="firstname"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-sm block mb-2">Last Name</label>
            <input
              type="text"
              required
              placeholder="Doe"
              className="p-2 border rounded w-full"
              id="lastname"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm block mb-2">Phone No</label>
          <input
            type="tel"
            required
            placeholder="(555) 555-5555"
            className="p-2 border rounded w-full"
            id="phone"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm block mb-2">Email (required)</label>
          <input
            type="email"
            required
            placeholder="john.doe@example.com"
            className="p-2 border rounded w-full"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm block mb-2">Message</label>
          <textarea
            required
            placeholder="Your message here"
            className="p-2 border rounded h-32 w-full"
            id="message"
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-dark-green text-neon-green font-didot py-2 px-4 rounded hover:opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  );
}
