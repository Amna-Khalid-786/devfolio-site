import { motion } from "motion/react";
import { Activity, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Solutions", href: "#solutions" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Labs", href: "#labs" },
  { name: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Sections to observe
    const sections = ["home", "solutions", "capabilities", "labs", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[90%] max-w-5xl ${
        scrolled ? "top-4" : "top-8"
      }`}
    >
      <div className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-700 ${
        scrolled ? "glass-dark shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10" : "bg-transparent border-transparent"
      } border`}>
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-3"
        >
          <img 
            src="/assets/logo.png" 
            alt="ReviveMed Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-display font-bold tracking-tighter">
            REVIVE<span className="text-brand-blue">MED</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className={`text-sm font-medium transition-colors relative group ${
                activeSection === item.href.replace("#", "") 
                  ? "text-brand-blue" 
                  : "text-white/70 hover:text-brand-blue"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-blue transition-all ${
                activeSection === item.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </motion.a>
          ))}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,112,243,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-brand-blue rounded-full text-sm font-semibold transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-dark-surface border-b border-white/10 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  activeSection === item.href.replace("#", "") 
                    ? "text-brand-blue" 
                    : "text-white/70 hover:text-brand-blue"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full py-3 bg-brand-blue rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
