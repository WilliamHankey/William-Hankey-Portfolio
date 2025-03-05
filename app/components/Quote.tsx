const skillLogos: Record<string, { name: string }> = {
    html: {
      name: "../assests/logos/html.svg",
    },
    css: {
      name: "../assests/logos/css.svg",
    },
    javascript: {
      name: "../assests/logos/javascript.svg",
    },
    typescript: {
      name: "../assests/logos/typescript.svg",
    },
    react: {
      name: "../assests/logos/react.svg",
    },
    angular: {
      name: "../assests/logos/angular.svg",
    },
    vue: {
      name: "../assests/logos/vue.svg",
    },
    tailwind: {
      name: "../assests/logos/tailwind.svg",
    },
    mongo: {
      name: "../assests/logos/mongo.svg",
    },
    sql: {
      name: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
    },
    figma: {
      name: "../assests/logos/figma.svg",
    },
    git: {
      name: "../assests/logos/git.svg",
    },
  };
  
  export default function Quote() {
    return (
      <section className="text-center p-20 bg-primary">
        <p className="mb-4 p-24 text-white text-justify">
        As a designer, I take a very pragmatic and data-informed approach to problem solving. I like to understand key
        business goals, metrics that the team cares about and ultimately thinking how they shape the roadmap and the
        reasons/purposes behind my initiatives. I know how to be scrappy and flexible but I also know when to button up and
        really think through the design solutions. My strengths lies on working across multiple projects, executing on high
        quality designs quickly and working collaboratively with cross-functional partners. I love growing the product,
        impacting the business and have passion for craft. 
        </p>
      </section>
    );
  }
  
  