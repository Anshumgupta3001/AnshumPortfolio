// FILE: src/components/Experience.jsx
import { motion } from "framer-motion";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function SectionTitle({ label, children }) {
  return (
    <motion.div className="mb-10" variants={fadeInUp}>
      <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-[#00D4FF] uppercase mb-2">[ {label} ]</p>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-[#F0F0F0] tracking-tight">{children}</h2>
      <div className="mt-2 h-0.5 w-12 rounded-full" style={{ background: "linear-gradient(90deg,#00D4FF,#FF6B35)" }} />
    </motion.div>
  );
}

const SCHEMES = {
  cyan:   { dot: "bg-cyan-500 dark:bg-[#00D4FF]",    tag: "bg-cyan-50 dark:bg-[#00D4FF]/10 text-cyan-700 dark:text-[#00D4FF] border border-cyan-100 dark:border-[#00D4FF]/25" },
  orange: { dot: "bg-orange-500 dark:bg-[#FF6B35]",  tag: "bg-orange-50 dark:bg-[#FF6B35]/10 text-orange-700 dark:text-[#FF6B35] border border-orange-100 dark:border-[#FF6B35]/25" },
  blue:   { dot: "bg-blue-500 dark:bg-[#0066FF]",    tag: "bg-blue-50 dark:bg-[#0066FF]/10 text-blue-700 dark:text-[#0066FF] border border-blue-100 dark:border-[#0066FF]/25" },
  emerald:{ dot: "bg-emerald-500 dark:bg-emerald-400",tag: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/25" },
};

const ROLES = [
  {
    company: "GTMVantage",
    tagline:  "Hyper-Personalized Outbound on Autopilot",
    role:     "Full Stack Developer (Hybrid)",
    period:   "Apr 2025 – Present",
    accent:   "text-cyan-600 dark:text-[#00D4FF]",
    dotColor: "bg-cyan-500 dark:bg-[#00D4FF]",
    glowColor:"rgba(0,212,255,0.5)",
    bullets: [
      { type: "Architecture", colorKey: "cyan",    text: "Architected end-to-end full-stack systems (React/Next.js frontends, Node.js backends, databases) for AI-driven email and LinkedIn outbound automation, scaling workflows to process 10,000+ personalized messages daily." },
      { type: "AI / LLM",    colorKey: "orange",  text: "Designed LLM-powered personalization pipelines for message generation, lead targeting, and outreach sequencing using OpenAI models and Pinecone vector search — improving engagement rates by 35%." },
      { type: "Product",     colorKey: "blue",    text: "Owned campaign management, prospect workflows, and real-time email tracking with analytics dashboards, collaborating directly with product and business stakeholders to ship features on tight deadlines." },
      { type: "Payments",    colorKey: "emerald", text: "Integrated Razorpay subscription billing — webhooks, usage tracking, and plan-based access control — for a multi-tenant SaaS platform serving 50+ active clients." },
    ],
  },
  {
    company: "DNS Group",
    tagline:  "Enterprise Operations",
    role:     "Full Stack Developer (Onsite)",
    period:   "Mar 2024 – Apr 2025",
    accent:   "text-orange-600 dark:text-[#FF6B35]",
    dotColor: "bg-orange-500 dark:bg-[#FF6B35]",
    glowColor:"rgba(255,107,53,0.5)",
    bullets: [
      { type: "Engineering",  colorKey: "orange", text: "Developed a comprehensive MERN-based ERP system with 40+ modular components supporting finance, HR, and operational workflows for an organization of 200+ employees." },
      { type: "Performance",  colorKey: "cyan",   text: "Optimized application performance by refactoring SQL queries and backend logic with Sequelize — reducing average API response times by 40% and improving overall system reliability." },
      { type: "Security",     colorKey: "blue",   text: "Implemented RBAC security, file upload systems, and reusable ReactBootstrap UI components used across 15+ internal modules, cutting new-feature development time by 30%." },
    ],
  },
  {
    company: "All Friends Studio",
    tagline:  "Creative Digital Products",
    role:     "Full Stack Developer Intern",
    period:   "Oct 2023 – Mar 2024",
    accent:   "text-blue-600 dark:text-[#0066FF]",
    dotColor: "bg-blue-500 dark:bg-[#0066FF]",
    glowColor:"rgba(0,102,255,0.5)",
    bullets: [
      { type: "Backend",     colorKey: "blue",    text: "Designed scalable backend architecture and developed 25+ REST APIs using Node.js and MongoDB for production-ready applications serving 1,000+ users." },
      { type: "Auth & Sec.", colorKey: "orange",  text: "Implemented JWT-based authentication and secure frontend–backend communication flows to support role-based access control and data protection across multiple client projects." },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F1F5F9] dark:bg-[#0D0D14]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="Experience">Experience</SectionTitle>

          <div className="space-y-10">
            {ROLES.map((r, ri) => (
              <motion.div
                key={ri}
                variants={fadeInUp}
                className="relative pl-6"
                style={{ borderLeft: "2px solid rgba(0,212,255,0.15)" }}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${r.dotColor}`}
                  style={{ boxShadow: `0 0 10px ${r.glowColor}` }} />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-[#F0F0F0]">{r.company}</h3>
                      <span className="text-xs text-slate-400 dark:text-[#8888AA]">· {r.tagline}</span>
                    </div>
                    <p className={`font-semibold text-sm mt-0.5 ${r.accent}`}>{r.role}</p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full self-start
                                   bg-slate-100 dark:bg-[#1E1E2E] border border-slate-200 dark:border-[#1E1E2E]
                                   text-slate-500 dark:text-[#8888AA]">
                    {r.period}
                  </span>
                </div>

                {/* Bullets */}
                <motion.ul className="space-y-3" variants={stagger}>
                  {r.bullets.map((b, i) => {
                    const s = SCHEMES[b.colorKey];
                    return (
                      <motion.li key={i} variants={fadeInUp} className="group flex items-start gap-3">
                        <span className={`mt-1.5 shrink-0 w-2 h-2 rounded-full ${s.dot}`} />
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                          <span className={`shrink-0 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md ${s.tag}`}>
                            {b.type}
                          </span>
                          <p className="text-sm text-slate-600 dark:text-[#8888AA] leading-relaxed group-hover:text-slate-800 dark:group-hover:text-[#F0F0F0] transition-colors">
                            {b.text}
                          </p>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
