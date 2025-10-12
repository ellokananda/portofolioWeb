import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Ellok 👋</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I’m a backend & fullstack developer passionate about building scalable web apps using Laravel, React, and Next.js.
        </p>
      </section>
      <Footer />
    </main>
  );
}
