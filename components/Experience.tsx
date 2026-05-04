"use client";
import { useState } from "react";

const jobs = [
  {
    role: "Sr. Software Developer",
    company: "Center of AI & Robotics, Ministry of Defence",
    period: "Sep 2022 – Present",
    emoji: "🏛️",
    color: "#00d9ff",
    highlights: [
      "🎯 Led design & implementation of data models → 30% boost in data analysis efficiency",
      "🚀 Led a telecom analytics project → 40% reduction in data processing time",
      "🔍 Participated in 50+ code reviews (and politely told people their variable names were crimes against humanity)",
      "📈 Implemented code quality best practices → 20% increase in application performance",
      "⭐ Promoted to Senior Software Developer for outstanding contributions",
      "🏆 Consistently delivered on complex telecom analytics milestones",
    ],
    note: "Yes, my code is literally used by the Ministry of Defence. No pressure. 😅",
  },
  {
    role: "Web Developer",
    company: "Sigmato Solutions",
    period: "Oct 2020 – Aug 2022",
    emoji: "🌐",
    color: "#7c3aed",
    highlights: [
      "⚡ Planned and executed system improvements → 25% increase in operational efficiency",
      "📊 Conducted in-depth data analysis → periodic insights that drove data-driven decisions",
      "💰 Collaborated with senior leadership → 10% increase in revenue",
      "🔄 Evaluated and implemented state-of-the-art technologies to maintain competitive edge",
      "📋 Designed informative dashboards for unified, user-friendly data visualization",
    ],
    note: null,
  },
  {
    role: "Backend Developer",
    company: "Softprolang",
    period: "Aug 2019 – Oct 2020",
    emoji: "⚙️",
    color: "#28c840",
    highlights: [
      "🗄️ Designed and optimized database schemas → 15% performance improvement",
      "🤝 Collaborated with cross-functional teams (engineers, designers, PMs) to deliver on time",
      "🎨 Developed customer-facing frontend for video processing websites",
      "📚 Continuously learned & introduced innovative ideas → 15% improvement in dev processes",
    ],
    note: null,
  },
];

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #161b22 0%, #0d1117 100%)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold mb-2" style={{ color: "#00d9ff", fontFamily: "var(--font-fira-code)" }}>
            $ git log --oneline career
          </p>
          <h2 className="text-4xl font-black" style={{ color: "#e6edf3" }}>Career Story 💼</h2>
          <p className="text-sm mt-2" style={{ color: "#8b949e" }}>
            aka &quot;How I Got Here Without Breaking Too Much Prod&quot;
          </p>
          <div className="section-divider w-24 mt-4 mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #00d9ff44, #7c3aed44, #28c84044)" }}
          />

          <div className="flex flex-col gap-6">
            {jobs.map((job, idx) => (
              <div key={job.company} className="relative pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: job.color,
                    boxShadow: `0 0 12px ${job.color}66`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white opacity-80" />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{
                    background: "rgba(22,27,34,0.9)",
                    border: `1px solid ${open === idx ? job.color + "66" : "#30363d"}`,
                    boxShadow: open === idx ? `0 0 20px ${job.color}18` : "none",
                  }}
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  {/* Header */}
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{job.emoji}</span>
                        <h3 className="font-bold text-base" style={{ color: "#e6edf3" }}>
                          {job.role}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: job.color }}>{job.company}</p>
                      <p className="text-xs mt-1" style={{ color: "#8b949e" }}>{job.period}</p>
                    </div>
                    <div
                      className="transition-transform duration-300 mt-1 flex-shrink-0"
                      style={{
                        transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                        color: "#8b949e",
                      }}
                    >
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded content */}
                  {open === idx && (
                    <div className="px-5 pb-5">
                      <div className="pt-3" style={{ borderTop: "1px solid #21262d" }}>
                        {job.note && (
                          <p className="text-xs italic mb-4 px-3 py-2 rounded-lg"
                            style={{ background: "rgba(0,217,255,0.05)", color: "#8b949e", border: "1px solid rgba(0,217,255,0.1)" }}>
                            &quot;{job.note}&quot;
                          </p>
                        )}
                        <ul className="flex flex-col gap-2">
                          {job.highlights.map((h) => (
                            <li key={h} className="text-sm leading-relaxed" style={{ color: "#8b949e" }}>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
