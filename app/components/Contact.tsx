"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-8 lg:py-16 px-4 lg:px-48" style={{ background: 'rgb(28 102 115)' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">Contact Me</h2>
        <p className="text-white/90 mb-6 text-sm lg:text-base">
          Feel free to reach out! Fill out the form below, and I'll get back to you soon.
        </p>

        {submitted ? (
          <div className="bg-white/10 text-white p-4 rounded-lg text-center text-base lg:text-lg font-medium border border-white/20">
            ✅ Thank you for reaching out! I'll get back to you as soon as possible.
          </div>
        ) : (
          <form
            action="https://formsubmit.co/edc075b99ae845a10a31db562ce88fcd.com"
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
              <label className="block text-white/90 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-sm lg:text-base bg-white/10 text-white placeholder-white/50"
              />
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-sm lg:text-base bg-white/10 text-white placeholder-white/50"
              />
            </div>

            <div>
              <label className="block text-white/90 font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-sm lg:text-base bg-white/10 text-white placeholder-white/50"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-[rgb(28,102,115)] px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition w-full text-sm lg:text-base"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
