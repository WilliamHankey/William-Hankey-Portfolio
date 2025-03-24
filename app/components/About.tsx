export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="text-center mb-8 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="inline-block bg-[#2C2B3E] text-white px-4 py-2 rounded-full text-sm mb-4">
          Product Engineer & UX Strategist
        </div>
        <p className="text-gray-600 text-left">
          I'm currently the founder of MeiFlume, an all-in-one digital transformation company, where I lead 
          strategic initiatives across bespoke software solutions, marketing efforts, and end-to-end digital 
          services—driven by my multipassionate nature.
        </p>
        <p className="text-gray-600 text-left mt-4">
          Before that, I was a front-end specialist at GoSolutions, focusing on creating seamless, high-performing
          web experiences. My career began at i3Zone Development, where I played a pivotal role in training the 
          company on mobile responsiveness and front-end best practices. I also managed client communications, 
          fostering strong relationships, and served as the lead designer, prototyping software solution mockups
          to accelerate development timelines.
        </p>
        <p className="text-gray-600 text-left mt-4"> 
          My journey into design started with a deep curiosity about technology and user experience, which led me to 
          refine my skills through hands-on work and continuous learning. Beyond my professional endeavors, I'm passionate
          about playing the piano, reading, and staying updated with the latest tech trends. I thrive on exploring new fields,
          constantly evolving, and embracing new challenges.
        </p>
        <p className="text-gray-600 text-left mt-4">
          In addition to my work, I enjoy sharing my insights and experiences through writing on Medium, posting UX/UI designs 
          on Dribbble, and showcasing branding projects on Behance. Whether learning something new or sharing the knowledge 
          I've gathered, I'm always eager to engage, inspire, and contribute to the design and tech community.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <p>May 2025 — Present</p>
            <p>Founder & Lead Consultant / MeiFlume</p>
            <ol className="text-gray-600">
              <li>Spearheaded the development of high-performance digital solutions tailored to business needs.</li>
              <li>Led UX/UI design initiatives to improve customer engagement and digital product usability.</li>
              <li>Provided consulting services in front-end development, software architecture, and branding.</li>
              <li>Managed client relationships and project roadmaps, ensuring quality and timely delivery.</li>
            </ol>
          </div>
          <div>
            <p>September 2024 — Febraury 2025</p>
            <p>Lead Front-End Developer / GoSolutions</p>
            <ol className="text-gray-600">
              <li>Ensured adherence to UX/UI principles, delivering intuitive and scalable digital solutions.</li>
              <li>Mentored backend developers, bridging knowledge gaps and promoting best practices.</li>
              <li>Implemented cost-effective solutions while maintaining high performance and scalability.</li>
            </ol>
          </div>
          <div>
            <p>Septemeber 2021 — June 2024</p>
            <p>Software Developer & Lead Designer / i3Zone Development</p>
            <ol className="text-gray-600">
              <li>Trained the company on mobile responsiveness and front-end best practices.</li>
              <li>Managed client communications, building strong relationships to ensure project success.</li>
              <li>Created prototypes and design mockups, accelerating software development timelines.</li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <div className="space-y-4">
          <a 
            href="https://medium.com/@williamhankey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-gray-600 hover:text-[#2C2B3E] transition-colors"
          >
            <h3 className="font-medium">The Future of Product Design</h3>
            <p className="text-sm text-gray-500">Published on Medium</p>
          </a>
          <a 
            href="https://medium.com/@williamhankey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-gray-600 hover:text-[#2C2B3E] transition-colors"
          >
            <h3 className="font-medium">Design Systems: A Comprehensive Guide</h3>
            <p className="text-sm text-gray-500">Published on Medium</p>
          </a>
          <a 
            href="https://medium.com/@williamhankey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-gray-600 hover:text-[#2C2B3E] transition-colors"
          >
            <h3 className="font-medium">User Research Best Practices</h3>
            <p className="text-sm text-gray-500">Published on Medium</p>
          </a>
        </div>
      </div>
    </section>
  );
}

