import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Capabilities from "./components/Capabilities";
import Labs from "./components/Labs";
import Regulatory from "./components/Regulatory";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "motion/react";

const TOTAL_SLIDES = 14;

// --- Unique transition variants per slide ---
const slideTransitions = [
  // 0: Hero — Opening Screen
  {
    initial: { opacity: 0, scale: 0.8, filter: "blur(20px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.2, filter: "blur(20px)", transition: { duration: 0.6 } },
  },
  // 1: About Us — Slide Right
  {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
    exit: { opacity: 0, x: "100vw", transition: { duration: 0.5 } },
  },
  // 2: Expertise — Zoom In
  {
    initial: { opacity: 0, scale: 0.5, z: -500 },
    animate: { opacity: 1, scale: 1, z: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.5, z: 500, transition: { duration: 0.5 } },
  },
  // 3: Services (Intro) — Curtain Open
  {
    initial: { opacity: 0, clipPath: "inset(0% 50% 0% 50%)" },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } },
    exit: { opacity: 0, clipPath: "inset(0% 50% 0% 50%)", transition: { duration: 0.6 } },
  },
  // 4: AI Integration — Flash Open
  {
    initial: { opacity: 0, filter: "brightness(3) contrast(1.5)" },
    animate: { opacity: 1, filter: "brightness(1) contrast(1)", transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  },
  // 5: Medicine & Management — Slide Left
  {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
    exit: { opacity: 0, x: "-100vw", transition: { duration: 0.5 } },
  },
  // 6: Quality Assurance — Zoom Out
  {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
  },
  // 7: Products (Intro) — Closing Screen Vertical
  {
    initial: { opacity: 0, y: "100vh" },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } },
    exit: { opacity: 0, y: "-100vh", transition: { duration: 0.6 } },
  },
  // 8: Care Management — Horizontal Slide
  {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  },
  // 9: Remote Care — Perspective Flip
  {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, rotateY: -90, transition: { duration: 0.5 } },
  },
  // 10: Preventive Care — Soft Scale
  {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6 } },
  },
  // 11: Medical Assistance — Diagonal Slide
  {
    initial: { opacity: 0, x: "-50vw", y: "50vh" },
    animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: "50vw", y: "-50vh", transition: { duration: 0.5 } },
  },
  // 12: Clients — Sliding Screen
  {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: "-100vw", transition: { duration: 0.5 } },
  },
  // 13: Thank You — Closing Curtains
  {
    initial: { opacity: 0, clipPath: "inset(50% 0% 50% 0%)" },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } },
    exit: { opacity: 0, filter: "blur(20px)", transition: { duration: 0.8 } },
  },
];

// Adjust BackgroundMapping to 14 slides
const FullBackgroundMapping = [
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
  Backgrounds.BubblesBG,
];

// ... (rest of App remains similar)

// Content Component imports (to be created)
import * as Content from "./components/AppContent";

const slideComponents = [
  Hero,
  Content.AboutUs,
  Content.Expertise,
  Content.ServicesIntro,
  Content.AIIntegration,
  Content.MedicineManagement,
  Content.QualityAssurance,
  Content.CareManagement,
  Content.RemoteCare,
  Content.PreventiveCare,
  Content.MedicalAssistance,
  Content.ClientsSlide,
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
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const navigateTo = useCallback(
    (target: number) => {
      if (target === currentSlide || isTransitioning) return;
      const clamped = Math.max(0, Math.min(target, TOTAL_SLIDES - 1));
      if (clamped === currentSlide) return;
      setDirection(clamped > currentSlide ? 1 : -1);
      setIsTransitioning(true);
      setShowFlash(true);
      // Small delay for the flash overlay before changing slide
      setTimeout(() => {
        setCurrentSlide(clamped);
        setTimeout(() => setShowFlash(false), 200);
      }, 150);
    },
    [currentSlide, isTransitioning]
  );

  const goToNext = useCallback(() => {
    navigateTo(currentSlide + 1);
  }, [currentSlide, navigateTo]);

  const goToPrev = useCallback(() => {
    navigateTo(currentSlide - 1);
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

  // Wheel/Touch Navigation (throttled)
  useEffect(() => {
    let isThrottled = false;
    let accumulatedDelta = 0;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".overflow-y-auto")) {
        const scrollable = target.closest(".overflow-y-auto") as HTMLElement;
        const isAtTop = scrollable.scrollTop === 0;
        const isAtBottom =
          Math.abs(
            scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight
          ) < 1;

        if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
          return;
        }
      }

      e.preventDefault();

      if (isThrottled) return;

      accumulatedDelta += e.deltaY || e.deltaX;

      const threshold = 50;
      if (Math.abs(accumulatedDelta) > threshold) {
        if (accumulatedDelta > 0) {
          goToNext();
        } else {
          goToPrev();
        }

        isThrottled = true;
        accumulatedDelta = 0;

        setTimeout(() => {
          isThrottled = false;
        }, 1400);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goToNext, goToPrev]);

  // Progress Bar Width
  const progressPercent = (currentSlide / (TOTAL_SLIDES - 1)) * 100;

  // Get the current variant set
  const currentVariants = getDirectionVariants(currentSlide, direction);

  // Get current slide component
  const CurrentSlideComponent = slideComponents[currentSlide];

  return (
    <div className="bg-dark-bg selection:bg-brand-blue/30 selection:text-white relative h-screen w-screen overflow-hidden perspective-1000">
      {/* Dynamic Background Mapping */}
      {(() => {
        const BG = BackgroundMapping[currentSlide] || Backgrounds.BubblesBG;
        return <BG />;
      })()}

      {/* Slide Transition Flash Overlay */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            key="flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] pointer-events-none slide-transition-overlay"
          />
        )}
      </AnimatePresence>

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
              currentSlide={currentSlide}
            />
          </motion.section>
        </AnimatePresence>
      </div>

      {/* Slide Indicators Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <motion.button
            key={i}
            onClick={() => navigateTo(i)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentSlide
                ? "bg-brand-blue w-8"
                : "bg-white/20 hover:bg-white/50 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
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
