"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Project } from "./data";
import Link from "next/link";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

export default function ProjectDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof slug !== "string") return;
    fetch(`/api/projects/${encodeURIComponent(slug)}`)
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((fetchedProject: Project | null) => {
        setProject(fetchedProject ?? null);
      })
      .catch(() => {
        setProject(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);

  const tabs = [
    { label: "Overview", icon: "📄" },
    { label: "Showcase", icon: "🖼️" },
    { label: "Tech", icon: "💻" },
  ];

  const [selectedTab, setSelectedTab] = useState<{ label: string; icon: string } | null>(null);

  useEffect(() => {
    setSelectedTab(tabs[0]);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <header className="relative">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="fixed top-6 left-6 z-50 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Back to home"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative h-[40vh] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 text-lg mb-6">
              {project.description || project.shortOverview}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techStack?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            {project.link && (
              <Link 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Visit Live Site
              </Link>
            )}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex flex-wrap -mb-px">
            {tabs.map((tab) => (
              <motion.button
                key={tab.label}
                initial={false}
                animate={{
                  backgroundColor: tab === selectedTab ? "#f3f4f6" : "transparent",
                }}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-t-lg ${
                  tab === selectedTab 
                    ? "text-blue-600 border-b-2 border-blue-600" 
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="prose prose-lg max-w-none">
          <AnimatePresence mode="wait">
            {selectedTab?.label === "Overview" && (
              <motion.div
                key="overview"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-gray-600">
                    {project.shortOverview}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Challenges & Solutions</h2>
                  <ul className="list-disc list-inside space-y-3 text-gray-600">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>
                        <strong>{challenge.title}</strong>: {challenge.description}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                        <i className={`${feature.icon} text-2xl text-gray-700`} />
                        <span className="text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {selectedTab?.label === "Showcase" && (
              <motion.div
                key="showcase"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-16"
              >
                {project.showcase?.map((item, index) => (
                  <section
                    key={index}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 items-center`}
                  >
                    <div className="w-full lg:w-1/2">
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </section>
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
                <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                    >
                      <i className={`${tech.icon} text-2xl text-gray-700`} />
                      <span className="text-gray-600">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
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
