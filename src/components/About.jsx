// FILE: src/components/About.jsx
import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Cpu, Rocket, GitBranch, ShieldCheck, TrendingUp } from "lucide-react";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function SectionTitle({ label, children }) {
  return (
    <motion.div className="mb-10" variants={fadeInUp}>
      <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-[#00D4FF] uppercase mb-2">[ {label} ]</p>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-[#F0F0F0] tracking-tight">{children}</h2>
      <div className="mt-2 h-0.5 w-12 rounded-full" style={{ background: "linear-gradient(90deg,#00D4FF,#FF6B35)" }} />
    </motion.div>
  );
}

const STATS = [
  { icon: MapPin,    label: "Based in",    value: "Delhi, India" },
  { icon: Code2,     label: "Stack",       value: "MERN + AI / LLM" },
  { icon: Briefcase, label: "Experience",  value: "2+ Years · 3 Startups" },
  { icon: Cpu,       label: "Exploring",   value: "TypeScript · Docker · Microservices" },
];

const STRENGTHS = [
  { icon: Rocket,      label: "Ship fast, ship right", desc: "End-to-end delivery from design to production — no handoffs needed." },
  { icon: GitBranch,   label: "System thinker",        desc: "I design for scale first — clean APIs, modular architecture, minimal tech debt." },
  { icon: ShieldCheck, label: "Security-conscious",    desc: "RBAC, JWT, multi-tenant isolation, and input validation are never afterthoughts." },
  { icon: TrendingUp,  label: "Impact-driven",         desc: "Every feature I ship is tied to a measurable business outcome — engagement, speed, or revenue." },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F8FAFC] dark:bg-[#0A0A0F]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="About">About Me</SectionTitle>

          {/* Top: bio + stat cards */}
          <div className="grid md:grid-cols-5 gap-10 items-start mb-12">
            <motion.div variants={fadeInUp} className="md:col-span-3 space-y-4 text-slate-600 dark:text-[#8888AA] leading-relaxed text-base">
              <p>
                I'm an AI and MERN Stack Developer with hands-on experience across{" "}
                <span className="font-semibold text-slate-900 dark:text-[#F0F0F0]">3 early-stage startups</span>,
                building scalable, production-grade systems independently — from first principles to final deployment.
              </p>
              <p>
                My work sits at the intersection of{" "}
                <span className="font-semibold text-cyan-600 dark:text-[#00D4FF]">AI automation and robust full-stack engineering</span>
                {" "}— LLM-powered outbound pipelines processing 10,000+ messages daily, enterprise ERP systems
                serving 200+ employees, and multi-tenant SaaS platforms with real-time analytics and subscription billing.
              </p>
              <p>
                I write code that <span className="font-semibold text-slate-900 dark:text-[#F0F0F0]">other engineers can maintain</span> — clean
                REST contracts, modular component libraries, and documented deployment flows. I've cut new-feature
                development time by 30% through reusable UI systems and reduced API latency by 40% through
                targeted query optimization.
              </p>
              <p>
                I take{" "}
                <span className="font-semibold text-slate-900 dark:text-[#F0F0F0]">full ownership</span>
                {" "}— if it needs to be built, deployed, and scaled, I'll own the whole chain.
                I'm most effective in fast-moving teams where decisions happen close to the code.
              </p>
            </motion.div>

            <div className="md:col-span-2 grid grid-cols-2 gap-3">
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.04 }}
                    className="p-4 rounded-xl
                               bg-white dark:bg-[#12121A]
                               border border-[#E2E8F0] dark:border-[#1E1E2E]
                               shadow-sm dark:shadow-none
                               hover:border-cyan-300 dark:hover:border-[#00D4FF]/40 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-cyan-600 dark:text-[#00D4FF] mb-1.5">
                      <Icon size={13} />
                      <p className="text-xs text-slate-400 dark:text-[#8888AA]">{s.label}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-[#F0F0F0] leading-tight">{s.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom: strengths row */}
          <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STRENGTHS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={fadeInUp}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl
                             bg-white dark:bg-[#12121A]
                             border border-[#E2E8F0] dark:border-[#1E1E2E]
                             shadow-sm dark:shadow-none
                             hover:border-cyan-300 dark:hover:border-[#00D4FF]/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center
                                  bg-cyan-50 dark:bg-[#00D4FF]/10
                                  border border-cyan-200 dark:border-[#00D4FF]/25
                                  text-cyan-600 dark:text-[#00D4FF]">
                    <Icon size={14} />
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-[#F0F0F0] mb-1">{s.label}</p>
                  <p className="text-xs text-slate-500 dark:text-[#8888AA] leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
