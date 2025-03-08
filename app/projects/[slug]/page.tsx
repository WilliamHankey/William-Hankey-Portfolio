"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { getProjects } from "./data";

export default function ProjectDetail() {
  const { slug } = useParams(); // ✅ Correctly get `slug` from URL params
  const projects = getProjects();
  const project = projects.find((proj) => proj.slug === slug); // ✅ Use `slug`, not `params.slug`

  if (!project) {
    return <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>;
  }

  return (
    <section className="ml-32 px-48 py-16">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-50 object-cover"
      />
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-500">{project.description}</p>
    </section>
  );
}
