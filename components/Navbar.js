"use client";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const items = [
    { name: "Home", href: "home" },
    { name: "Profile", href: "profile" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      items.forEach((item) => {
        const section = document.getElementById(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold text-[var(--ocean-500)]">
          Ellok<span className="text-sky-400">Ananda</span>
        </div>

        <ul className="flex gap-6">
          {items.map((it) => (
            <li key={it.href}>
              <ScrollLink
                to={it.href}
                smooth={true}
                duration={500}
                className={`text-sm font-medium cursor-pointer hover:text-[var(--ocean-500)] ${
                  active === it.href ? "text-[var(--ocean-500)]" : "text-gray-700"
                }`}
              >
                {it.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
