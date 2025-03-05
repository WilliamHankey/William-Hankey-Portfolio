import Link from "next/link";

const projects = [
  { id: "project-1", title: "Project One" },
  { id: "project-2", title: "Project Two" },
];

export default function Projects() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`} className="text-blue-500">
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
