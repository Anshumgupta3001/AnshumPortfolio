// FILE: src/components/Education.jsx
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const EDUCATION = [
  {
    icon: GraduationCap,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Panipat Institute of Engineering and Technology",
    period: "2020 – 2024",
    detail: "Bachelor's degree in Computer Science and Engineering.",
    highlight: true,
    badge: "Computer Science",
  },
  {
    icon: BookOpen,
    degree: "Class XII — Science (PCM)",
    institution: "Saint Giri Sr. Sec. School, Delhi",
    period: "2019 – 2020",
    detail: "Senior Secondary education with Physics, Chemistry, and Mathematics.",
    highlight: false,
    badge: "PCM",
  },
  {
    icon: Award,
    degree: "Class X",
    institution: "Saint Giri Sr. Sec. School, Delhi",
    period: "2017 – 2018",
    detail: "Secondary education.",
    highlight: false,
    badge: "Secondary",
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

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F8FAFC] dark:bg-[#0A0A0F]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="Education">Education</SectionTitle>
          <div className="space-y-4">
            {EDUCATION.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ x: 4 }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300
                             bg-white dark:bg-[#12121A]
                             shadow-md dark:shadow-none
                             ${e.highlight
                               ? "border border-cyan-200 dark:border-[#00D4FF]/30 border-t-2 border-t-cyan-400/60 dark:border-t-[#00D4FF]/60"
                               : "border border-[#E2E8F0] dark:border-[#1E1E2E]"
                             }`}
                >
                  <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={`p-3 rounded-xl border shrink-0 self-start
                                    ${e.highlight
                                      ? "bg-cyan-50 dark:bg-[#00D4FF]/10 border-cyan-200 dark:border-[#00D4FF]/25 text-cyan-600 dark:text-[#00D4FF]"
                                      : "bg-slate-50 dark:bg-[#1E1E2E] border-slate-200 dark:border-[#1E1E2E] text-slate-500 dark:text-[#8888AA]"
                                    }`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                        <div>
                          <h3 className={`font-bold text-base leading-snug ${e.highlight ? "text-slate-900 dark:text-[#F0F0F0]" : "text-slate-700 dark:text-[#8888AA]"}`}>
                            {e.degree}
                          </h3>
                          <p className={`text-sm mt-0.5 ${e.highlight ? "text-cyan-600 dark:text-[#00D4FF] font-semibold" : "text-slate-500 dark:text-[#8888AA]"}`}>
                            {e.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full
                                           ${e.highlight
                                             ? "bg-cyan-50 dark:bg-[#00D4FF]/10 text-cyan-700 dark:text-[#00D4FF] border border-cyan-100 dark:border-[#00D4FF]/25"
                                             : "bg-slate-100 dark:bg-[#1E1E2E] text-slate-500 dark:text-[#8888AA] border border-slate-200 dark:border-[#1E1E2E]"
                                           }`}>
                            {e.period}
                          </span>
                        </div>
                      </div>
                      {e.detail && (
                        <p className="text-xs text-slate-400 dark:text-[#8888AA] mt-1.5">{e.detail}</p>
                      )}
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
