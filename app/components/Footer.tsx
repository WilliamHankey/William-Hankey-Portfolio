"use client";

import Link from "next/link";
import { useState } from "react";
import { useSiteData } from "@/lib/use-site-data";
import { getSocialIcons } from "@/lib/social-icons";

// Fallback used until siteSettings is populated in Sanity.
const DEFAULT_CV_URL =
  "https://drive.google.com/uc?export=download&id=1zSE7aTNEI1nnSe23QChZzNKGYJFB5nCR";

const FALLBACK_PROFILE = {
  footerAbout:
    "I'm a freelance digital solutions specialist at MeiFlume, helping clients build and scale their online presence with creative and tech-driven solutions.",
  email: "william@meiflume.com",
  location: "Cape Town, South Africa",
  name: "William Hankey",
};

const FALLBACK_SOCIALS = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/williamhankey/",
  },
];

const baseNavItems = [
  { href: "/#about", name: "About" },
  { href: "/#work", name: "Work" },
  { href: "/#testimonials", name: "Testimonials" },
  { href: "/#contact", name: "Contact" },
];

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null);
  const data = useSiteData();

  const profile = data?.profile ?? FALLBACK_PROFILE;
  const socials = data?.profile?.socials?.length
    ? data.profile.socials
    : FALLBACK_SOCIALS;
  const cvUrl = data?.profile?.cvUrl || DEFAULT_CV_URL;
  const navItems = [
    ...baseNavItems,
    { href: cvUrl, name: "Download CV" },
  ];

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const firstSocial = socials[0];

  return (
    <footer className="bg-gray-800 text-white p-4 lg:px-24 lg:py-8 z-20">
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="w-full lg:w-1/4">
          <h6 className="text-lg font-semibold mb-4">About Me</h6>
          <p className="text-gray-300 text-sm">{profile.footerAbout}</p>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <div className="flex flex-col space-y-2">
            {navItems.map(({ href, name }) => {
              const isInternal = href.startsWith("/#");
              return isInternal ? (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleScroll(e, href.replace("/#", ""))}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
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
            {profile.location && <div>{profile.location}</div>}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-white transition-colors"
              >
                {profile.email}
              </a>
            )}
            {firstSocial && (
              <a
                href={firstSocial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Connect on {firstSocial.platform}
              </a>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">FOLLOW ME HERE</h3>
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => {
              const icons = getSocialIcons(social.platform);
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 rounded p-2 hover:border-white transition-colors"
                  onMouseEnter={() => setHovered(social.platform)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {icons ? (
                    <img
                      src={
                        hovered === social.platform
                          ? icons.hoverSrc
                          : icons.defaultSrc
                      }
                      alt={social.platform}
                      className="w-6 h-6 transition-all duration-200"
                    />
                  ) : (
                    <span className="w-6 h-6 flex items-center justify-center text-sm font-medium">
                      {social.platform.charAt(0)}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-gray-700 text-sm text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} {profile.name || "My Portfolio"}
        </p>
        {firstSocial && <p>Connect on {firstSocial.platform}</p>}
      </div>
    </footer>
  );
}