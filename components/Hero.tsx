"use client";
import { useEffect, useState } from "react";

const roles = [
  "Senior Software Developer 🚀",
  "Full-Stack Engineer | Node.js + React",
  "AI-Era Developer 🤖",
  "Bug Whisperer 🐛 & Coffee Addict ☕",
  '4+ Years of "It works on my machine" 😅',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
      } else {
        if (displayed.length > 0) {
          timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        } else {
          timeout = setTimeout(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setTyping(true);
          }, 100);
        }
      }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top center, #1a2332 0%, #0d1117 60%), radial-gradient(ellipse at 80% 80%, #1a1030 0%, transparent 50%)",
      }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.07) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          bottom: "15%",
          right: "10%",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
          style={{ background: "rgba(0,217,255,0.1)", border: "1px solid rgba(0,217,255,0.2)", color: "#00d9ff" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "#00d9ff" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#00d9ff" }} />
          </span>
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
          Hey, I&apos;m{" "}
          <span className="gradient-text">Sadiq</span>
          {" "}👋
        </h1>

        {/* Typing animation */}
        <div className="h-10 mb-6 flex items-center justify-center">
          <p className="text-xl md:text-2xl font-semibold"
            style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
            {displayed}
            <span className="inline-block w-0.5 h-6 ml-1 align-middle animate-pulse"
              style={{ background: "#00d9ff" }} />
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#8b949e" }}>
          Building stuff that matters at{" "}
          <span style={{ color: "#e3b341", fontWeight: 600 }}>
            Center of AI &amp; Robotics, Ministry of Defence
          </span>
          <br />
          <span className="text-base">Bengaluru, India 🇮🇳</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00d9ff, #7c3aed)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(0,217,255,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,217,255,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,217,255,0.3)"; }}
          >
            View My Work 🚀
          </a>
          <a
            href="https://www.linkedin.com/in/sadiqsyeds/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#c9d1d9",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(0,217,255,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            LinkedIn 🔗
          </a>
          <a
            href="mailto:sadiq446@gmail.com"
            className="px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#c9d1d9",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(236,72,153,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Email Me 📧
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {[
            { value: "4+", label: "Years Exp." },
            { value: "50+", label: "Code Reviews" },
            { value: "40%", label: "Faster Processing" },
            { value: "MoD", label: "Current Employer" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs mt-1" style={{ color: "#8b949e" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ color: "#30363d" }}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
