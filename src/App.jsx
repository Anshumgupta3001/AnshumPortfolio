// FILE: src/App.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Experience  from "./components/Experience";
import Achievements from "./components/Achievements";
import Projects    from "./components/Projects";
import Skills      from "./components/Skills";
import Leadership  from "./components/Leadership";
import Education   from "./components/Education";
import Contact     from "./components/Contact";

export default function App() {
  const [dark, setDark]               = useState(true);
  const [showTop, setShowTop]         = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero","about","experience","achievements","projects","skills","leadership","education","contact"];
    const obs = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0A0A0F] text-slate-900 dark:text-[#F0F0F0] transition-colors duration-300">
        <Navbar dark={dark} setDark={setDark} activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Achievements />
          <Projects />
          <Skills />
          <Leadership />
          <Education />
          <Contact />
        </main>
        <footer className="border-t border-slate-200 dark:border-[#1E1E2E] py-6 text-center text-xs text-slate-400 dark:text-[#8888AA]">
          <p>© 2025 Anshum Gupta · <span className="text-cyan-600 dark:text-[#00D4FF]">Engineered from scratch</span>, deployed with intent.</p>
        </footer>

        <AnimatePresence>
          {showTop && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-8 right-6 z-50 p-3 rounded-full text-white shadow-lg"
              style={{ background: "linear-gradient(135deg,#00D4FF,#0066FF)" }}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
