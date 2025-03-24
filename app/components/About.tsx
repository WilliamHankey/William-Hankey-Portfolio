export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="text-center mb-8 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="inline-block bg-[#2C2B3E] text-white px-4 py-2 rounded-full text-sm mb-4">
          Product Designer & UX Strategist
        </div>
        <p className="text-gray-600">
          I'm a product designer with a passion for creating user-centered experiences.
          I believe in the power of design to solve complex problems and make a positive impact.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-gray-600">
          With over 10 years of experience in product design, I've worked with various companies
          to create innovative solutions that drive business growth and user satisfaction.
        </p>
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

