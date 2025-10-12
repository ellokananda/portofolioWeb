import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Aplikasi Pemilihan Jurusan (AHP-TOPSIS)",
    description: "Sistem rekomendasi berbasis metode AHP-TOPSIS menggunakan Laravel.",
    link: "https://github.com/ellokananda/ahp-topsis",
  },
  {
    title: "React Native School App",
    description: "Aplikasi mobile untuk manajemen siswa dan nilai.",
    link: "https://github.com/ellokananda/school-app",
  },
];

export default function Projects() {
  return (
    <main>
      <Navbar />
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-blue-600">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.description}</p>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
