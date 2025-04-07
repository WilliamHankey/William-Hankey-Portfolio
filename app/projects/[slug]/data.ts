export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  icons: string[];
  link?: string;
  shortOverview: string;
  techStack: {
    name: string;
    icon: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
  keyFeatures: {
    icon: string;
    text: string;
  }[];
  showcase: {
    image: string;
    title: string;
    description: string;
  }[];
}

export function getProjects(): Project[] {
  return [
    {
      slug: "synergyflow",
      title: "Synergy Flow",
      description: "A comprehensive project management platform built for modern teams.",
      shortOverview: "An all-in-one project management solution that helps teams collaborate, communicate, and deliver projects efficiently.",
      image: "/assets/projects/synergyflow/cover.svg",
      icons: ["devicon-react-original", "devicon-nodejs-plain"],
      techStack: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "Socket.io", icon: "devicon-socketio-original" }
      ],
      challenges: [
        {
          title: "Real-time Collaboration",
          description: "Implemented WebSocket technology to enable real-time updates and collaboration features."
        },
        {
          title: "Data Synchronization",
          description: "Developed robust synchronization mechanisms to handle concurrent user actions."
        },
        {
          title: "Performance Optimization",
          description: "Optimized data loading and state management to handle large projects efficiently."
        }
      ],
      keyFeatures: [
        { icon: "devicon-react-original", text: "Real-time Task Management" },
        { icon: "devicon-nodejs-plain", text: "Team Collaboration Tools" },
        { icon: "devicon-mongodb-plain", text: "Project Analytics" },
        { icon: "devicon-socketio-original", text: "Instant Messaging" }
      ],
      showcase: [
        {
          image: "/assets/projects/synergyflow/tasks.svg",
          title: "Task Management",
          description: "Organize, assign, and track tasks efficiently with an intuitive interface."
        },
        {
          image: "/assets/projects/synergyflow/chat.svg",
          title: "Team Communication",
          description: "Built-in real-time chat to enhance collaboration and productivity."
        },
        {
          image: "/assets/projects/synergyflow/projects.svg",
          title: "Project Dashboard",
          description: "Monitor project progress, deadlines, and analytics all in one place."
        }
      ]
    },
    {
      slug: "reguhub",
      title: "Reguhub",
      description: "Reguhub is a comprehensive safety management platform that streamlines workplace safety protocols, documentation, and compliance for construction and industrial organizations.",
      shortOverview: "Reguhub is a sophisticated web application designed to revolutionize workplace safety management. It provides a centralized platform for organizations to manage safety protocols, track compliance, and maintain comprehensive documentation of safety procedures. The platform facilitates real-time collaboration between team members, enables efficient project management, and ensures regulatory compliance in high-risk industries like construction and manufacturing.",
      image: "/assets/projects/reguhub.png",
      icons: ["devicon-nextjs-original", "devicon-tailwindcss-plain"],
      link: "https://reguhub.vercel.app/",
      techStack: [
        { name: "React.js with TypeScript", icon: "devicon-nextjs-original" },
        { name: "Node.js with Express", icon: "devicon-typescript-plain" },
        { name: "Supabase for database and authentication", icon: "devicon-postgresql-plain" }
      ],
      challenges: [
        {
          title: "Complex Safety Documentation",
          description: "Solution: Implemented a structured document management system with version control and easy accessibility, Created intuitive interfaces for uploading, organizing, and retrieving safety documents"
        },
        {
          title: "Team Collaboration",
          description: "Solution: Developed a real-time collaboration system with role-based access control, Integrated team communication features and activity tracking"
        },
        {
          title: "Compliance Tracking",
          description: "Solution: Built automated compliance monitoring systems, Implemented notification systems for expiring certifications and required updates"
        }
      ],
      keyFeatures: [
        { icon: "devicon-nextjs-original", text: "Project Management Dashboard" },
        { icon: "devicon-typescript-plain", text: "Safety Documentation System" },
        { icon: "devicon-postgresql-plain", text: "Team Member Management" },
        { icon: "devicon-tailwindcss-plain", text: "Real-time Activity Tracking" },
        { icon: "devicon-tailwindcss-plain", text: "Risk Assessment Framework" }
      ],
      showcase: [
        {
          image: "/assets/projects/synergyflow/tasks.svg",
          title: "Dashboard Page",
          description: "Central hub for project overview, Displays active projects, team members, and recent activities, Quick access to key safety metrics and notifications"
        },
        {
          image: "/assets/projects/synergyflow/chat.svg",
          title: "Project Details Page",
          description: "Comprehensive view of individual projects, Safety documentation and compliance status, Team member assignments and responsibilities"
        },
        {
          image: "/assets/projects/synergyflow/projects.svg",
          title: "Safety Index Page",
          description: "Real-time safety metrics and KPIs, Risk assessment tracking, Compliance status indicators"
        },
        {
          image: "/assets/projects/synergyflow/chat.svg",
          title: "Workers Management Page",
          description: "Team member directory,Role management and permissions, Training and certification tracking"
        },
        {
          image: "/assets/projects/synergyflow/chat.svg",
          title: "Organization Page",
          description: "Company-wide safety policies and procedures, Department-specific safety protocols, Resource allocation and management"
        },
        {
          image: "/assets/projects/synergyflow/chat.svg",
          title: "Project Flow Page",
          description: "Visual workflow management, Task dependencies and timelines,Progress tracking and milestone monitoring"
        }
      ]
    },
    {
      slug: "sakai-app",
      title: "Sakai App",
      description: "A modern e-commerce platform built with Angular, featuring a responsive design and seamless shopping experience. The application includes advanced cart management, user profiles, wishlists, and a streamlined checkout process, all integrated with PrimeNG components for a polished UI/UX.",
      shortOverview: "This e-commerce application is a full-featured online shopping platform that combines modern design principles with robust functionality. Built with Angular and PrimeNG, it offers users a seamless shopping experience from browsing products to checkout. The application implements responsive design principles, ensuring a consistent experience across all devices, and features real-time cart updates, user profile management, and wishlist functionality.",
      image: "/assets/projects/sakai.png",
      icons: ["devicon-nextjs-original", "devicon-tailwindcss-plain"],
      link: "https://sakai-huy-admin.vercel.app/",
      techStack: [
        { name: "Angular 15+", icon: "devicon-angularjs-plain" },
        { name: "TypeScript", icon: "devicon-angularjs-plain" },
        { name: "PrimeNG", icon: "devicon-typescript-plain" },
        { name: "PrimeFlex", icon: "devicon-typescript-plain" },
        { name: "SCSS", icon: "devicon-sass-original" }
      ],
      challenges: [
        {
          title: "Complex State Management",
          description: "Implemented robust state handling for cart and user data."
        },
        {
          title: "Performance",
          description: "Optimized loading times and component rendering for large product catalogs."
        }
      ],
      keyFeatures: [
        { icon: "devicon-angularjs-plain", text: "Advanced Cart Management" },
        { icon: "devicon-typescript-plain", text: "User Profiles" },
        { icon: "devicon-sass-original", text: "Responsive Design" }
      ],
      showcase: [
        {
          image: "/assets/projects/synergyflow/tasks.svg",
          title: "Store Homepage",
          description: "The main landing page showcasing featured products, categories, and promotional banners. Features a clean, modern design with an intuitive navigation system."
        },
        {
          image: "/assets/projects/synergyflow/tasks.svg",
          title: "Product Detail Page",
          description: "Detailed product view with image gallery, pricing information, inventory status, and add to cart functionality. Includes tabs for product description, specifications, and reviews."
        },
        {
          image: "/assets/projects/synergyflow/tasks.svg",
          title: "Shopping Cart",
          description: "Interactive cart page displaying selected items, quantities, and total calculations. Features quantity adjustments, remove items, and proceed to checkout options."
        },
        {
          image: "/assets/projects/synergyflow/tasks.svg",
          title: "Profile Dashboard",
          description: "User profile management interface with sidebar navigation, displaying personal details, order history, and account settings in a clean, organized layout."
        },
        {
          image: "/assets/projects/synergyflow/tasks.svg",
          title: "Wishlist Page",
          description: "Organized grid layout of saved items with quick actions to add to cart or remove from wishlist. Includes product thumbnails and key information."
        }
      ]
    },
  ];
}
  