"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-bold text-slate-900">
            Halo, Saya <span className="text-[var(--ocean-500)]">Ellok Ananda</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-4 text-gray-600 max-w-xl">
            Backend & Fullstack Developer — fokus membangun aplikasi web yang rapi, scalable, dan mudah dipelihara. Laravel · Next.js · REST API
          </motion.p>

          <div className="mt-6 flex gap-4">
            <a href="/projects" className="inline-block bg-[var(--ocean-500)] text-white px-5 py-2 rounded-full shadow hover:opacity-95 transition">Lihat Proyek</a>
            <a href="/about" className="inline-block border border-slate-200 px-5 py-2 rounded-full text-slate-700 hover:bg-slate-50 transition">Tentang Saya</a>
          </div>
        </div>

        <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
          <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
