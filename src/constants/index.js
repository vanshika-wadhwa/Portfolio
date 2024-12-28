import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, MongoDB and Flask. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of learning, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "DSA Visualization",
    image: project4,
    description:
      "DSA Visual Representation is an interactive platform designed to help users understand data structure and algorithm concepts through visualizations. The platform provides step-by-step demonstrations of various algorithms, including sorting and searching, while analyzing their time and space complexities. It also includes a coding playground for hands-on practice and educational content like tutorials and code snippets.",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "Flask", "MySQL"],
  },
  {
    title: "E-Waste Management",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React", "MySQL", "MongoDB", "TensorFlow"],
  },
  {
    title: "CV Builder",
    image: project2,
    description:
      "Created a tool for users to generate CVs by submitting data. Allows users to download their CVs in multiple formats and provides real-time validation of input fields.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "MySQL"],
  },
  {
    title: "Online Voting System",
    image: project2,
    description:
      "Built an Online Voting Platform allowing students to vote securely via student ID and face recognition, displaying real-time results. Enhances voter participation and ensures secure, transparent elections by streamlining the voting proces.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "MySQL"],
  },
  {
    title: "Netflix Clone",
    image: project2,
    description:
      "Netflix's UI/UX clone",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Diwali Sales Analysis",
    image: project1,
    description:
      "Analyzed sales data of sweets during Diwali to identify trends and visualize insights. Helps local businesses make data-driven decisions by understanding peak sales times and customer preference.",
    technologies: ["Numpy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Kaggel"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  
];

export const CONTACT = {
  address: "Taraori, karnal, Haryana, 132116",
  phoneNo: "+91 7678217204",
  email: "vanshikawadhwa20@gmail.com",
};
