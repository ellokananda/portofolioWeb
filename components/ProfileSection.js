"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="relative flex items-center justify-center min-h-[50vh] overflow-hidden text-white"
    >
      
      {/* 🔵 Gelembung abstrak dari versi kamu */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0077b6] opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#023e8a] opacity-15 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#00b4d8] opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#90e0ef] opacity-25 rounded-full blur-2xl -z-10" />

      {/* Konten utama */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-16 p-6 md:p-12">
        {/* Foto kiri */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl border-2 border-[#00b4d8] p-4 shadow-lg bg-blue/30 backdrop-blur-md">
            <Image
              src="/profile.jpg"
              alt="Ellok Ananda"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />

            {/* Card Projects */}
            {/* <div className="absolute -bottom-8 left-4 bg-[#023e8a]/90 px-5 py-3 rounded-lg shadow-lg">
              <p className="text-sm opacity-80">Projects</p>
              <p className="text-xl font-semibold text-[#90e0ef]">10+ Done</p>
            </div> */}

            {/* Card Experience */}
            <div className="absolute top-6 -right-8 bg-[#0077b6]/90 px-5 py-3 rounded-lg shadow-lg">
              <p className="text-sm opacity-80">Experience</p>
              <p className="text-xl font-semibold text-[#90e0ef]">1 Year</p>
            </div>
          </div>
        </motion.div>

        {/* Teks kanan */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6 text-gray-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 🔹 Judul dengan garis animasi */}
          <div className="inline-block relative">
            <h2 className="text-4xl font-bold text-[#023e8a]">
              Hi <span className="text-[#00b4d8]">Peeps!</span>
            </h2>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#90e0ef] animate-glow rounded-full"></span>
          </div>

          <p className="text-lg leading-relaxed text-gray-900 max-w-2xl">
            I am a Informatics Engineering graduate from National Institute of Technology Malang with a GPA of 3.80.
My expertise lies in backend and fullstack web development, with a strong foundation in Laravel, React Native, and Next.js.
          </p>

          <p className="text-lg leading-relaxed text-gray-900 max-w-2xl">
            During my internship at the Singosari District Office, I contributed as a programmer by developing and enhancing web-based systems to support administrative operations.
I am passionate about crafting efficient digital solutions through clean, maintainable code and continuously expanding my technical skill set to deliver impactful results.
          </p>

          {/* Skill bubbles
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "Backend Development",
              "RESTful API Integration",
              "Database Design",
              "Laravel & MySQL",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-[#023e8a]/80 px-4 py-2 rounded-full text-sm font-medium text-[#90e0ef]"
              >
                {skill}
              </span>
            ))}
          </div> */}

          <div className="flex flex-wrap items-center gap-6 mt-6">
  {/* Tombol LinkedIn */}
  <a
    href="https://linkedin.com/in/ellokananda"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition transform hover:scale-105 duration-300"
  >
    Let's Connect 
  </a>

  {/* Tombol Download CV */}
  <a
    href="/cv.pdf"
    download
    className="inline-block bg-gradient-to-r from-[#023e8a] to-[#0077b6] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition transform hover:scale-105 duration-300"
  >
    Download CV 
  </a>
</div>

        </motion.div>
      </div>
    </section>
  );
}
