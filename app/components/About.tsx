"use client";

import { useSiteData } from "@/lib/use-site-data";

// Fallback used until the siteSettings document and related documents are added in Sanity.
const FALLBACK_PROFILE = {
  role: "Product Engineer & UX Strategist",
  aboutMe: [
    "I'm currently the founder of MeiFlume, an all-in-one digital transformation company, where I lead strategic initiatives across bespoke software solutions, marketing efforts, and end-to-end digital services—driven by my multipassionate nature.",
    "Before that, I was a front-end specialist at GoSolutions, focusing on creating seamless, high-performing web experiences. My career began at i3Zone Development, where I played a pivotal role in training the company on mobile responsiveness and front-end best practices. I also managed client communications, fostering strong relationships, and served as the lead designer, prototyping software solution mockups to accelerate development timelines.",
    "My journey into design started with a deep curiosity about technology and user experience, which led me to refine my skills through hands-on work and continuous learning. Beyond my professional endeavors, I'm passionate about playing the piano, reading, and staying updated with the latest tech trends. I thrive on exploring new fields, constantly evolving, and embracing new challenges.",
    "In addition to my work, I enjoy sharing my insights and experiences through writing on Medium, posting UX/UI designs on Dribbble, and showcasing branding projects on Behance. Whether learning something new or sharing the knowledge I've gathered, I'm always eager to engage, inspire, and contribute to the design and tech community.",
  ],
};

const FALLBACK_EXPERIENCES = [
  {
    _id: "meiflume",
    period: "May 2025 — Present",
    role: "Founder & Lead Consultant",
    company: "MeiFlume",
    bullets: [
      "Spearheaded the development of high-performance digital solutions tailored to business needs.",
      "Led UX/UI design initiatives to improve customer engagement and digital product usability.",
      "Provided consulting services in front-end development, software architecture, and branding.",
      "Managed client relationships and project roadmaps, ensuring quality and timely delivery.",
    ],
  },
  {
    _id: "gosolutions",
    period: "September 2024 — February 2025",
    role: "Lead Front-End Developer",
    company: "GoSolutions",
    bullets: [
      "Ensured adherence to UX/UI principles, delivering intuitive and scalable digital solutions.",
      "Mentored backend developers, bridging knowledge gaps and promoting best practices.",
      "Implemented cost-effective solutions while maintaining high performance and scalability.",
    ],
  },
  {
    _id: "i3zone",
    period: "September 2021 — June 2024",
    role: "Software Developer & Lead Designer",
    company: "i3Zone Development",
    bullets: [
      "Trained the company on mobile responsiveness and front-end best practices.",
      "Managed client communications, building strong relationships to ensure project success.",
      "Created prototypes and design mockups, accelerating software development timelines.",
    ],
  },
];

const FALLBACK_ARTICLES = [
  {
    _id: "a1",
    title: "The Future of Product Design",
    url: "https://medium.com/@williamhankey",
    source: "Published on Medium",
  },
  {
    _id: "a2",
    title: "Design Systems: A Comprehensive Guide",
    url: "https://medium.com/@williamhankey",
    source: "Published on Medium",
  },
  {
    _id: "a3",
    title: "User Research Best Practices",
    url: "https://medium.com/@williamhankey",
    source: "Published on Medium",
  },
];

export default function About() {
  const data = useSiteData();

  const profile = data?.profile ?? FALLBACK_PROFILE;
  const experiences = data?.experiences?.length
    ? data.experiences
    : FALLBACK_EXPERIENCES;
  const articles = data?.articles?.length ? data.articles : FALLBACK_ARTICLES;
  const aboutMe = profile.aboutMe?.length ? profile.aboutMe : [];

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="text-center mb-8 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        {profile.role && (
          <div className="inline-block bg-[#2C2B3E] text-white px-4 py-2 rounded-full text-sm mb-4">
            {profile.role}
          </div>
        )}
        {aboutMe.map((paragraph, index) => (
          <p key={index} className="text-gray-600 text-left mt-4 first:mt-0">
            {paragraph}
          </p>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <div key={experience._id}>
              {experience.period && <p>{experience.period}</p>}
              <p>
                {experience.role}
                {experience.company ? ` / ${experience.company}` : ""}
              </p>
              {experience.bullets?.length > 0 && (
                <ol className="text-gray-600">
                  {experience.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <div className="space-y-4">
          {articles.map((article) => (
            <a
              key={article._id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#2C2B3E] transition-colors"
            >
              <h3 className="font-medium">{article.title}</h3>
              <p className="text-sm text-gray-500">
                {article.source || "Published"}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}