import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Capabilities from "./components/Capabilities";
import Labs from "./components/Labs";
import Regulatory from "./components/Regulatory";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "motion/react";

const TOTAL_SLIDES = 20;

// --- Unique transition variants per slide ---
const slideTransitions = [
  // 0: Hero
  {
    initial: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" },
    animate: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
  // 1: CEO Intro
  {
    initial: { opacity: 0, clipPath: "circle(0% at 50% 50%)", scale: 0.95 },
    animate: { opacity: 1, clipPath: "circle(100% at 50% 50%)", scale: 1, transition: { duration: 1.2 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
  // 2: Software Team
  {
    initial: { opacity: 0, clipPath: "inset(20% 0% 20% 0%)", scale: 0.9 },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1, transition: { duration: 1.2 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
  // 3: RMT Background
  {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  },
  // 4: Our Company
  {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  },
  // 5: Pak Facility
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 6: US Facility
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 7: Animated Map
  {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0, transition: { duration: 1 } },
    exit: { opacity: 0, rotateX: -90, transition: { duration: 0.6 } },
  },
  // 8: Services Intro
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 9: Services Categories (Selection)
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 10: Cat 1 Detail
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 11: Cat 2 Detail
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 12: Cat 3 Detail
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 13: Cat 4 Detail
  {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
  },
  // 14: Products Intro
  {
    initial: { opacity: 0, y: "100vh" },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] as [number, number, number, number] } },
    exit: { opacity: 0, y: "-100vh", transition: { duration: 0.6 } },
  },
  // 15: Care Management
  {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  },
  // 16: Remote Care
  {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, rotateY: -90, transition: { duration: 0.5 } },
  },
  // 17: Preventive Care
  {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6 } },
  },
  // 18: Medical Assistance
  {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: "-100vw", transition: { duration: 0.5 } },
  },
  // 19: Thank You
  {
    initial: { opacity: 0, clipPath: "inset(50% 0% 50% 0%)" },
    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1, ease: [0.77, 0, 0.175, 1] as [number, number, number, number] } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  },
];


// Content Component imports
import * as Content from "./components/AppContent";

const slideComponents = [
  Hero,
  Content.CEOIntro,
  Content.SoftwareTeam,
  Content.RMTBackground,
  Content.OurCompany,
  Content.PakFacility,
  Content.USFacility,
  Content.AnimatedMap,
  Content.ServicesIntro,
  Content.ServicesCategories,
  Content.Cat1Details,
  Content.Cat2Details,
  Content.Cat3Details,
  Content.Cat4Details,
  Content.ProductsIntro,
  Content.CareManagement,
  Content.RemoteCare,
  Content.PreventiveCare,
  Content.MedicalAssistance,
  Content.ThankYou
];

// Direction-aware variants: swap initial/exit when going backward
function getDirectionVariants(slideIndex: number, direction: number) {
  const base = slideTransitions[slideIndex];
  if (!base) return slideTransitions[0];
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
  Backgrounds.AuroraBG,
  Backgrounds.TechNetworkBG,
  Backgrounds.FloatingCubesBG,
  Backgrounds.AuroraBG,
  Backgrounds.DNAHelixBG,
  Backgrounds.GridPulseBG,
  Backgrounds.FloatingCubesBG,
  Backgrounds.AuroraBG, // Services Intro
  Backgrounds.CyberGridBG, // Categories
  Backgrounds.TechNetworkBG, // Cat 1
  Backgrounds.FloatingCubesBG, // Cat 2
  Backgrounds.AuroraBG, // Cat 3
  Backgrounds.DNAHelixBG, // Cat 4
  Backgrounds.AuroraBG, // Products Intro
  Backgrounds.DNAHelixBG,
  Backgrounds.GridPulseBG,
  Backgrounds.GlowingWavesBG,
  Backgrounds.BubblesBG,
  Backgrounds.AuroraBG,
];

import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cooldown for scroll/wheel navigation
  const lastScrollTime = useRef(0);
  const SCROLL_COOLDOWN = 1000;

  const isServices = currentSlide >= 8 && currentSlide <= 13;

  const getCategoryRange = (index: number) => {
    if (index < 8) return [0, 7];     // Intro
    if (index < 14) return [8, 13];    // Services
    return [14, 19];                  // Products
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
        if (isServices && (e.key === "ArrowRight")) return; // Disable horizontal in services
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (isServices && (e.key === "ArrowLeft")) return; // Disable horizontal in services
        e.preventDefault();
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, currentSlide, isServices]);

  // Wheel/Scroll Navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;

      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          goToNext();
        } else {
          goToPrev();
        }
        lastScrollTime.current = now;
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
              onSelect={currentSlide === 9 ? (idx: number) => navigateTo(idx) : undefined}
            />
          </motion.section>
        </AnimatePresence>
      </div>

      {/* On-screen Navigation Arrows */}
      <AnimatePresence>
        {currentSlide > min && (
          <motion.button
            key="btn-prev"
            initial={isServices ? { opacity: 0, y: -20, x: "-50%" } : { opacity: 0, x: -20, y: "-50%" }}
            animate={isServices ? { opacity: 1, y: 0, x: "-50%" } : { opacity: 1, x: 0, y: "-50%" }}
            exit={isServices ? { opacity: 0, y: -20, x: "-50%" } : { opacity: 0, x: -20, y: "-50%" }}
            onClick={goToPrev}
            className={`fixed z-50 p-4 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-brand-cyan transition-all cursor-pointer ${isServices
                ? "left-1/2 top-24"
                : "left-8 top-1/2"
              }`}
          >
            {isServices ? <ChevronUp size={32} /> : <ChevronLeft size={32} />}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentSlide < max && (
          <motion.button
            key="btn-next"
            initial={isServices ? { opacity: 0, y: 20, x: "-50%" } : { opacity: 0, x: 20, y: "-50%" }}
            animate={isServices ? { opacity: 1, y: 0, x: "-50%" } : { opacity: 1, x: 0, y: "-50%" }}
            exit={isServices ? { opacity: 0, y: 20, x: "-50%" } : { opacity: 0, x: 20, y: "-50%" }}
            onClick={goToNext}
            className={`fixed z-50 p-4 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-brand-cyan transition-all cursor-pointer ${isServices
                ? "left-1/2 bottom-20"
                : "right-8 top-1/2"
              }`}
          >
            {isServices ? <ChevronDown size={32} /> : <ChevronRight size={32} />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide Indicators Navigation - Moved to side for services */}
      <div className={`fixed z-50 transition-all duration-700 flex ${isServices
          ? "right-8 top-1/2 -translate-y-1/2 flex-col gap-4"
          : "bottom-8 left-1/2 -translate-x-1/2 gap-3"
        }`}>
        {categorySlides.map((index) => (
          <motion.button
            key={index}
            onClick={() => navigateTo(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all duration-500 ${isServices ? "w-2" : "h-2"
              } ${index === currentSlide
                ? `bg-brand-blue ${isServices ? "h-8" : "w-8"}`
                : `bg-white/20 hover:bg-white/50 ${isServices ? "h-2" : "w-2"}`
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
        className={`fixed z-50 flex items-baseline gap-1 font-mono transition-all duration-700 ${isServices ? "bottom-24 right-8 scale-75 opacity-50" : "bottom-8 right-8"
          }`}
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
