"use client";

const projects = [
  {
    name: "instascrape",
    emoji: "📸",
    desc: "Instagram data scraper — because manually scrolling is so 2010",
    stack: ["Node.js"],
    github: "https://github.com/sadiqsyeds/instascrape",
    live: null,
    color: "#e1306c",
  },
  {
    name: "LinkShrink",
    emoji: "🔗",
    desc: "URL shortener — making long URLs cry 😢",
    stack: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/sadiqsyeds/link-shrink",
    live: "https://link-shrink-costerx.vercel.app/",
    color: "#00d9ff",
  },
  {
    name: "Convertiqo",
    emoji: "🔄",
    desc: "File converter — images, videos, PDFs & docs, right in your browser",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sadiqsyeds/convertiqo",
    live: "https://convertiqo.vercel.app/",
    color: "#7c3aed",
  },
  {
    name: "open-layers",
    emoji: "🗺️",
    desc: "OpenLayers map integration — I put the world on a screen",
    stack: ["JavaScript"],
    github: "https://github.com/sadiqsyeds/open-layers",
    live: null,
    color: "#28c840",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0d1117 0%, #0d1117 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-2" style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
            $ ls -la ./projects
          </p>
          <h2 className="text-4xl font-black" style={{ color: "#e6edf3" }}>What I&apos;ve Shipped</h2>
          <div className="section-divider w-24 mt-4 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="glow-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{ background: "rgba(22,27,34,0.9)" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-2xl mr-2">{p.emoji}</span>
                  <span className="text-lg font-bold" style={{ color: "#e6edf3" }}>{p.name}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.05)", color: "#8b949e" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#e6edf3"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#8b949e"; }}
                    title="GitHub"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.05)", color: "#8b949e" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = p.color; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#8b949e"; }}
                      title="Live Demo"
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "#8b949e" }}>{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}44`,
                      color: p.color,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/sadiqsyeds?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#c9d1d9",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,217,255,0.4)";
              e.currentTarget.style.color = "#00d9ff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#c9d1d9";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Browse All Repositories →
          </a>
        </div>
      </div>
    </section>
  );
}
