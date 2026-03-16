import { motion } from "motion/react";
import {
  FileText,
  Shield,
  CheckCircle,
  Lock,
  Globe,
  Award,
} from "lucide-react";
import { useState } from "react";

const standards = [
  {
    code: "FDA 21 CFR 11",
    title: "Electronic Records",
    desc: "Compliance for electronic signatures and data integrity in all clinical environments.",
    icon: FileText,
    gradient: "from-blue-600 to-cyan-500",
    color: "#0070f3",
    back: "Covers audit trails, electronic signatures, access controls, and data integrity for FDA-regulated systems.",
  },
  {
    code: "EU MDR Annex IX",
    title: "European Regulation",
    desc: "Conformity assessment for software as a medical device in the EU market.",
    icon: Globe,
    gradient: "from-emerald-600 to-teal-500",
    color: "#10b981",
    back: "Ensures software medical devices meet essential safety requirements under EU 2017/745 regulation.",
  },
  {
    code: "IEC 62304",
    title: "Software Lifecycle",
    desc: "International standard for medical device software lifecycle processes.",
    icon: CheckCircle,
    gradient: "from-purple-600 to-pink-500",
    color: "#9333ea",
    back: "Defines processes, activities, and tasks for developing and maintaining medical device software safely.",
  },
  {
    code: "ISO 13485",
    title: "Quality Management",
    desc: "Comprehensive quality system for design and manufacture of safe medical devices.",
    icon: Award,
    gradient: "from-orange-600 to-yellow-500",
    color: "#f97316",
    back: "Specifies quality management system requirements for organizations in the medical device industry.",
  },
  {
    code: "HIPAA Security",
    title: "Data Protection",
    desc: "Administrative, physical, and technical safeguards for protected health information.",
    icon: Lock,
    gradient: "from-cyan-600 to-blue-500",
    color: "#06b6d4",
    back: "Mandates encryption, access controls, audit logs, and breach notification for all covered entities.",
  },
  {
    code: "ISO 27001",
    title: "Info Security",
    desc: "Global standard for establishing and maintaining information security management systems.",
    icon: Shield,
    gradient: "from-indigo-600 to-purple-500",
    color: "#6366f1",
    back: "Provides a framework of policies and procedures to manage information security risks systematically.",
  },
];

function FlipCard({
  std,
  index,
}: {
  std: (typeof standards)[0];
  index: number;
  key?: string | number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
        damping: 14,
      }}
      className="relative aspect-[3/4] w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Flip Container */}
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* --- FRONT --- */}
        <div
          className="absolute inset-0 rounded-2xl glass-dark border border-white/10 p-7 flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="flex items-start justify-between">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.4,
              }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${std.gradient} flex items-center justify-center shadow-lg`}
            >
              <std.icon className="w-7 h-7 text-white" />
            </motion.div>
            <span
              className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full border"
              style={{ color: std.color, borderColor: std.color + "40" }}
            >
              {std.code}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              {std.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              {std.desc}
            </p>
          </div>

          <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest">
            Hover to reveal →
          </div>

          <div
            className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-10"
            style={{ background: std.color }}
          />
        </div>

        {/* --- BACK --- */}
        <div
          className="absolute inset-0 rounded-2xl border p-6 flex flex-col justify-center items-center text-center overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, ${std.color}20, ${std.color}08)`,
            borderColor: std.color + "50",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-25"
            style={{ background: std.color }}
          />
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${std.gradient} flex items-center justify-center shadow-xl mb-4 relative z-10`}
          >
            <std.icon className="w-8 h-8 text-white" />
          </div>
          <span
            className="text-[10px] font-black uppercase tracking-widest mb-2 relative z-10"
            style={{ color: std.color }}
          >
            {std.code}
          </span>
          <p className="text-sm text-white/80 leading-relaxed font-light relative z-10">
            {std.back}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Regulatory({ isActive }: { isActive?: boolean }) {
  return (
    <section
      id="regulatory"
      className="h-screen w-screen flex flex-col justify-center bg-dark-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full h-full flex flex-col justify-center px-6 md:px-16 pt-24 overflow-hidden">
        {/* Centered Header — zoom out entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="h-[1px] bg-brand-blue"
            />
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-[10px]">
              Compliance
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="h-[1px] bg-brand-blue"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-4">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Vault
            </span>{" "}
            of Trust
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light leading-relaxed">
            We don't just follow standards — we build them in. Hover each card
            to explore our regulatory framework.
          </p>
        </motion.div>

        {/* 3D Flip Cards Grid — zoom out stagger */}
        <div className="w-full max-w-[90vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto">
          {standards.map((std, i) => (
            <FlipCard key={i} std={std} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
