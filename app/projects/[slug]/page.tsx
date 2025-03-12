"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getProjects } from "./data";
import Link from "next/link";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

export default function ProjectDetail() {
  const { slug } = useParams();
  const projects = getProjects();
  const project = projects.find((proj) => proj.slug === slug);

  const tabs = [
    { label: "Overview", icon: "📄" },
    { label: "Showcase", icon: "🖼️" },
    { label: "Tech", icon: "💻" },
  ];

  const [selectedTab, setSelectedTab] = useState<{ label: string; icon: string } | null>(null);



  useEffect(() => {
    setSelectedTab(tabs[0]);
  }, []);

  if (!project) {
    return <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>;
  }

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
      <section className="ml-32 px-48 py-16">
      <div className="flex flex-row gap-8 mt-6 " >
          <div className="w-1/2 ">   
          <div className="w-full border rounded-lg shadow-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
        </div>
        </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl font-extrabold">{project.title}</h1>
              <p className="text-gray-500 mt-2 text-lg">
                An advanced data platform for product growth and analytics.
              </p>
            </div>

            <div>
              <div className="flex space-x-3 mt-4">
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Frontend</span>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Project Management</span>
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Growth Analytics</span>
              </div>

              {project.link && (
                <div className="mt-6">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                      Visit Live Site
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

      </div>

   
            {/* ✅ Tabs Navigation with Framer Motion */}
            <div className="mt-10">
        <nav className="border-b">
          <ul className="flex space-x-4">
            {tabs.map((tab) => (
              <motion.li
                key={tab.label}
                initial={false}
                animate={{
                  backgroundColor: tab === selectedTab ? "#eee" : "transparent",
                }}
                className={`cursor-pointer px-4 py-2 rounded-md relative ${
                  tab === selectedTab ? "font-bold text-blue-600" : "text-gray-500"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {`${tab.icon} ${tab.label}`}
                {tab === selectedTab ? (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                  />
                ) : null}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ✅ Tab Content */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {selectedTab?.label === "Overview" && (
            <motion.div
              key="overview"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* ✅ Project Summary */}
              <div>
                <h2 className="text-2xl font-semibold">Project Overview</h2>
                <p className="text-gray-500 mt-2 leading-relaxed">
                  <strong>{project.title}</strong> is a **comprehensive growth infrastructure**
                  inspired by the tools used at Facebook, enabling **product builders** to leverage
                  **Feature Flagging, Experimentation, and Analytics** to drive business growth.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>
                <ul className="list-disc list-inside text-gray-500 space-y-2 mt-2">
                  <li><strong>Scalability Issues</strong>: Built to handle millions of data points efficiently.</li>
                  <li><strong>Complex Experimentation</strong>: Integrated seamless A/B testing with real-time analytics.</li>
                  <li><strong>Feature Management</strong>: Enabled dynamic feature flagging to release updates safely.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Key Features</h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-500 mt-2">
                  <li className="flex items-center space-x-2">
                    <i className="devicon-react-original text-2xl"></i>
                    <span>Feature Flagging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="devicon-nodejs-plain text-2xl"></i>
                    <span>Real-time Experimentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="devicon-react-original text-2xl"></i>
                    <span>Scalable Data Infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="devicon-nodejs-plain text-2xl"></i>
                    <span>Growth-Focused Analytics</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {selectedTab?.label === "Showcase" && (
            <motion.div
              key="showcase"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-12 mt-6"
            >
              {project.showcase?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="md:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Description */}
                  <div className="md:w-1/2 px-6">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {selectedTab?.label === "Tech" && (
            <motion.div
              key="tech"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
              <ul className="mt-2 space-y-2">
                {project.icons.map((icon, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <i className={`${icon} text-2xl`}></i>
                    <span className="capitalize">
                      {icon.replace("devicon-", "").replace("-original", "").replace("-plain", "")}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  </motion.div>
  
  );
}

const container: React.CSSProperties = {
  width: 480,
  height: "60vh",
  maxHeight: 360,
  borderRadius: 10,
  background: "white",
  overflow: "hidden",
  boxShadow:
      "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
  display: "flex",
  flexDirection: "column",
}

const nav: React.CSSProperties = {
  background: "#fdfdfd",
  padding: "5px 5px 0",
  borderRadius: "10px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #eeeeee",
  height: 44,
}

const tabsStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: 14,
}

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: "flex",
  width: "100%",
}

const tab: React.CSSProperties = {
  ...tabsStyles,
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  background: "white",
  cursor: "pointer",
  height: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "#0f1115",
}

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "var(--accent)",
}

const iconContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}

const icon: React.CSSProperties = {
  fontSize: 128,
}
