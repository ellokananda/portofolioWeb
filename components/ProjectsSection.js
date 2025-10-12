import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "PharmaShop",
      description: "A mobile app for managing pharmacy stock. Simple CRUD functionality.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "My personal website built with Next.js and Tailwind CSS.",
      link: "#"
    },
    {
      title: "Hospital Information System",
      description: "A simple information system wesbsite for hospital using Laravel",
      link: "#"
    },
     {
      title: "EduPath",
      description: "A decision support system that recommends the most suitable upper secondary school level and study stream for students using TOPSIS methods.",
      link: "#"
    },
    {
      title: "Employee Management System",
      description: "A system designed to manage employee data, monitor performance, and support administrative processes within an organization efficiently.",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-[#023e8a] mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
