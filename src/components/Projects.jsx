// FILE: src/components/Projects.jsx
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Layers, CreditCard, Code2, MessageSquare, Github } from "lucide-react";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const SCHEMES = {
  cyan:    { topBar: "border-t-cyan-400 dark:border-t-[#00D4FF]",    badge: "bg-cyan-50 dark:bg-[#00D4FF]/10 text-cyan-700 dark:text-[#00D4FF] border border-cyan-100 dark:border-[#00D4FF]/25",    tag: "bg-cyan-50 dark:bg-[#00D4FF]/10 text-cyan-600 dark:text-[#00D4FF]",    impact: "text-cyan-600 dark:text-[#00D4FF]",   icon: "bg-cyan-50 dark:bg-[#00D4FF]/10 text-cyan-600 dark:text-[#00D4FF] border-cyan-200 dark:border-[#00D4FF]/25",   highlight: "text-cyan-600 dark:text-[#00D4FF]" },
  orange:  { topBar: "border-t-orange-400 dark:border-t-[#FF6B35]",  badge: "bg-orange-50 dark:bg-[#FF6B35]/10 text-orange-700 dark:text-[#FF6B35] border border-orange-100 dark:border-[#FF6B35]/25", tag: "bg-orange-50 dark:bg-[#FF6B35]/10 text-orange-600 dark:text-[#FF6B35]", impact: "text-orange-600 dark:text-[#FF6B35]", icon: "bg-orange-50 dark:bg-[#FF6B35]/10 text-orange-600 dark:text-[#FF6B35] border-orange-200 dark:border-[#FF6B35]/25", highlight: "text-orange-600 dark:text-[#FF6B35]" },
  blue:    { topBar: "border-t-blue-400 dark:border-t-[#0066FF]",    badge: "bg-blue-50 dark:bg-[#0066FF]/10 text-blue-700 dark:text-[#0066FF] border border-blue-100 dark:border-[#0066FF]/25",    tag: "bg-blue-50 dark:bg-[#0066FF]/10 text-blue-600 dark:text-[#0066FF]",    impact: "text-blue-600 dark:text-[#0066FF]",   icon: "bg-blue-50 dark:bg-[#0066FF]/10 text-blue-600 dark:text-[#0066FF] border-blue-200 dark:border-[#0066FF]/25",   highlight: "text-blue-600 dark:text-[#0066FF]" },
  emerald: { topBar: "border-t-emerald-400 dark:border-t-emerald-400", badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/25", tag: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400", impact: "text-emerald-600 dark:text-emerald-400", icon: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/25", highlight: "text-emerald-600 dark:text-emerald-400" },
};

const PROJECTS = [
  {
    icon: Zap,
    colorKey: "cyan",
    title: "AI Outbound Automation Platform",
    category: "AI / Full Stack",
    impact: "10K+ messages/day · +35% engagement",
    desc: "End-to-end outbound automation system for email and LinkedIn with campaign management, real-time tracking, and analytics dashboards. Built for GTMVantage to scale B2B outreach without manual effort.",
    highlights: ["LLM personalization via OpenAI + Pinecone vector search", "Automated sequencing: email → LinkedIn → follow-up", "Real-time open/click tracking with webhook events"],
    stack: ["React", "Next.js", "Node.js", "OpenAI", "Pinecone", "MongoDB", "Redis"],
    github: "https://github.com/Anshumgupta3001",
  },
  {
    icon: Layers,
    colorKey: "orange",
    title: "MERN Enterprise ERP System",
    category: "Full Stack · Enterprise",
    impact: "40+ modules · 200+ employees · 40% faster APIs",
    desc: "Comprehensive ERP for an organization of 200+ employees spanning finance, HR, inventory, and operations. Built 40+ modular React components shared across the entire platform.",
    highlights: ["RBAC with role-permission matrix across 15+ modules", "Sequelize query optimization — 40% API latency reduction", "File upload system with S3-compatible storage and previews"],
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "ReactBootstrap", "JWT"],
    github: "https://github.com/Anshumgupta3001",
  },
  {
    icon: CreditCard,
    colorKey: "blue",
    title: "Multi-Tenant SaaS Platform",
    category: "SaaS · Payments",
    impact: "50+ active clients · Razorpay billing",
    desc: "Multi-tenant platform with per-client data isolation, subscription billing, and usage-based plan gating. Serves 50+ B2B clients with real-time analytics and prospect workflow automation.",
    highlights: ["Razorpay webhooks for subscription lifecycle management", "Plan-based feature gating with middleware-level enforcement", "WebSocket-powered live dashboard with usage analytics"],
    stack: ["React", "Node.js", "MongoDB", "Razorpay", "WebSockets", "Tailwind CSS"],
    github: "https://github.com/Anshumgupta3001",
  },
  {
    icon: MessageSquare,
    colorKey: "emerald",
    title: "AI Document Q&A System",
    category: "AI · RAG · Personal Project",
    impact: "Context-aware answers · PDF upload · Vector search",
    desc: "A RAG-based document intelligence tool — users upload PDFs and ask natural language questions. The system chunks, embeds, and retrieves relevant context before generating precise, cited answers via GPT-4.",
    highlights: ["PDF parsing + semantic chunking with LangChain", "Pinecone vector store for sub-100ms similarity search", "Streaming GPT-4 responses with source attribution"],
    stack: ["React", "Node.js", "LangChain", "OpenAI GPT-4", "Pinecone", "PDF.js"],
    github: "https://github.com/Anshumgupta3001",
  },
  {
    icon: Code2,
    colorKey: "cyan",
    title: "Scalable REST API Backend",
    category: "Backend · API",
    impact: "25+ APIs · 1,000+ users · Production-grade",
    desc: "Production-ready Node.js backend with 25+ REST APIs across multiple client projects at All Friends Studio. JWT auth, RBAC, input validation, and rate limiting built in from day one.",
    highlights: ["Centralized error handling and request validation middleware", "Role-based access control with hierarchical permissions", "Mongoose schema design for performant MongoDB queries"],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose", "REST APIs"],
    github: "https://github.com/Anshumgupta3001",
  },
];

