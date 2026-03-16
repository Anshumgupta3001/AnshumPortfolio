// FILE: src/components/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight, MessageSquare } from "lucide-react";

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const CONTACT_ITEMS = [
  { icon: Mail,   label: "Email",    value: "anshumgupta3001@gmail.com", href: "mailto:anshumgupta3001@gmail.com", colorClass: "text-cyan-600 dark:text-[#00D4FF]",    bgClass: "bg-cyan-50 dark:bg-[#00D4FF]/10 border-cyan-200 dark:border-[#00D4FF]/25" },
  { icon: Phone,  label: "Phone",    value: "+91-8595527781",             href: "tel:+918595527781",                colorClass: "text-emerald-600 dark:text-emerald-400", bgClass: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25" },
  { icon: Linkedin,label: "LinkedIn",value: "anshum-gupta",               href: "https://linkedin.com/in/anshum-gupta-382b98231", colorClass: "text-blue-600 dark:text-[#0066FF]",    bgClass: "bg-blue-50 dark:bg-[#0066FF]/10 border-blue-200 dark:border-[#0066FF]/25" },
  { icon: Github, label: "GitHub",   value: "Anshumgupta3001",             href: "https://github.com/Anshumgupta3001",            colorClass: "text-orange-600 dark:text-[#FF6B35]",  bgClass: "bg-orange-50 dark:bg-[#FF6B35]/10 border-orange-200 dark:border-[#FF6B35]/25" },
];

function SectionTitle({ label, children }) {
  return (
    <motion.div className="mb-10 text-center" variants={fadeInUp}>
      <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-[#00D4FF] uppercase mb-2">[ {label} ]</p>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-[#F0F0F0] tracking-tight">{children}</h2>
      <div className="mt-2 h-0.5 w-12 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#00D4FF,#FF6B35)" }} />
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F1F5F9] dark:bg-[#0D0D14]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-200/10 dark:bg-[#00D4FF]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-200/10 dark:bg-[#FF6B35]/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="Contact">Let's Build Together</SectionTitle>

          {/* Main card */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-3xl overflow-hidden mb-8
                       bg-white dark:bg-[#12121A]
                       border border-[#E2E8F0] dark:border-[#1E1E2E]
                       shadow-xl dark:shadow-none"
          >
            {/* Orbit rings */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-cyan-300/20 dark:border-[#00D4FF]/10 orbit" style={{ animationDuration: "12s" }} />
              <div className="absolute inset-8 rounded-full border border-orange-300/15 dark:border-[#FF6B35]/10 orbit-reverse" style={{ animationDuration: "18s" }} />
              <div className="absolute inset-16 rounded-full border border-blue-300/10 dark:border-[#0066FF]/10 orbit" style={{ animationDuration: "25s" }} />
            </div>

            <div className="relative p-8 md:p-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-[#00D4FF]/10 border border-cyan-200 dark:border-[#00D4FF]/25">
                    <MessageSquare size={22} className="text-cyan-600 dark:text-[#00D4FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-[#F0F0F0]">Open to Opportunities</h3>
                    <p className="text-sm text-slate-500 dark:text-[#8888AA]">Full Stack · AI Engineering · Backend</p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-[#8888AA] leading-relaxed mb-8">
                  I'm actively looking for roles where I can build scalable, intelligent systems.
                  If you're working on something that needs{" "}
                  <span className="font-semibold text-slate-900 dark:text-[#F0F0F0]">full-stack depth with AI integration</span>
                  , I'd love to hear about it.
                </p>

                <motion.a
                  href="mailto:anshumgupta3001@gmail.com"
                  whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(0,212,255,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="glow-pulse inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm text-white transition-all"
                  style={{ background: "linear-gradient(90deg,#00D4FF,#0066FF)" }}
                >
                  <Mail size={16} /> Send Me an Email <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact grid */}
          <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
            {CONTACT_ITEMS.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={fadeInUp}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl
                             bg-white dark:bg-[#12121A]
                             border border-[#E2E8F0] dark:border-[#1E1E2E]
                             shadow-sm dark:shadow-none
                             hover:border-cyan-300 dark:hover:border-[#00D4FF]/40
                             transition-all duration-200"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 transition-colors ${c.bgClass}`}>
                    <Icon size={16} className={c.colorClass} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-400 dark:text-[#8888AA] mb-0.5">{c.label}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-[#F0F0F0] truncate group-hover:text-cyan-600 dark:group-hover:text-[#00D4FF] transition-colors">
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight size={14} className="ml-auto shrink-0 text-slate-300 dark:text-[#8888AA]/50 group-hover:text-cyan-500 dark:group-hover:text-[#00D4FF] transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
