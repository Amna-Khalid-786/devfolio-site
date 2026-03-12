import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Capabilities from "./components/Capabilities";
import Labs from "./components/Labs";
import Regulatory from "./components/Regulatory";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-dark-bg min-h-screen selection:bg-brand-blue/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Mission />
        <Capabilities />
        <Labs />
        <Regulatory />
        <Contact />
      </main>

      {/* Custom Cursor or other global effects could go here */}
    </div>
  );
}

