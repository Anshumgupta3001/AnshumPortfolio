// FILE: src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight, ChevronDown, Calendar, Briefcase, Code2, Users } from "lucide-react";

function useCountUp(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || end === 0) return;
    let t0;
    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return { count, ref };
}

function StatCard({ icon: Icon, end, suffix, prefix, label, delay }) {
  const { count, ref } = useCountUp(end);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="relative group flex-1 min-w-[130px] rounded-2xl p-5 text-center overflow-hidden
                 bg-white dark:bg-[#12121A]
                 border-t-2 border-t-cyan-300/60 dark:border-t-[#00D4FF]/40
                 border border-[#E2E8F0] dark:border-[#1E1E2E]
                 shadow-md dark:shadow-none"
    >
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-cyan-50/80 to-transparent dark:from-[#00D4FF]/5 dark:to-transparent" />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-3 mx-auto
                        bg-cyan-50 dark:bg-[#00D4FF]/10
                        border border-cyan-200 dark:border-[#00D4FF]/25
                        text-cyan-600 dark:text-[#00D4FF]">
          <Icon size={16} />
        </div>
        <p className="text-3xl font-black tracking-tight text-cyan-600 dark:text-[#00D4FF]">
          {prefix}{count}{suffix}
        </p>
        <p className="text-xs text-slate-500 dark:text-[#8888AA] mt-1 font-medium leading-tight">{label}</p>
      </div>
    </motion.div>
  );
}

function Particle({ x, y, size, delay, color }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, backgroundColor: color, opacity: 0.12 }}
      animate={{ y: [-15, 15, -15], opacity: [0.08, 0.2, 0.08] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp  = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const particles = [
    { x: "8%",  y: "25%", size: 6,  delay: 0,   color: "#00D4FF" },
    { x: "88%", y: "18%", size: 4,  delay: 1.2, color: "#FF6B35" },
    { x: "78%", y: "68%", size: 8,  delay: 0.8, color: "#00D4FF" },
    { x: "12%", y: "72%", size: 5,  delay: 2,   color: "#FF6B35" },
    { x: "52%", y: "8%",  size: 3,  delay: 1.5, color: "#0066FF" },
    { x: "92%", y: "48%", size: 6,  delay: 0.5, color: "#0066FF" },
    { x: "4%",  y: "52%", size: 4,  delay: 1.8, color: "#00D4FF" },
    { x: "62%", y: "88%", size: 5,  delay: 0.3, color: "#FF6B35" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#F8FAFC] dark:bg-[#0A0A0F]">
      {/* BG orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-200/15 dark:bg-[#00D4FF]/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-orange-200/15 dark:bg-[#FF6B35]/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-200/15 dark:bg-[#0066FF]/5 blur-3xl" />
      </div>
      <div className="absolute inset-0 -z-10 dot-grid opacity-50 dark:opacity-100" />
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      <motion.div className="max-w-4xl mx-auto" variants={stagger} initial="hidden" animate="visible">
        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-[#F0F0F0] leading-[0.95] tracking-tight mb-5"
        >
          Anshum
          <br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#00D4FF,#0066FF,#FF6B35)" }}>
            Gupta
          </span>
        </motion.h1>

        {/* Shimmer tagline */}
        <motion.p variants={fadeUp} className="text-shimmer text-base sm:text-lg md:text-xl font-bold mb-5 tracking-widest uppercase">
          Full Stack Developer&nbsp;·&nbsp;AI Engineer&nbsp;·&nbsp;System Architect
        </motion.p>

        {/* Description */}
        <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-[#8888AA] leading-relaxed mb-10">
          I build{" "}
          <span className="font-semibold text-slate-900 dark:text-[#F0F0F0]">AI-driven full-stack systems</span>
          {" "}— from LLM-powered automation pipelines to enterprise ERP platforms — with full ownership
          from architecture to deployment across{" "}
          <span className="font-semibold text-cyan-600 dark:text-[#00D4FF]">3 startups</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
          <motion.a
            href="mailto:anshumgupta3001@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(0,212,255,0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all"
            style={{ background: "linear-gradient(90deg,#00D4FF,#0066FF)" }}
          >
            <Mail size={16} /> Contact Me
          </motion.a>
          <motion.a
            href="https://github.com/Anshumgupta3001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm
                       border border-slate-300 dark:border-[#1E1E2E]
                       text-slate-700 dark:text-[#8888AA]
                       hover:border-cyan-400 dark:hover:border-[#00D4FF]
                       hover:text-cyan-600 dark:hover:text-[#00D4FF] transition-all"
          >
            GitHub <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        {/* Stat cards */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
          <StatCard icon={Calendar}  end={2}  suffix="+"  prefix="" label="Years Experience"      delay={0.6}  />
          <StatCard icon={Briefcase} end={3}  suffix=""   prefix="" label="Startups Shipped"     delay={0.75} />
          <StatCard icon={Code2}     end={15} suffix="+"  prefix="" label="Technologies Mastered" delay={0.9}  />
          <StatCard icon={Users}     end={1}  suffix="K+" prefix="" label="Users Impacted"        delay={1.05} />
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 text-cyan-400/50 dark:text-[#00D4FF]/40 hover:text-cyan-500 dark:hover:text-[#00D4FF] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
