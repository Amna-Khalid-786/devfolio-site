import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Capabilities from "./components/Capabilities";
import Labs from "./components/Labs";
import Regulatory from "./components/Regulatory";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "motion/react";

const TOTAL_SLIDES = 15;

// --- Unique transition variants per slide ---
const slideTransitions = [
  // 0: Hero
  {
    initial: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" },
    animate: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
  // 1: Software Team
  {
    initial: { opacity: 0, clipPath: "inset(20% 0% 20% 0%)", scale: 0.9 },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1, transition: { duration: 1.2 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
  // 2: RMT Background
  {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  },
  // 3: Our Company
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  },
  // 4: Pak Facility
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 5: US Facility
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 6: Services Intro
  {
    initial: { opacity: 0, clipPath: "inset(0% 50% 0% 50%)" },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.6 } },
  },
  // 7: AI Integration
  {
    initial: { opacity: 0, clipPath: "inset(0% 50% 0% 50%)" },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.6 } },
  },
  // 8: Medicine & Management
  {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
    exit: { opacity: 0, x: "-100vw", transition: { duration: 0.5 } },
  },
  // 9: Quality Assurance
  {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
  },
  // 10: Products Intro
  {
    initial: { opacity: 0, y: "100vh" },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } },
    exit: { opacity: 0, y: "-100vh", transition: { duration: 0.6 } },
  },
  // 8: Care Management
  {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  },
  // 11: Remote Care
  {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, rotateY: -90, transition: { duration: 0.5 } },
  },
  // 12: Preventive Care
  {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6 } },
  },
  // 13: Medical Assistance
  {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: "-100vw", transition: { duration: 0.5 } },
  },
  // 14: Thank You
  {
    initial: { opacity: 0, clipPath: "inset(50% 0% 50% 0%)" },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  },
];


// Content Component imports
import * as Content from "./components/AppContent";

const slideComponents = [
  Hero,
  Content.SoftwareTeam,
  Content.RMTBackground,
  Content.OurCompany,
  Content.PakFacility,
  Content.USFacility,
  Content.ServicesIntro,
  Content.AIIntegration,
  Content.MedicineManagement,
  Content.QualityAssurance,
  Content.CareManagement,
  Content.RemoteCare,
  Content.PreventiveCare,
  Content.MedicalAssistance,
  Content.ThankYou
];

// Direction-aware variants: swap initial/exit when going backward
function getDirectionVariants(slideIndex: number, direction: number) {
  const base = slideTransitions[slideIndex];
  if (direction >= 0) {
    return base;
  }
  // Going backward: swap initial and exit so it feels like reversing
  return {
    initial: base.exit,
    animate: base.animate,
    exit: base.initial,
  };
}

import * as Backgrounds from "./components/Backgrounds";

const BackgroundMapping = [
  Backgrounds.BubblesBG,
  Backgrounds.TechNetworkBG,
  Backgrounds.FloatingCubesBG,
  Backgrounds.AuroraBG,
  Backgrounds.DNAHelixBG,
  Backgrounds.GridPulseBG,
  Backgrounds.GlowingWavesBG,
  Backgrounds.BubblesBG,
  Backgrounds.TechNetworkBG,
  Backgrounds.FloatingCubesBG,
  Backgrounds.AuroraBG,
  Backgrounds.DNAHelixBG,
  Backgrounds.GridPulseBG,
  Backgrounds.GlowingWavesBG,
  Backgrounds.BubblesBG,
];

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getCategoryRange = (index: number) => {
    if (index < 6) return [0, 5];     // Intro
    if (index < 10) return [6, 9];    // Services
    return [10, 14];                  // Products
  };

  const navigateTo = useCallback(
    (target: number) => {
      if (target === currentSlide || isTransitioning) return;
      const clamped = Math.max(0, Math.min(target, TOTAL_SLIDES - 1));
      if (clamped === currentSlide) return;
      setDirection(clamped > currentSlide ? 1 : -1);
      setIsTransitioning(true);
      setCurrentSlide(clamped);
    },
    [currentSlide, isTransitioning]
  );

  const goToNext = useCallback(() => {
    const [, max] = getCategoryRange(currentSlide);
    if (currentSlide < max) {
      navigateTo(currentSlide + 1);
    }
  }, [currentSlide, navigateTo]);

  const goToPrev = useCallback(() => {
    const [min,] = getCategoryRange(currentSlide);
    if (currentSlide > min) {
      navigateTo(currentSlide - 1);
    }
  }, [currentSlide, navigateTo]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        document.activeElement?.tagName === "SELECT"
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Progress Bar Width
  const progressPercent = (currentSlide / (TOTAL_SLIDES - 1)) * 100;

  // Get the current variant set
  const currentVariants = getDirectionVariants(currentSlide, direction);

  // Get current slide component
  const CurrentSlideComponent = slideComponents[currentSlide];

  const [min, max] = getCategoryRange(currentSlide);
  const categorySlides = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className="bg-dark-bg selection:bg-brand-blue/30 selection:text-white relative h-screen w-screen overflow-hidden perspective-1000">
      {/* Dynamic Background Mapping */}
      {(() => {
        const BG = BackgroundMapping[currentSlide] || Backgrounds.BubblesBG;
        return <BG />;
      })()}


      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-[60]">
        <motion.div
          className="h-full bg-brand-blue origin-left"
          animate={{ width: `${progressPercent}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <Navbar currentSlide={currentSlide} setCurrentSlide={(idx: number) => navigateTo(idx)} />

      {/* Slide Container with AnimatePresence for unique transitions */}
      <div className="h-screen w-screen overflow-hidden flex items-center justify-center perspective-1000">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => setIsTransitioning(false)}
        >
          <motion.section
            key={currentSlide}
            initial={currentVariants.initial}
            animate={currentVariants.animate}
            exit={currentVariants.exit}
            className="w-screen h-screen flex-shrink-0 overflow-hidden flex items-center justify-center relative z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <CurrentSlideComponent
              isActive={true}
              slideActive={true}
            />
          </motion.section>
        </AnimatePresence>
      </div>

      {/* On-screen Navigation Arrows */}
      <AnimatePresence>
        {currentSlide > min && (
          <motion.button
            key="btn-prev"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={goToPrev}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-brand-cyan transition-all cursor-pointer"
          >
            <ChevronLeft size={32} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSlide < max && (
          <motion.button
            key="btn-next"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={goToNext}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-brand-cyan transition-all cursor-pointer"
          >
            <ChevronRight size={32} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide Indicators Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {categorySlides.map((index) => (
          <motion.button
            key={index}
            onClick={() => navigateTo(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
              ? "bg-brand-blue w-8"
              : "bg-white/20 hover:bg-white/50 w-2"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Number Indicator */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50 flex items-baseline gap-1 font-mono"
      >
        <span className="text-2xl font-bold text-brand-blue">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="text-xs text-white/20">/</span>
        <span className="text-xs text-white/20">
          {String(TOTAL_SLIDES).padStart(2, "0")}
        </span>
      </motion.div>
    </div>
  );
}