function SectionTitle({ label, children }) {
  return (
    <motion.div className="mb-10" variants={fadeInUp}>
      <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-[#00D4FF] uppercase mb-2">[ {label} ]</p>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-[#F0F0F0] tracking-tight">{children}</h2>
      <div className="mt-2 h-0.5 w-12 rounded-full" style={{ background: "linear-gradient(90deg,#00D4FF,#FF6B35)" }} />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F1F5F9] dark:bg-[#0D0D14]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="Projects">Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => {
              const s = SCHEMES[p.colorKey];
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className={`group relative rounded-2xl overflow-hidden flex flex-col
                             bg-white dark:bg-[#12121A]
                             border border-[#E2E8F0] dark:border-[#1E1E2E]
                             border-t-2 ${s.topBar}
                             shadow-md dark:shadow-none
                             transition-all duration-300`}
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg border ${s.icon}`}>
                        <Icon size={16} />
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${s.badge}`}>
                        {p.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-[#F0F0F0] mb-1.5 leading-snug group-hover:text-cyan-600 dark:group-hover:text-[#00D4FF] transition-colors">
                      {p.title}
                    </h3>

                    <p className={`text-xs font-semibold mb-3 ${s.impact}`}>{p.impact}</p>

                    <p className="text-sm text-slate-500 dark:text-[#8888AA] leading-relaxed mb-4">{p.desc}</p>

                    {/* Key highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${s.highlight.replace("text-", "bg-")}`} />
                          <span className="text-xs text-slate-500 dark:text-[#8888AA] leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-[#1E1E2E] flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((tech) => (
                          <span key={tech} className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${s.tag}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1 text-xs text-slate-400 dark:text-[#8888AA] hover:text-slate-700 dark:hover:text-[#F0F0F0] transition-colors"
                      >
                        <Github size={12} /> Code <ArrowUpRight size={10} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
