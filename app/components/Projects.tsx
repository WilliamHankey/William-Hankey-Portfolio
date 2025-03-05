import Link from "next/link";
import Image from "next/image";
import { getProjects } from "../pages/projects/[slug]/data";

export default function Projects() {
  const projects = getProjects();

  return (
    <section className="grid grid-cols-1 gap-24 p-24">
    {projects.map((project, index) => (
      <Link key={project.slug} href={`/projects/${project.slug}`} className="block w-full">
        {/* ✅ Apply `odd:flex-row-reverse` to the wrapping div */}
        <div className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="w-1/2 h-50 object-contain"
          />
          <div className="p-4 w-1/2">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="flex space-x-3 mt-3">
              {project.icons.map((icon, index) => (
                <i key={index} className={`${icon} text-2xl text-gray-800`} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    ))}
  </section>
  
  );
}
