import { motion } from "motion/react";
import Scene3D from "./Scene3D";

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export default function Hero({ isActive }: { isActive?: boolean }) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg"
    >
      {/* Immersive 3D Background */}
      <Scene3D />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none opacity-20" />

      {/* Radial light burst on entry */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 3, opacity: [0, 0.15, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-blue/30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >

          {/* Title with clip-path reveal */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-10 tracking-tighter perspective-1000"
          >
            <motion.span
              initial={{ opacity: 1, y: 0, rotateX: 0 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0 }}
              className="inline-block"
            >
              Innovating
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 1, y: 0, rotateX: 0 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0 }}
              className="text-gradient inline-block"
            >
              Healthcare
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 leading-relaxed font-light"
          >
            Your comprehensive software solution partner, guiding you from
            initial conceptualization to the realization of a full-scale
            commercial reality.
          </motion.p>

        </motion.div>
      </div>

      {/* Decorative floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-brand-cyan/40 pointer-events-none"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
