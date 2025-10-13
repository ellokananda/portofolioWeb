import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "PharmaShop",
      description: "A mobile app for managing pharmacy stock. Simple CRUD functionality.",
      link: "https://github.com/ellokananda/Pharmashop",
      linkk: "https://drive.google.com/file/d/1K2h9kGz3WuKV1wMZRG2ranhsFG-b0iMq/view?usp=sharing"
    },
    {
      title: "Portfolio Website",
      description: "My personal website built with Next.js and Tailwind CSS.",
      link: "https://github.com/ellokananda/portofolioWeb",
      linkk: "https://ellok.vercel.app"
    },
    {
      title: "Hospital Information System",
      description: "A simple information system wesbsite for hospital using Laravel",
      link: "https://github.com/ellokananda/TugasBesarSI-RumahSakitCitraMedika",
      linkk: "https://drive.google.com/file/d/1H_wnwFQnXueaEtsVtATK4ctS8OM2QraG/view?usp=drive_link"
    },
     {
      title: "EduPath",
      description: "A decision support system that recommends the most suitable upper secondary school level and study stream for students using TOPSIS methods.",
      link: "https://github.com/ellokananda/spktopsis",
      linkk: "https://drive.google.com/file/d/122Hw49ZXbikYyhVnJgu21llxEMO3ecwv/view?usp=drive_link"
    },
    {
      title: "Employee Management System",
      description: "A system designed to manage employee data, monitor performance, and support administrative processes within an organization efficiently.",
      link: "https://github.com/ellokananda/pkn_singosari",
      linkk: "https://drive.google.com/file/d/18cRjJ1zsQ2grjckxHpGMXZZS7tCPjHA6/view?usp=drive_link"
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
