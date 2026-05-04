const codeHTML = `<span style="color:#ff7b72">const </span><span style="color:#79c0ff">sadiq</span> = {
  <span style="color:#8b949e">// 🪪 Identity</span>
  <span style="color:#7ee787">name</span>: <span style="color:#a5d6ff">"Syed Sadiq"</span>,
  <span style="color:#7ee787">title</span>: <span style="color:#a5d6ff">"Sr. Software Developer"</span>,
  <span style="color:#7ee787">location</span>: <span style="color:#a5d6ff">"Bengaluru, India 🇮🇳"</span>,
  <span style="color:#7ee787">experience</span>: <span style="color:#a5d6ff">"4+ years"</span>,

  <span style="color:#8b949e">// 💼 Work</span>
  <span style="color:#7ee787">currentlyAt</span>: <span style="color:#a5d6ff">"MoD — AI &amp; Robotics"</span>,

  <span style="color:#8b949e">// 🛠️ Stack</span>
  <span style="color:#7ee787">code</span>: [<span style="color:#a5d6ff">"JavaScript"</span>, <span style="color:#a5d6ff">"Node.js"</span>, <span style="color:#a5d6ff">"React"</span>, <span style="color:#a5d6ff">"GraphQL"</span>],

  <span style="color:#8b949e">// ☕ Fun</span>
  <span style="color:#7ee787">superpower</span>: <span style="color:#a5d6ff">"Caffeine → Production Code"</span>,
  <span style="color:#7ee787">status</span>: <span style="color:#a5d6ff">"Building stuff that matters 🚀"</span>
}<span style="color:#ff7b72">;</span>`;

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#0d1117" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-2" style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
            $ whoami
          </p>
          <h2 className="text-4xl font-black" style={{ color: "#e6edf3" }}>About Me</h2>
          <div className="section-divider w-24 mt-4 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Code block */}
          <div className="code-block">
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid #30363d" }}>
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              <span className="ml-3 text-xs" style={{ color: "#8b949e", fontFamily: "var(--font-fira-code)" }}>
                sadiq.js
              </span>
            </div>
            <pre
              className="p-6 text-sm leading-7 overflow-x-auto"
              style={{ fontFamily: "var(--font-fira-code)", color: "#c9d1d9" }}
              dangerouslySetInnerHTML={{ __html: codeHTML }}
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed" style={{ color: "#8b949e" }}>
              I&apos;m a Senior Software Developer with{" "}
              <span style={{ color: "#e6edf3", fontWeight: 600 }}>4+ years</span> of building
              full-stack applications that scale. Currently shipping production code at the{" "}
              <span style={{ color: "#e3b341", fontWeight: 600 }}>
                Center of AI &amp; Robotics, Ministry of Defence
              </span>
              .
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#8b949e" }}>
              I genuinely love what I do. I thrive at the intersection of backend architecture,
              clean APIs, and real-world impact. Whether it&apos;s microservices, telecom analytics,
              or a late-night debugging session — I&apos;m in.
            </p>

            {/* Quote */}
            <blockquote
              className="border-l-4 pl-4 py-2 italic text-base"
              style={{ borderColor: "#00d9ff", color: "#8b949e" }}
            >
              &quot;Great software is built by people who care — if you&apos;re one of those people, let&apos;s build something together! 🤝&quot;
            </blockquote>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { icon: "🎯", label: "30% Data Analysis Boost" },
                { icon: "🚀", label: "40% Faster Processing" },
                { icon: "⭐", label: "Promoted to Senior Dev" },
                { icon: "🔍", label: "50+ Code Reviews" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(22,27,34,0.8)", border: "1px solid #21262d" }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: "#c9d1d9" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently building */}
            <div
              className="p-4 rounded-xl"
              style={{ background: "rgba(0,217,255,0.05)", border: "1px solid rgba(0,217,255,0.15)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#00d9ff" }}>
                🏛️ Currently Building
              </p>
              <p className="text-sm" style={{ color: "#8b949e" }}>
                <span style={{ color: "#e6edf3", fontWeight: 600 }}>Ancestors Directory</span> — A structured
                family history app. Stack: Node.js + React + MongoDB.{" "}
                <span>Status: ████████░░ 60%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
