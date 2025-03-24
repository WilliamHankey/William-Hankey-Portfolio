"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Quote from "../components/Quote";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  const { ref: skillRef, inView: skillInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="lg:ml-20 pt-16 flex flex-col lg:flex-row flex-wrap justify-between relative">
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div className="p-4 lg:p-40">
            <h1 className="mb-8 text-4xl lg:text-5xl font-semibold tracking-tighter">
              Hello, I'm William. Nice to meet you!
            </h1>
            <p className="mb-4">
              {`I'm currently at Atlassian on the Growth team as a Director of Product Design (IC),
              leading various types of strategic growth design work across the company.`}
            </p>
          </div>
          <div className="px-4 lg:px-40">
            <img src="/assets/company-logo.svg" alt="Company Logo" className="w-full max-w-md" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
          <img src="/assets/heroImage.png" alt="Hero Image" className="w-full h-auto" />
          <motion.button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6 text-gray-600"
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

        <motion.section
          ref={skillRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-4 lg:p-10 bg-white rounded-lg shadow-lg mt-8 lg:mt-0 w-full"
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

        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-4 lg:p-10 bg-white rounded-lg shadow-lg mt-8 lg:mt-0"
        >
          <div className="w-full">
            <Projects />
          </div>
        </motion.section>

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