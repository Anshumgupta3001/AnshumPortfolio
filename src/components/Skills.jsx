// FILE: src/components/Skills.jsx
import { motion } from "framer-motion";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const badgeGroup = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const badgeIn    = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } } };

const SCHEMES = {
  cyan:    { topBar: "border-t-cyan-400 dark:border-t-[#00D4FF]",      badge: "bg-cyan-50 dark:bg-[#00D4FF]/10 text-cyan-700 dark:text-[#00D4FF] border border-cyan-100 dark:border-[#00D4FF]/25",       icon: "text-cyan-600 dark:text-[#00D4FF]" },
  orange:  { topBar: "border-t-orange-400 dark:border-t-[#FF6B35]",    badge: "bg-orange-50 dark:bg-[#FF6B35]/10 text-orange-700 dark:text-[#FF6B35] border border-orange-100 dark:border-[#FF6B35]/25",   icon: "text-orange-600 dark:text-[#FF6B35]" },
  blue:    { topBar: "border-t-blue-400 dark:border-t-[#0066FF]",      badge: "bg-blue-50 dark:bg-[#0066FF]/10 text-blue-700 dark:text-[#0066FF] border border-blue-100 dark:border-[#0066FF]/25",         icon: "text-blue-600 dark:text-[#0066FF]" },
  emerald: { topBar: "border-t-emerald-400 dark:border-t-emerald-400", badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/25", icon: "text-emerald-600 dark:text-emerald-400" },
  purple:  { topBar: "border-t-purple-400 dark:border-t-purple-400",   badge: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-100 dark:border-purple-500/25",  icon: "text-purple-600 dark:text-purple-400" },
  slate:   { topBar: "border-t-slate-400 dark:border-t-slate-500",     badge: "bg-slate-100 dark:bg-slate-700/30 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/40",       icon: "text-slate-500 dark:text-slate-400" },
};

const SKILL_GROUPS = [
  {
    colorKey: "cyan",
    label: "Frontend",
    emoji: "⚡",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "ReactBootstrap", "Framer Motion"],
  },
  {
    colorKey: "orange",
    label: "Backend",
    emoji: "🔧",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "JWT Auth", "RBAC", "Middleware Design", "Rate Limiting"],
  },
  {
    colorKey: "blue",
    label: "Databases & Cloud",
    emoji: "🗄️",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Sequelize", "Mongoose", "Redis", "AWS S3", "AWS EC2", "Vercel", "Render"],
  },
  {
    colorKey: "emerald",
    label: "AI & Automation",
    emoji: "🤖",
    skills: ["OpenAI API", "GPT-4", "LLM Pipelines", "LangChain", "Pinecone", "Vector Search", "RAG Architecture", "Prompt Engineering", "AI Automation"],
  },
  {
    colorKey: "purple",
    label: "Payments & Integrations",
    emoji: "💳",
    skills: ["Razorpay", "Stripe", "Webhooks", "Subscription Billing", "Usage Tracking", "Twilio", "SendGrid", "Third-Party APIs"],
  },
  {
    colorKey: "slate",
    label: "Tools & DevOps",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "Postman", "Nginx", "PM2", "Ubuntu Server", "VS Code", "Jira", "Agile / Scrum"],
  },
  {
    colorKey: "cyan",
    label: "Engineering Practices",
    emoji: "🏗️",
    skills: ["System Design", "MERN Stack", "ERP Architecture", "Multi-Tenant SaaS", "Performance Optimization", "Code Review", "API Documentation", "Clean Code"],
  },
  {
    colorKey: "orange",
    label: "Currently Exploring",
    emoji: "🚀",
    learning: true,
    skills: ["TypeScript (Advanced)", "Docker", "Kubernetes", "Microservices", "CI/CD Pipelines", "Redis Queues (BullMQ)", "tRPC", "Prisma ORM"],
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

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F8FAFC] dark:bg-[#0A0A0F]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="Skills">Tech Stack</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_GROUPS.map((g, gi) => {
              const s = SCHEMES[g.colorKey];
              return (
                <motion.div
                  key={gi}
                  variants={fadeInUp}
                  className={`rounded-2xl overflow-hidden
                             bg-white dark:bg-[#12121A]
                             border border-[#E2E8F0] dark:border-[#1E1E2E]
                             border-t-2 ${s.topBar}
                             shadow-md dark:shadow-none
                             ${g.learning ? "opacity-90" : ""}`}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{g.emoji}</span>
                        <h3 className={`text-sm font-bold tracking-wide ${s.icon}`}>{g.label}</h3>
                      </div>
                      {g.learning && (
                        <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full
                                         bg-orange-50 dark:bg-[#FF6B35]/10 text-orange-600 dark:text-[#FF6B35]
                                         border border-orange-200 dark:border-[#FF6B35]/25">
                          In Progress
                        </span>
                      )}
                    </div>
                    <motion.div className="flex flex-wrap gap-2" variants={badgeGroup}>
                      {g.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          variants={badgeIn}
                          whileHover={{ scale: 1.05 }}
                          className={`text-xs font-medium px-2.5 py-1 rounded-lg cursor-default transition-colors ${s.badge}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
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
