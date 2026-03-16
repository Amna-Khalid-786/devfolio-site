import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Activity, Shield } from "lucide-react";
import { MouseEvent } from "react";

export default function Mission({
  currentSlide,
  isActive,
}: {
  currentSlide?: number;
  isActive?: boolean;
}) {
  const slideActive = isActive ?? currentSlide === 1;

  // Premium 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="mission"
      className="w-screen h-screen flex flex-col justify-center items-center bg-dark-bg relative overflow-hidden perspective-1000"
    >
      {/* Expanding glow ring on entry */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          slideActive
            ? { scale: [0, 1.5, 2.5], opacity: [0, 0.3, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-brand-blue/30 pointer-events-none"
      />

      {/* Premium Background Ambient Lights */}
      <motion.div
        animate={{
          opacity: slideActive ? 0.8 : 0,
          scale: slideActive ? [1, 1.1, 1] : 0.8,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full pointer-events-none"
      />

      <div
        className="w-full flex-1 flex flex-col justify-center items-center px-6 relative z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full max-w-5xl mx-auto perspective-1000">
          {/* Main Interactive 3D Slab */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.6, y: 80 }}
            animate={
              slideActive
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.6, y: 80 }
            }
            transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
            className="relative w-full rounded-[3rem] border border-white/10 glass-dark p-12 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.8)] group flex flex-col items-center text-center overflow-visible"
          >
            {/* Glow sweep layer */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden -z-10 bg-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-brand-cyan/5 to-transparent opacity-50" />
            </div>

            {/* Sub-heading tag floating above the surface */}
            <motion.div
              style={{ transform: "translateZ(30px)" }}
              initial={{ opacity: 0, y: -20 }}
              animate={
                slideActive
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -20 }
              }
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={slideActive ? { width: 48 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="h-[1px] bg-brand-cyan"
              />
              <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-xs drop-shadow-md">
                Our Mission
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={slideActive ? { width: 48 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="h-[1px] bg-brand-cyan"
              />
            </motion.div>

            {/* Epic Typography lifted aggressively off the card */}
            <motion.h2
              style={{ transform: "translateZ(80px)" }}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={
                slideActive
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.8 }
              }
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8 text-white drop-shadow-[0_20px_40px_rgba(0,112,243,0.3)]"
            >
              Empowering Clients <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                Digital Revolution
              </span>
            </motion.h2>

            {/* Paragraph suspended in mid-3D space */}
            <motion.p
              style={{ transform: "translateZ(40px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={
                slideActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mb-12"
            >
              Our software division is at the forefront of healthcare
              innovation, offering a comprehensive suite of services designed to
              address the evolving needs of healthcare organizations worldwide.
            </motion.p>

            {/* Premium Stats floating off the base */}
            <motion.div
              style={{ transform: "translateZ(60px)" }}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={
                slideActive
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.8, y: 30 }
              }
              transition={{ delay: 0.8, duration: 0.7, type: "spring" }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-2xl px-8 py-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/30"
                >
                  <Activity className="w-6 h-6 text-brand-cyan" />
                </motion.div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white leading-none mb-1">
                    1ms
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-cyan font-bold">
                    Biometric Sync
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-16 bg-white/10" />

              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center border border-brand-blue/30"
                >
                  <Shield className="w-6 h-6 text-brand-blue" />
                </motion.div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white leading-none mb-1">
                    AES-256
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">
                    Security Level
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
