"use client";

import { useSiteData } from "@/lib/use-site-data";

// Fallback used until skill documents are added in Sanity.
const FALLBACK_SKILLS: { _id: string; name: string; logo: string }[] = [
  { _id: "html", name: "HTML", logo: "/assets/logos/html.svg" },
  { _id: "css", name: "CSS", logo: "/assets/logos/css.svg" },
  { _id: "javascript", name: "JavaScript", logo: "/assets/logos/javascript.svg" },
  { _id: "typescript", name: "TypeScript", logo: "/assets/logos/typescript.svg" },
  { _id: "react", name: "React", logo: "/assets/logos/react.svg" },
  { _id: "angular", name: "Angular", logo: "/assets/logos/angular.svg" },
  { _id: "vue", name: "Vue", logo: "/assets/logos/vue.svg" },
  { _id: "tailwind", name: "Tailwind", logo: "/assets/logos/tailwind.svg" },
  { _id: "mongo", name: "MongoDB", logo: "/assets/logos/mongo.svg" },
  {
    _id: "sql",
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
  },
  { _id: "figma", name: "Figma", logo: "/assets/logos/figma.svg" },
  { _id: "git", name: "Git", logo: "/assets/logos/git.svg" },
  { _id: "next", name: "Next.js", logo: "/assets/logos/next.svg" },
  { _id: "node", name: "Node.js", logo: "/assets/logos/node.js.svg" },
  { _id: "express", name: "Express", logo: "/assets/logos/express.svg" },
  { _id: "sass", name: "Sass", logo: "/assets/logos/sass.svg" },
  { _id: "storybook", name: "Storybook", logo: "/assets/logos/storybook.svg" },
  { _id: "sanity", name: "Sanity", logo: "/assets/logos/sanity.svg" },
];

export default function Skills() {
  const data = useSiteData();
  const skills = data?.skills?.length ? data.skills : FALLBACK_SKILLS;

  return (
    <section className="w-full text-center p-4 lg:p-20" id="skills">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-8 text-2xl lg:text-3xl font-semibold tracking-tighter">
          Skills
        </h1>
        <p className="mb-8 text-sm lg:text-base">
          The skills, tools, and technologies I am really good at:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill._id ?? skill.name}
              className="flex flex-col items-center gap-2"
            >
              {skill.logo ? (
                <img
                  className="w-12 h-12 lg:w-20 lg:h-20"
                  src={skill.logo}
                  alt={skill.name}
                  title={skill.name}
                />
              ) : null}
              <span className="text-xs text-gray-500">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}