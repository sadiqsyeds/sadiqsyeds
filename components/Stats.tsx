export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 px-6"
      style={{ background: "#0d1117" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-2" style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
            $ whoami --verbose
          </p>
          <h2 className="text-4xl font-black" style={{ color: "#e6edf3" }}>💬 Ask Me About</h2>
          <div className="section-divider w-24 mt-4 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {[
            { icon: "🏗️", topic: "Building full-stack apps that actually scale" },
            { icon: "🔗", topic: "Node.js + GraphQL + Microservices architecture" },
            { icon: "🗄️", topic: "When to use SQL vs NoSQL (spoiler: it's always \"it depends\")" },
            { icon: "🐛", topic: "Debugging at 2 AM — I have a PhD in this" },
            { icon: "☕", topic: "The optimal coffee-to-code ratio" },
          ].map((item) => (
            <div
              key={item.topic}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: "rgba(22,27,34,0.8)", border: "1px solid #21262d" }}
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <span className="text-sm" style={{ color: "#8b949e" }}>{item.topic}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
