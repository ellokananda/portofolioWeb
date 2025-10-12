"use client";
import { FaLaravel, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMysql } from "react-icons/si";

export default function SkillSection() {
  const skills = [
    { icon: <FaLaravel size={40} color="#FF2D20" />, name: "Laravel" },
    { icon: <FaReact size={40} color="#61DBFB" />, name: "React Native" },
    { icon: <SiNextdotjs size={40} color="#000000" />, name: "Next.js" },
    { icon: <SiMysql size={40} color="#4479A1" />, name: "MySQL" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-[#023e8a] mb-12">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center transition-transform hover:scale-110 duration-300"
          >
            <div className="bg-white shadow-md rounded-full p-6 flex items-center justify-center hover:shadow-2xl transition-shadow">
              {s.icon}
            </div>
            <p className="mt-3 text-gray-700 font-medium">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
