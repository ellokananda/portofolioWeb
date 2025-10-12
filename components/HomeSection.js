"use client";


import { useEffect, useRef } from "react";

export default function HomeSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random(),
        color:
          Math.random() > 0.5
            ? "rgba(0, 180, 216, 0.8)" // biru cerah
            : "rgba(0, 119, 182, 0.8)", // biru tua sedikit
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8; // efek glow
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <section className="relative h-screen flex items-center justify-center text-center overflow-hidden ">
        <section id="home"className="relative h-screen flex items-center justify-center text-center overflow-hidden scroll-smooth">
      {/* Canvas Sparkles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></canvas>

      {/* Konten utama */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
  Hi, I&apos;m <span className="text-[#00b4d8]">Ellok Ananda</span> 👋
</h1>

        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
          A junior web developer passionate about crafting
          modern, efficient web applications.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition transform hover:scale-105 duration-300"
          >
            My Projects
          </a>
          <a
            href="https://linkedin.com/in/ellokananda"

            className="bg-gradient-to-r from-[#00b4d8] to-[#90e0ef] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition transform hover:scale-105 duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
