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
      <section style={{background: '#F9FAFB'}} className="text-center p-20 w-full">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>
        <p className="mb-4">
          The skills, tools, and technologies I am really good at:
        </p>
        <div className="flex flex-row space-x-4 gap-8 flex-wrap">
          {Object.entries(skillLogos).map(([key, value]) => (
            <img key={key} className="w-20 h-20" src={value.name} alt={key} />
          ))}
        </div>
      </section>
    );
  }
  
  