"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-16 px-8 md:px-48">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-500 mb-6">
        Feel free to reach out! Fill out the form below, and I'll get back to you soon.
      </p>

      {submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center text-lg font-medium">
          ✅ Thank you for reaching out! I'll get back to you as soon as possible.
        </div>
      ) : (
        <form
          action="https://formsubmit.co/edc075b99ae845a10a31db562ce88fcd.com" // Replace with your FormSubmit link
          method="POST"
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* Anti-spam hidden field */}
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
