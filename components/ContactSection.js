import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center text-[#023e8a] mb-12">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-xl md:text-xl 
                    transition transform hover:scale-105 hover:text-blue-500 cursor-pointer">
        Let’s collaborate or just say hi 👋
      </p>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="mailto:ellanandamp@gmail.com" className="hover:text-blue-500 transition">
          <Mail size={28} />
        </a>
        <a href="https://github.com/ellokananda" className="hover:text-blue-500 transition">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/ellokananda" className="hover:text-blue-500 transition">
          <Linkedin size={28} />
        </a>
      </div>
    </section>
  );
}
