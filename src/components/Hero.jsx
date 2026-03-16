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
      className="relative group flex-1 min-w-[120px] rounded-2xl p-4 text-center overflow-hidden
                 bg-white dark:bg-[#12121A]
                 border-t-2 border-t-cyan-300/60 dark:border-t-[#00D4FF]/40
                 border border-[#E2E8F0] dark:border-[#1E1E2E]
                 shadow-md dark:shadow-none"
    >
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-cyan-50/80 to-transparent dark:from-[#00D4FF]/5 dark:to-transparent" />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-xl mb-2 mx-auto
                        bg-cyan-50 dark:bg-[#00D4FF]/10
                        border border-cyan-200 dark:border-[#00D4FF]/25
                        text-cyan-600 dark:text-[#00D4FF]">
          <Icon size={14} />
        </div>
        <p className="text-2xl font-black tracking-tight text-cyan-600 dark:text-[#00D4FF]">
          {prefix}{count}{suffix}
        </p>
        <p className="text-[11px] text-slate-500 dark:text-[#8888AA] mt-0.5 font-medium leading-tight">{label}</p>
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

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.34, 1.4, 0.64, 1], delay: 0.2 }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow blob */}
      <div className="absolute w-72 h-72 rounded-full blur-3xl
                      bg-cyan-300/25 dark:bg-[#00D4FF]/10 pointer-events-none" />

      {/* Outer orbit ring (slow, clockwise) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute w-72 h-72 rounded-full
                   border border-dashed border-cyan-400/25 dark:border-[#00D4FF]/20"
      >
        {/* Dot node on outer ring */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-2.5 h-2.5 rounded-full bg-cyan-400 dark:bg-[#00D4FF]
                         shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                         w-1.5 h-1.5 rounded-full bg-orange-400 dark:bg-[#FF6B35]
                         shadow-[0_0_6px_rgba(255,107,53,0.8)]" />
      </motion.div>

      {/* Inner orbit ring (faster, counter-clockwise) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute w-56 h-56 rounded-full
                   border border-dashed border-orange-400/20 dark:border-[#FF6B35]/20"
      >
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                         w-2 h-2 rounded-full bg-blue-400 dark:bg-[#0066FF]
                         shadow-[0_0_6px_rgba(0,102,255,0.8)]" />
      </motion.div>

      {/* Floating photo */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-48 h-48"
      >
        {/* Gradient border ring */}
        <div
          className="absolute inset-0 rounded-full p-[3px]"
          style={{ background: "linear-gradient(135deg, #00D4FF 0%, #0066FF 50%, #FF6B35 100%)" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden
                          bg-white dark:bg-[#0A0A0F]">
            <img
              src="/profile.jpg"
              alt="Anshum Gupta"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.classList.add("flex","items-center","justify-center");
                e.target.parentNode.innerHTML = `<span style="font-size:3rem">AG</span>`;
              }}
            />
          </div>
        </div>

        {/* Pulse status ring */}
        <span className="absolute bottom-3 right-3 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500
                           border-2 border-white dark:border-[#0A0A0F]" />
        </span>
      </motion.div>

      {/* Floating tech badge — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -top-2 -right-4 px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wide uppercase
                   bg-white dark:bg-[#12121A]
                   border border-[#E2E8F0] dark:border-[#1E1E2E]
                   text-cyan-600 dark:text-[#00D4FF]
                   shadow-md dark:shadow-none"
      >
        MERN + AI
      </motion.div>

      {/* Floating tech badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-2 -left-6 px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wide uppercase
                   bg-white dark:bg-[#12121A]
                   border border-[#E2E8F0] dark:border-[#1E1E2E]
                   text-orange-600 dark:text-[#FF6B35]
                   shadow-md dark:shadow-none"
      >
        Full Stack
      </motion.div>
    </motion.div>
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden bg-[#F8FAFC] dark:bg-[#0A0A0F]">
      {/* BG orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full bg-cyan-200/15 dark:bg-[#00D4FF]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-200/15 dark:bg-[#FF6B35]/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-blue-200/15 dark:bg-[#0066FF]/5 blur-3xl" />
      </div>
      <div className="absolute inset-0 -z-10 dot-grid opacity-50 dark:opacity-100" />
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      <div className="relative max-w-6xl mx-auto w-full py-20">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">

          {/* Left: text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-[#F0F0F0] leading-[0.95] tracking-tight mb-5"
            >
              Anshum
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#00D4FF,#0066FF,#FF6B35)" }}>
                Gupta
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-shimmer text-sm sm:text-base md:text-lg font-bold mb-5 tracking-widest uppercase">
              Full Stack Developer&nbsp;·&nbsp;AI Engineer&nbsp;·&nbsp;System Architect
            </motion.p>

            <motion.p variants={fadeUp} className="max-w-xl mx-auto lg:mx-0 text-base text-slate-600 dark:text-[#8888AA] leading-relaxed mb-8">
              I build{" "}
              <span className="font-semibold text-slate-900 dark:text-[#F0F0F0]">AI-driven full-stack systems</span>
              {" "}— from LLM-powered automation pipelines to enterprise ERP platforms — with full ownership
              from architecture to deployment across{" "}
              <span className="font-semibold text-cyan-600 dark:text-[#00D4FF]">3 startups</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
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
          </motion.div>

          {/* Right: profile photo */}
          <div className="shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto">
            <ProfilePhoto />
          </div>
        </div>

        {/* Stat cards — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <StatCard icon={Calendar}  end={2}  suffix="+"  prefix="" label="Years Experience"       delay={0.9}  />
          <StatCard icon={Briefcase} end={3}  suffix=""   prefix="" label="Startups Shipped"       delay={1.05} />
          <StatCard icon={Code2}     end={15} suffix="+"  prefix="" label="Technologies Mastered"  delay={1.2}  />
          <StatCard icon={Users}     end={1}  suffix="K+" prefix="" label="Users Impacted"         delay={1.35} />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400/50 dark:text-[#00D4FF]/40 hover:text-cyan-500 dark:hover:text-[#00D4FF] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
