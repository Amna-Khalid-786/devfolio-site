import { motion } from "motion/react";

const navItems = [
  { name: "Intro", index: 0 },
  { name: "Services", index: 8 },
  { name: "Product", index: 16 },
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

export default function Navbar({ currentSlide = 0, setCurrentSlide }: { currentSlide?: number, setCurrentSlide?: (i: number) => void }) {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-full md:w-auto px-4 md:px-0"
    >
      <div className={`flex items-center justify-center gap-4 md:gap-8 px-6 md:px-10 py-3 md:py-4 rounded-full transition-all duration-700 glass-dark border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
        {navItems.map((item) => (
          <motion.button
            key={item.name}
            onClick={() => setCurrentSlide && setCurrentSlide(item.index)}
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.05 }}
            className={`text-sm font-bold tracking-widest uppercase transition-colors relative group focus:outline-none ${
              (item.name === "Intro" && currentSlide < 8) ||
              (item.name === "Services" && currentSlide >= 8 && currentSlide < 16) ||
              (item.name === "Product" && currentSlide >= 16)
                ? "text-brand-cyan drop-shadow-[0_0_8px_rgba(0,223,216,0.6)]" 
                : "text-white/50 hover:text-white"
            }`}
          >
            {item.name}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-cyan transition-all ${
              ((item.name === "Intro" && currentSlide < 8) ||
              (item.name === "Services" && currentSlide >= 8 && currentSlide < 16) ||
              (item.name === "Product" && currentSlide >= 16)) ? "w-full shadow-[0_0_10px_rgba(0,223,216,1)]" : "w-0 group-hover:w-full"
            }`} />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
