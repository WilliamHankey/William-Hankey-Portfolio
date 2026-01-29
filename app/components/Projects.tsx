"use client";

import Link from "next/link";
import Image from "next/image";
import { useTransition, useEffect, useState } from "react";
import { Project } from "../projects/[slug]/data";

export default function Projects() {
  const [isPending, startTransition] = useTransition();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((fetchedProjects: Project[]) => {
        setProjects(fetchedProjects ?? []);
      })
      .catch(() => {
        setProjects([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="work" className="grid grid-cols-1 gap-8 lg:gap-24 p-4 lg:p-24">
      <div className="text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-4">Work</h1>
        <div className="inline-block bg-[#2C2B3E] text-white px-4 py-2 rounded-full text-sm">
          Featured projects and case studies
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
      projects.map((project, index) => (
        <Link 
          key={project.slug} 
          href={`/projects/${project.slug}`} 
          className="block w-full group"
          onClick={(e) => {
            startTransition(() => {
              // The transition will be handled by Next.js
            });
          }}
        >
          <div className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} group-hover:scale-[1.02]`}>
            <div className="w-full lg:w-1/2 h-48 lg:h-auto relative">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {isPending && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
            </div>
            <div className="p-4 lg:p-8 w-full lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-semibold mb-2 group-hover:text-[#2C2B3E] transition-colors">{project.title}</h2>
              <p className="text-gray-600 text-sm lg:text-base mb-4">{project.description || project.shortOverview}</p>
              <div className="flex flex-wrap gap-3">
                {project.icons.map((icon, index) => (
                  <i key={index} className={`${icon} text-xl lg:text-2xl text-gray-800`} />
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))
      )}
    </section>
  );
}
