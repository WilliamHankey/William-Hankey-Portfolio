"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = {
  "/#about": { name: "About" },
  "/#work": { name: "Work" },
  "/#testimonials": { name: "Testimonials" },
  "/#contact": { name: "Contact" },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": { name: "Download CV" },
};

const socialLinks = [
  {
    name: "LinkedIn",
    defaultSrc: "https://s.magecdn.com/social/mw-linkedin.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-linkedin.svg",
  },
  {
    name: "Dribbble",
    defaultSrc: "https://s.magecdn.com/social/mw-dribbble.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-dribbble.svg",
  },
  {
    name: "Behance",
    defaultSrc: "https://s.magecdn.com/social/mw-behance.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-behance.svg",
  },
  {
    name: "Medium",
    defaultSrc: "https://s.magecdn.com/social/mw-medium.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-medium.svg",
  },
];

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-800 text-white p-4 lg:px-24 lg:py-8">
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="w-full lg:w-1/4">
          <h6 className="text-lg font-semibold mb-4">About Me</h6>
          <p className="text-gray-300 text-sm">
            I'm a freelance digital solutions specialist at MeiFlume, helping clients build and scale their online presence with creative and tech-driven solutions.
          </p>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <div className="flex flex-col space-y-2">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isInternal = path.startsWith("/#");
              return isInternal ? (
                <a
                  key={path}
                  href={path}
                  onClick={(e) => handleScroll(e, path.replace("/#", ""))}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-gray-300">
            <div>Cape Town, South Africa</div>
            <div>william@meiflume.com</div>
            <div>Connect on LinkedIn</div>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">FOLLOW ME HERE</h3>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <button
                key={link.name}
                className="border border-gray-600 rounded p-2 hover:border-white transition-colors"
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={hovered === link.name ? link.hoverSrc : link.defaultSrc}
                  alt={link.name}
                  className="w-6 h-6 transition-all duration-200"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-700 text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <p>Connect on LinkedIn</p>
      </div>
    </footer>
  );
}
  