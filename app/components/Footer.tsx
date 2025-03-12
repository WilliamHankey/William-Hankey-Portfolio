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
      <footer className="p-4 bg-gray-800 text-white text-center flex justify-between z-10 flex-col px-24 py-8">
        <div className="flex flex-row w-full gap-8">
          <div className="w-1/4 text-left">
            <h6>About Me</h6>
            <p>I'm a freelance digital solutions specialist at MeiFlume, helping clients build and scale their online presence with creative and tech-driven solutions.</p>
          </div>
          <div className="w-1/4 flex flex-col text-left">
            <h3>
              Navigation
            </h3>
            <div className="flex flex-col ">
                  {Object.entries(navItems).map(([path, { name }]) => {
                    const isInternal = path.startsWith("/#");

                    return isInternal ? (
                      <a
                        key={path}
                        href={path}
                        onClick={(e) => handleScroll(e, path.replace("/#", ""))}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 m-1 cursor-pointer"
                      >
                        {name}
                      </a>
                    ) : (
                      <Link
                        key={path}
                        href={path}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 m-1"
                      >
                        {name}
                      </Link>
                    );
                  })}
              </div>
            </div>

          <div className="w-1/4 text-left">
            <h3>Contact</h3>
            <div>Cape Town, South Africa</div>
            <div>william@meiflume.com</div>
            <div>Connect on LinkedIN</div>
          </div>
          <div className="flex flex-col gap-4 text-left">
            <h3>FOLLOW ME HERE</h3>
              <div className="flex flex-row space-x-2">
                {socialLinks.map((link) => (
                  <button
                    key={link.name}
                    className="border-gray-500 border-2  items-center rounded"
                    onMouseEnter={() => setHovered(link.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img
                      src={hovered === link.name ? link.hoverSrc : link.defaultSrc}
                      alt={link.name}
                      className="w-full h-8 transition-all duration-200"
                    />
                  </button>
                ))}
              </div>
            </div>
        </div>
      
        <div className="flex flex-row w-full justify-between border-t-2 border-gray-500 pt-8">
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
          <p>Connect on LinkedIn</p>
        </div>
      </footer>
    );
  }
  