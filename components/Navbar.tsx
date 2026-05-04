"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Stats", href: "#stats" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13, 17, 23, 0.95)"
          : "transparent",
        borderBottom: scrolled ? "1px solid #21262d" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-lg" style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
          &lt;sadiq /&gt;
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:sadiq446@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #00d9ff22, #7c3aed22)",
            border: "1px solid rgba(0, 217, 255, 0.4)",
            color: "#00d9ff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #00d9ff33, #7c3aed33)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(0,217,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #00d9ff22, #7c3aed22)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Hire Me 🚀
        </a>
      </div>
    </nav>
  );
}
