"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #0a0d12 100%)",
        borderTop: "1px solid #21262d",
      }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,217,255,0.04) 0%, transparent 70%)",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* CTA */}
        <div
          className="rounded-3xl p-10 text-center mb-16"
          style={{
            background: "rgba(22,27,34,0.8)",
            border: "1px solid rgba(0,217,255,0.15)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#e6edf3" }}>
            Let&apos;s Build Something <span className="gradient-text">Together</span> 🤝
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "#8b949e" }}>
            I&apos;m always open to interesting projects, collaborations, and conversations.
            Whether it&apos;s a quick chat or a full-scale build — hit me up!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sadiq446@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00d9ff, #7c3aed)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,217,255,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,217,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,217,255,0.3)";
              }}
            >
              📧 sadiq446@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sadiqsyeds/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              style={{
                background: "rgba(0,119,181,0.15)",
                border: "1px solid rgba(0,119,181,0.4)",
                color: "#0077B5",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,119,181,0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,119,181,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/sadiqsyeds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#c9d1d9",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Info row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "#8b949e" }}>
          <div className="flex items-center gap-2">
            <span className="font-bold" style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
              &lt;sadiq /&gt;
            </span>
            <span>· Bengaluru, India 🇮🇳</span>
          </div>
          <p className="text-center text-xs" style={{ color: "#484f58" }}>
            Made with ❤️, ☕ and a suspicious amount of Stack Overflow · © {year}
          </p>
          <p className="text-xs" style={{ color: "#484f58" }}>
            &quot;Code is poetry. Mine sometimes rhymes... 🌙&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
