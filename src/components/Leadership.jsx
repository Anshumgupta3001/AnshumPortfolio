// FILE: src/components/Leadership.jsx
import { motion } from "framer-motion";
import { GitBranch, Users, Target, Shield } from "lucide-react";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const SCHEMES = {
  cyan:    { topBar: "border-t-cyan-400 dark:border-t-[#00D4FF]",    icon: "bg-cyan-50 dark:bg-[#00D4FF]/10 border-cyan-200 dark:border-[#00D4FF]/25 text-cyan-600 dark:text-[#00D4FF]",    accent: "text-cyan-600 dark:text-[#00D4FF]",    tag: "bg-cyan-50 dark:bg-[#00D4FF]/10 text-cyan-700 dark:text-[#00D4FF] border border-cyan-100 dark:border-[#00D4FF]/25" },
  orange:  { topBar: "border-t-orange-400 dark:border-t-[#FF6B35]",  icon: "bg-orange-50 dark:bg-[#FF6B35]/10 border-orange-200 dark:border-[#FF6B35]/25 text-orange-600 dark:text-[#FF6B35]",  accent: "text-orange-600 dark:text-[#FF6B35]",  tag: "bg-orange-50 dark:bg-[#FF6B35]/10 text-orange-700 dark:text-[#FF6B35] border border-orange-100 dark:border-[#FF6B35]/25" },
  blue:    { topBar: "border-t-blue-400 dark:border-t-[#0066FF]",    icon: "bg-blue-50 dark:bg-[#0066FF]/10 border-blue-200 dark:border-[#0066FF]/25 text-blue-600 dark:text-[#0066FF]",    accent: "text-blue-600 dark:text-[#0066FF]",    tag: "bg-blue-50 dark:bg-[#0066FF]/10 text-blue-700 dark:text-[#0066FF] border border-blue-100 dark:border-[#0066FF]/25" },
  emerald: { topBar: "border-t-emerald-400 dark:border-t-emerald-400", icon: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25 text-emerald-600 dark:text-emerald-400", accent: "text-emerald-600 dark:text-emerald-400", tag: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/25" },
};

const CARDS = [
  {
    icon: GitBranch,
    colorKey: "cyan",
    title: "Full Ownership Mindset",
    subtitle: "End-to-End Engineering",
    desc: "Consistently took end-to-end ownership across 3 startups — from system design and API architecture to cloud deployment and performance optimization — without waiting for handoffs.",
    tags: ["System Design", "Deployment", "Architecture", "Performance"],
  },
  {
    icon: Users,
    colorKey: "orange",
    title: "Cross-Functional Collaboration",
    subtitle: "Product · Engineering · Business",
    desc: "Collaborated directly with product managers, business stakeholders, and designers to ship features on tight deadlines. Translated business requirements into technical solutions independently.",
    tags: ["Stakeholder Alignment", "Feature Delivery", "Agile"],
  },
  {
    icon: Target,
    colorKey: "blue",
    title: "Startup Engineering Culture",
    subtitle: "3 Early-Stage Companies",
    desc: "Built production systems from scratch at 3 early-stage startups — working with minimal guidance, defining technical direction, and scaling solutions from zero to serving real users.",
    tags: ["0 → 1 Building", "Technical Direction", "Scalability"],
  },
  {
    icon: Shield,
    colorKey: "emerald",
    title: "Security & Reliability Focus",
    subtitle: "RBAC · JWT · Production-Grade",
    desc: "Implemented RBAC security, JWT authentication, and multi-tenant isolation across platforms. Prioritized reliability and data protection in every production system shipped.",
    tags: ["RBAC", "JWT Auth", "Multi-Tenant", "Data Security"],
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

export default function Leadership() {
  return (
    <section id="leadership" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F1F5F9] dark:bg-[#0D0D14]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="Working Style">How I Work</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5">
            {CARDS.map((c, i) => {
              const s = SCHEMES[c.colorKey];
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl overflow-hidden
                             bg-white dark:bg-[#12121A]
                             border border-[#E2E8F0] dark:border-[#1E1E2E]
                             border-t-2 ${s.topBar}
                             shadow-md dark:shadow-none
                             transition-all duration-300`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2.5 rounded-xl border shrink-0 ${s.icon}`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-[#F0F0F0] leading-snug">{c.title}</h3>
                        <p className={`text-xs font-semibold mt-0.5 ${s.accent}`}>{c.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-[#8888AA] leading-relaxed mb-4">{c.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md ${s.tag}`}>
                          {tag}
                        </span>
                      ))}
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
