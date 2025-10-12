import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Let’s collaborate or just say hi 👋
        </p>
        <div className="space-x-4">
          <a href="mailto:ellok@example.com" className="text-blue-500 hover:underline">
            Email
          </a>
          <a href="https://github.com/ellokananda" className="text-blue-500 hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ellokananda" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
