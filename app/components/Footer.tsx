"use client";
import Link from "next/link";

const navItems = {
  "/#about": { name: "About" },
  "/#work": { name: "Work" },
  "/#testimonials": { name: "Testimonials" },
  "/#contact": { name: "Contact" },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": { name: "Download CV" },
};
export default function Footer() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
      <footer className="p-4 bg-gray-800 text-white text-center flex justify-between">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <div>
          About Me
        </div>
        <div>
        <h3>
          Navigation
        </h3>
        <div className="flex flex-col ">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isInternal = path.startsWith("/#");

                return isInternal ? (
                  <a
                    key={path}
                    href={path}
                    onClick={(e) => handleScroll(e, path.replace("/#", ""))}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 cursor-pointer"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                );
              })}
            
          </div>
          
          </div>
          <div>
          Contact
          <div>Cape Town, South Africa
            william@meiflume.com
            Connect on LinkedIN
          </div>
            </div>
            <div>
              FOLLOW ME HERE
              <div className="flex flex-col">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <img src="https://s.magecdn.com/social/mw-linkedin.svg" alt="LinkedIn" className="w-4 h-4 mr-2" />
 
</button>


              </div>
        
            </div>
      </footer>
    );
  }
  