// FILE: src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",        href: "#about",        id: "about" },
  { label: "Experience",   href: "#experience",   id: "experience" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Projects",     href: "#projects",     id: "projects" },
  { label: "Skills",       href: "#skills",       id: "skills" },
  { label: "Education",    href: "#education",    id: "education" },
  { label: "Contact",      href: "#contact",      id: "contact" },
];

export default function Navbar({ dark, setDark, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        className="absolute inset-0 bg-white/90 dark:bg-[#0A0A0F]/90 backdrop-blur-md border-b border-slate-200/50 dark:border-[#1E1E2E]/50"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("#hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-black text-xl tracking-tight text-slate-900 dark:text-[#F0F0F0]"
        >
          AG<span className="text-cyan-500 dark:text-[#00D4FF]">.</span>
        </motion.button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = activeSection === l.id;
            return (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  active
                    ? "text-cyan-600 dark:text-[#00D4FF]"
                    : "text-slate-500 dark:text-[#8888AA] hover:text-slate-900 dark:hover:text-[#F0F0F0]"
                }`}
              >
                {l.label}
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-cyan-500 dark:bg-[#00D4FF]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <motion.button
            onClick={() => setDark(!dark)}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 p-2 rounded-full bg-slate-100 dark:bg-[#1E1E2E] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-300 dark:hover:border-[#00D4FF]/40 transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} className="text-[#00D4FF]" /> : <Moon size={16} className="text-slate-600" />}
          </motion.button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full bg-slate-100 dark:bg-[#1E1E2E]">
            {dark ? <Sun size={16} className="text-[#00D4FF]" /> : <Moon size={16} className="text-slate-600" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full bg-slate-100 dark:bg-[#1E1E2E] text-slate-700 dark:text-[#F0F0F0]">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#12121A] border-b border-slate-200 dark:border-[#1E1E2E]"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === l.id
                      ? "text-cyan-600 dark:text-[#00D4FF] bg-cyan-50 dark:bg-[#00D4FF]/10"
                      : "text-slate-700 dark:text-[#8888AA] hover:text-cyan-600 dark:hover:text-[#00D4FF]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
