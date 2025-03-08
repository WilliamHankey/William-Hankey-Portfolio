"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getProjects } from "./data";
import Link from "next/link";

export default function ProjectDetail() {
  const { slug } = useParams();
  const projects = getProjects();
  const project = projects.find((proj) => proj.slug === slug);

  const [activeTab, setActiveTab] = useState("overview"); 

  if (!project) {
    return <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>;
  }

  return (
    <section className="ml-32 px-48 py-16">

      <h1 className="text-5xl font-extrabold">{project.title}</h1>
      <p className="text-gray-500 mt-2 text-lg">
        An advanced data platform for product growth and analytics.
      </p>

      <div className="mt-6 w-full border rounded-lg shadow-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex space-x-3 mt-4">
        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Frontend</span>
        <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Project Management</span>
        <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Growth Analytics</span>
      </div>

      <div className="mt-6">
        <Link href={`https://your-live-project-url.com`} target="_blank">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Visit Live Site
          </button>
        </Link>
      </div>

      <div className="flex space-x-4 border-b mt-10">
        {["overview", "showcase", "tech"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
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
          </div>
        )}

          {activeTab === "showcase" && (
          <div className="space-y-12 mt-6">
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
          </div>
        )}

        {activeTab === "tech" && (
          <div>
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
          </div>
        )}
      </div>
    </section>
  );
}
