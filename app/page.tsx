"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react"; // ✅ Ensure animations only run on client
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Quote from "./components/Quote";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  const { ref: skillRef, inView: skillInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // ✅ Prevent animations from running during SSR
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="ml-20 pt-16 flex flex-row flex-wrap justify-between">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="p-40">
            <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
              Hello, I’m William. Nice to meet you!
            </h1>
            <p className="mb-4">
              {`I'm currently at Atlassian on the Growth team as a Director of Product Design (IC),
              leading various types of strategic growth design work across the company.`}
            </p>
          </div>
          <div className="px-40">
            <img src="/assets/company-logo.svg" alt="Company Logo" />
          </div>
        </div>
        <div className="w-1/2">
          <img src="/assets/heroImage.png" alt="Hero Image" />
        </div>

        {/* ✅ Run animations only when component is mounted */}
        {isMounted && (
          <>
            <motion.section
              ref={skillRef}
              initial={{ opacity: 0, y: 50 }}
              animate={skillInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="p-10 bg-white rounded-lg shadow-lg"
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
              className="p-10 bg-white rounded-lg shadow-lg"
            >
              <div className="w-full">
                <About />
              </div>
            </motion.section>

            <div className="w-full">
              <Quote />
            </div>

            <motion.section
              ref={projectsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="p-10 bg-white rounded-lg shadow-lg"
            >
              <div className="w-full">
                <Projects />
              </div>
            </motion.section>
          </>
        )}

        <div className="w-full">
          <Testimonials />
        </div>
        <div className="w-full">
          <Contact />
        </div>
      </section>
    </motion.div>
  );
}
