// FILE: src/components/Achievements.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Zap, TrendingUp, Users, Gauge, Layers, Code2 } from "lucide-react";

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

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const SCHEMES = {
  cyan:    { topBar: "bg-gradient-to-r from-cyan-400 to-cyan-300 dark:from-[#00D4FF] dark:to-[#00D4FF]/60", metric: "text-cyan-600 dark:text-[#00D4FF]", icon: "bg-cyan-50 dark:bg-[#00D4FF]/10 border-cyan-200 dark:border-[#00D4FF]/25 text-cyan-600 dark:text-[#00D4FF]" },
  orange:  { topBar: "bg-gradient-to-r from-orange-400 to-orange-300 dark:from-[#FF6B35] dark:to-[#FF6B35]/60", metric: "text-orange-600 dark:text-[#FF6B35]", icon: "bg-orange-50 dark:bg-[#FF6B35]/10 border-orange-200 dark:border-[#FF6B35]/25 text-orange-600 dark:text-[#FF6B35]" },
  blue:    { topBar: "bg-gradient-to-r from-blue-400 to-blue-300 dark:from-[#0066FF] dark:to-[#0066FF]/60", metric: "text-blue-600 dark:text-[#0066FF]", icon: "bg-blue-50 dark:bg-[#0066FF]/10 border-blue-200 dark:border-[#0066FF]/25 text-blue-600 dark:text-[#0066FF]" },
  emerald: { topBar: "bg-gradient-to-r from-emerald-400 to-emerald-300 dark:from-emerald-400 dark:to-emerald-400/60", metric: "text-emerald-600 dark:text-emerald-400", icon: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/25 text-emerald-600 dark:text-emerald-400" },
};

const ACHIEVEMENTS = [
  { icon: Zap,       colorKey: "cyan",    metricEnd: 10,  metricSuffix: "K+", metricPrefix: "",  metricUnit: "/ Day",     title: "Outbound Automation Scale",      desc: "Architected LLM-powered pipeline processing 10,000+ personalized email and LinkedIn messages daily at GTMVantage." },
  { icon: TrendingUp,colorKey: "orange",  metricEnd: 35,  metricSuffix: "%",  metricPrefix: "+", metricUnit: "Engagement", title: "AI Personalization Impact",      desc: "Improved outreach engagement rates by 35% through OpenAI + Pinecone-powered lead targeting and message personalization." },
  { icon: Users,     colorKey: "blue",    metricEnd: 50,  metricSuffix: "+",  metricPrefix: "",  metricUnit: "Clients",   title: "Multi-Tenant SaaS Platform",     desc: "Integrated Razorpay billing, webhooks, and plan-based access control for a SaaS platform serving 50+ active paying clients." },
  { icon: Gauge,     colorKey: "emerald", metricEnd: 40,  metricSuffix: "%",  metricPrefix: "",  metricUnit: "Faster",    title: "ERP Performance Optimization",   desc: "Reduced average API response times by 40% through Sequelize query optimization and backend refactoring at DNS Group." },
  { icon: Layers,    colorKey: "cyan",    metricEnd: 40,  metricSuffix: "+",  metricPrefix: "",  metricUnit: "Modules",   title: "Enterprise ERP System",          desc: "Built a comprehensive MERN-based ERP with 40+ modular components supporting finance, HR, and operations for 200+ employees." },
  { icon: Code2,     colorKey: "orange",  metricEnd: 25,  metricSuffix: "+",  metricPrefix: "",  metricUnit: "APIs",      title: "Scalable REST API Architecture", desc: "Designed and shipped 25+ production-ready REST APIs using Node.js and MongoDB serving 1,000+ users at All Friends Studio." },
];

function AchievementCard({ item, index }) {
  const s = SCHEMES[item.colorKey];
  const { count, ref } = useCountUp(item.metricEnd);
  const Icon = item.icon;
  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,212,255,0.12)" }}
      className="relative rounded-2xl overflow-hidden
                 bg-white dark:bg-[#12121A]
                 border border-[#E2E8F0] dark:border-[#1E1E2E]
                 shadow-md dark:shadow-none
                 transition-all duration-300"
    >
      <div className={`h-1 w-full ${s.topBar}`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2.5 rounded-xl border ${s.icon}`}>
            <Icon size={18} />
          </div>
          <div className="text-right">
            <p className={`text-3xl font-black tracking-tight leading-none ${s.metric}`}>
              {item.metricPrefix}{count}{item.metricSuffix}
            </p>
            <p className="text-xs text-slate-400 dark:text-[#8888AA] mt-0.5 font-medium">{item.metricUnit}</p>
          </div>
        </div>
        <h3 className="text-sm font-bold text-slate-900 dark:text-[#F0F0F0] mb-2 leading-snug">{item.title}</h3>
        <p className="text-xs text-slate-500 dark:text-[#8888AA] leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

function SectionTitle({ label, children }) {
  return (
    <motion.div className="mb-10" variants={fadeInUp}>
      <p className="text-xs font-bold tracking-widest text-cyan-600 dark:text-[#00D4FF] uppercase mb-2">[ {label} ]</p>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-[#F0F0F0] tracking-tight">{children}</h2>
      <div className="mt-2 h-0.5 w-12 rounded-full" style={{ background: "linear-gradient(90deg,#00D4FF,#FF6B35)" }} />
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-20 py-20 border-t border-slate-200 dark:border-[#1E1E2E] overflow-hidden bg-[#F8FAFC] dark:bg-[#0A0A0F]">
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <SectionTitle label="Impact">Key Achievements</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, i) => (
              <AchievementCard key={i} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
