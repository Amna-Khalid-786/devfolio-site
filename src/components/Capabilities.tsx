import { motion } from "motion/react";
import {
  Brain,
  ShieldCheck,
  Layout,
  Terminal,
  Palette,
  Microscope,
} from "lucide-react";

const capabilities = [
  {
    title: "AI Integration",
    desc: "Seamlessly embed artificial intelligence into clinical workflows, assistants, and predictive analytics.",
    icon: Brain,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Interface Engineering",
    desc: "Create high-performance mobile, desktop, and web applications with user-centric medical design.",
    icon: Layout,
    color: "from-emerald-600 to-teal-500",
  },
  {
    title: "Medicine & Management",
    desc: "Advanced solutions for medical imaging, research, drug discovery, and billing software.",
    icon: Microscope,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Remote Care Systems",
    desc: "Remote patient monitoring dashboards and intelligent appointment management platforms.",
    icon: Terminal,
    color: "from-orange-600 to-red-500",
  },
  {
    title: "Data-Driven Solutions",
    desc: "Leveraging data science, AI, and ML for actionable insights and improved patient outcomes.",
    icon: Palette,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Quality Assurance",
    desc: "Comprehensive SQA, security testing, and automated validation for medical software reliability.",
    icon: ShieldCheck,
    color: "from-cyan-600 to-blue-500",
  },
];

function EnvelopeCard({ cap, index }: { cap: any; index: number; key?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -120, rotateZ: -8, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, rotateZ: 0, scale: 1 }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        type: "spring",
        stiffness: 70,
        damping: 14,
      }}
      className="relative w-full aspect-[3/4] group perspective-1000 cursor-pointer"
    >
      {/* 3D Envelope Container */}
      <div className="w-full h-full relative preserve-3d group-hover:rotate-x-12 transition-transform duration-700 ease-in-out">
        {/* Shadow Drop */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/60 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Back of Envelope */}
        <div className="absolute inset-0 bg-dark-bg/80 border border-white/5 rounded-2xl shadow-inner z-0 overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* The Letter (Content inside) */}
        <div
          className="absolute inset-2 bg-dark-surface border border-white/10 rounded-xl p-6 flex flex-col justify-between z-10 
                        transform-gpu origin-bottom transition-all duration-700 ease-in-out
                        group-hover:-translate-y-16 group-hover:z-30 group-hover:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col items-center text-center mt-2">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${cap.color} flex items-center justify-center mb-4 shadow-lg`}
            >
              <cap.icon className="text-white w-6 h-6" />
            </motion.div>
            <h3 className="text-lg font-display font-bold mb-2 leading-tight">
              {cap.title}
            </h3>
            <p className="text-[11px] text-white/50 leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden line-clamp-4">
              {cap.desc}
            </p>
          </div>

          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue">
              View Details
            </span>
          </div>
        </div>

        {/* Envelope Front Bottom Fold */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3 bg-white/[0.02] backdrop-blur-md rounded-b-2xl z-20"
          style={{
            clipPath:
              "polygon(0% 100%, 100% 100%, 100% 30%, 50% 0%, 0% 30%)",
          }}
        >
          <div className="absolute inset-0 border border-white/10 rounded-b-2xl" />
        </div>

        {/* Envelope Top Flap (The seal) */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 bg-white/[0.05] backdrop-blur-xl border-x border-t border-white/10 rounded-t-2xl z-40 
                        origin-top transform-gpu transition-all duration-700 ease-in-out group-hover:rotate-x-[180deg] group-hover:opacity-0"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
          }}
        >
          {/* Seal */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-blue/20 border border-brand-cyan/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-brand-blue opacity-50 blur-sm" />
          </div>

          {/* Title on Flap (Visible when closed) */}
          <div className="absolute top-10 left-0 right-0 text-center">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
              {cap.title}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Capabilities({ isActive }: { isActive?: boolean }) {
  return (
    <section
      id="capabilities"
      className="h-screen w-screen flex flex-col justify-center bg-dark-bg relative overflow-hidden py-10"
    >
      <div className="w-full px-6 flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          {/* Header wipe-reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-2"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-[1px] bg-brand-blue"
            />
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-[10px]">
              Capabilities
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-[1px] bg-brand-blue"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
          >
            The Architecture <br />
            <span className="text-white/20">of Excellence</span>
          </motion.h2>
        </div>

        {/* 6 Cards — cascading stagger from left */}
        <div className="w-full max-w-[90vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto">
          {capabilities.map((cap, i) => (
            <EnvelopeCard key={i} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
