const skillLogos: Record<string, { name: string }> = {
    html: {
      name: "../assets/logos/html.svg",
    },
    css: {
      name: "../assets/logos/css.svg",
    },
    javascript: {
      name: "../assets/logos/javascript.svg",
    },
    typescript: {
      name: "../assets/logos/typescript.svg",
    },
    react: {
      name: "../assets/logos/react.svg",
    },
    angular: {
      name: "../assets/logos/angular.svg",
    },
    vue: {
      name: "../assets/logos/vue.svg",
    },
    tailwind: {
      name: "../assets/logos/tailwind.svg",
    },
    mongo: {
      name: "../assets/logos/mongo.svg",
    },
    sql: {
      name: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
    },
    figma: {
      name: "../assets/logos/figma.svg",
    },
    git: {
      name: "../assets/logos/git.svg",
    },
  };
  
  export default function Skills() {
    return (
      <section style={{background: '#F9FAFB'}} className="w-full text-center p-4 lg:p-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-8 text-2xl lg:text-3xl font-semibold tracking-tighter">Skills</h1>
          <p className="mb-8 text-sm lg:text-base">
            The skills, tools, and technologies I am really good at:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 justify-items-center">
            {Object.entries(skillLogos).map(([key, value]) => (
              <img key={key} className="w-12 h-12 lg:w-20 lg:h-20" src={value.name} alt={key} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  