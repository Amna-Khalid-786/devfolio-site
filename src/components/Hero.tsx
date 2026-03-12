import { motion } from "motion/react";
import Scene3D from "./Scene3D";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg">
      {/* Immersive 3D Background */}
      <Scene3D />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-brand-cyan text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Software Division
          </motion.div>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: 20 },
              visible: { opacity: 1, y: 0, rotateX: 0 },
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-10 tracking-tighter perspective-1000"
          >
            Reshaping <br />
            <span className="text-gradient">Healthcare</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 leading-relaxed font-light"
          >
            Your comprehensive software solution partner, guiding you from initial 
            conceptualization to the realization of a full-scale commercial reality.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-brand-blue rounded-full font-bold flex items-center justify-center shadow-[0_0_40px_rgba(0,112,243,0.3)] hover:shadow-[0_0_60px_rgba(0,112,243,0.5)] transition-all"
            >
              Explore Solutions
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass hover:bg-white/10 rounded-full font-bold flex items-center justify-center transition-all"
            >
              Watch Showreel
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
