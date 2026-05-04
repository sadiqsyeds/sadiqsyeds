"use client";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Bootstrap", "jQuery", "Tailwind CSS"],
    color: "#00d9ff",
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: ["Node.js", "Express.js", "GraphQL", "REST APIs", "Microservices", "Webhooks"],
    color: "#7c3aed",
  },
  {
    title: "Databases",
    emoji: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "NoSQL"],
    color: "#28c840",
  },
  {
    title: "DevOps & Tools",
    emoji: "🛠️",
    skills: ["Docker", "AWS", "Git", "Jenkins", "Linux", "Bitbucket", "GitLab", "Jira"],
    color: "#e3b341",
  },
  {
    title: "Principles",
    emoji: "📐",
    skills: ["SOLID Principles", "Design Patterns", "DSA", "Agile/Scrum", "Code Reviews"],
    color: "#ec4899",
  },
];

const iconSkills = ["js", "nodejs", "react", "express", "graphql", "mysql", "postgres", "mongodb", "docker", "aws", "git", "html", "css", "linux", "jenkins"];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0d1117 0%, #161b22 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-2" style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
            $ cat tech_stack.json
          </p>
          <h2 className="text-4xl font-black" style={{ color: "#e6edf3" }}>Tech Arsenal 🧠</h2>
          <div className="section-divider w-24 mt-4 mx-auto" />
        </div>

        {/* Skill icons from skillicons.dev */}
        <div className="flex justify-center mb-14">
          <div
            className="p-6 rounded-2xl"
            style={{ background: "rgba(22,27,34,0.9)", border: "1px solid #30363d" }}
          >
            <img
              src={`https://skillicons.dev/icons?i=${iconSkills.join(",")}&theme=dark`}
              alt="Tech Skills"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl p-5 transition-all duration-300"
              style={{
                background: "rgba(22,27,34,0.9)",
                border: `1px solid ${cat.color}33`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}88`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${cat.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}33`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{cat.emoji}</span>
                <h3 className="font-bold text-base" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.color}30`,
                      color: "#c9d1d9",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Also wielding */}
        <div className="mt-8 p-5 rounded-2xl text-center"
          style={{ background: "rgba(22,27,34,0.6)", border: "1px solid #30363d" }}>
          <p className="text-sm font-semibold mb-3" style={{ color: "#8b949e" }}>Also wielding:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Cassandra", "Redis", "Webhooks", "Bootstrap", "jQuery", "Agile/Scrum", "Jira", "SOLID Principles", "Design Patterns", "DSA"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
