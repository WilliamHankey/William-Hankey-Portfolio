"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { useState } from "react";
import { useSiteData } from "@/lib/use-site-data";
import { getSocialIcons } from "@/lib/social-icons";

// Fallback used until siteSettings is populated in Sanity.
const FALLBACK_SOCIALS = [
  {
    name: "LinkedIn",
    defaultSrc: "https://s.magecdn.com/social/mw-linkedin.svg",
    hoverSrc: "https://s.magecdn.com/social/tc-linkedin.svg",
    link: "https://www.linkedin.com/in/williamhankey/",
  },
];

const FALLBACK_HERO_GREETING = "Hello, I'm William. Nice to meet you!";
const FALLBACK_HERO_INTRO = `I'm currently the founder of MeiFlume, an all-in-one digital transformation company,
leading strategic initiatives across bespoke software solutions, marketing efforts,
and end-to-end digital services.`;

export default function Home() {
  const { ref: skillRef, inView: skillInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [hovered, setHovered] = useState<string | null>(null);
  const siteData = useSiteData();
  const profile = siteData?.profile ?? null;

  const heroGreeting = profile?.heroGreeting || FALLBACK_HERO_GREETING;
  const heroIntro = profile?.heroIntro || FALLBACK_HERO_INTRO;

  const scrollToAbout = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = siteData?.profile?.socials?.length
    ? siteData.profile.socials.map((social) => {
        const icons = getSocialIcons(social.platform);
        return {
          name: social.platform,
          link: social.url,
          defaultSrc: icons?.defaultSrc,
          hoverSrc: icons?.hoverSrc,
        };
      })
    : FALLBACK_SOCIALS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="lg:ml-20 pt-16 flex flex-col lg:flex-row flex-wrap justify-between relative background-image: url('/assets/hero.png')">
        <div
          className="w-full flex flex-row justify-between background-image: url('/assets/hero.png')"
          style={{
            backgroundImage: "url('/assets/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "95vh",
          }}
        >
          <div className="w-full lg:w-1/2 flex flex-col justify-between background-image: url('/assets/hero.png')">
            <div className="p-4 lg:p-40 text-white">
              <h1 className="mb-8 text-4xl lg:text-5xl font-semibold tracking-tighter">
                {heroGreeting}
              </h1>
              <p className="mb-4">{heroIntro}</p>
            </div>
            <div className="px-4 lg:px-40 relative">
              <img
                src="/assets/company-logo.svg"
                alt="Company Logo"
                className="w-full max-w-48 absolute bottom-8"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="flex flex-row space-x-1 absolute bottom-8 right-9 ">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-gray-500 border-2 items-center rounded"
                  onMouseEnter={() => setHovered(link.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={
                      hovered === link.name ? link.hoverSrc : link.defaultSrc
                    }
                    alt={link.name}
                    className="w-full h-7 transition-all duration-200"
                  />
                </a>
              ))}
            </div>

            <motion.button
              onClick={scrollToAbout}
              className="absolute bottom-8 left-1 transform -translate-x-1/2 bg-[#2C2B3E] hover:bg-[#2C2B3E]/90 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        <motion.section
          ref={skillRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-4 lg:p-10 shadow-lg mt-8 lg:mt-0 w-full"
          style={{ background: "#F9FAFB" }}
        >
          <div className="w-full">
            <Skills />
          </div>
        </motion.section>

        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-4 lg:p-10 bg-white rounded-lg shadow-lg mt-8 lg:mt-0"
        >
          <div className="w-full">
            <About />
          </div>
        </motion.section>

        <div className="w-full mt-8 lg:mt-0">
          <Quote />
        </div>

        <div className="w-full mt-8 lg:mt-0">
          <Projects />
        </div>

        <div className="w-full mt-8 lg:mt-0">
          <Testimonials />
        </div>
        <div className="w-full mt-8 lg:mt-0">
          <Contact />
        </div>
      </section>
    </motion.div>
  );
}