import { motion } from "motion/react";
import { Database, Globe, Zap, Cpu, ShieldCheck, Brain } from "lucide-react";

const products = [
  {
    num: "01",
    name: "NeuroSync EHR",
    category: "Care Management",
    desc: "Next-gen Electronic Health Records with AI-driven automation and clinical decision support.",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-400",
    color: "#0070f3",
  },
  {
    num: "02",
    name: "TeleTrack Pro",
    category: "Remote Care",
    desc: "Real-time remote patient monitoring with IoT biometric sensors and telehealth integration.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-400",
    color: "#10b981",
  },
  {
    num: "03",
    name: "WellBuddy",
    category: "Postop & Preventive",
    desc: "Post-op recovery companion with smart reminders and preventive care adherence tracking.",
    icon: Zap,
    gradient: "from-orange-500 to-yellow-400",
    color: "#f97316",
  },
  {
    num: "04",
    name: "ClinAssist AI",
    category: "Medical Assistance",
    desc: "AI clinical decision support integrating lab results, imaging data, and patient history.",
    icon: Cpu,
    gradient: "from-purple-500 to-pink-400",
    color: "#9333ea",
  },
  {
    num: "05",
    name: "DataVault Med",
    category: "Data & Analytics",
    desc: "HIPAA-compliant medical data lake for population health analytics and research dashboards.",
    icon: Database,
    gradient: "from-indigo-500 to-blue-400",
    color: "#6366f1",
  },
  {
    num: "06",
    name: "HealthGuard",
    category: "Security & Compliance",
    desc: "AES-256 encrypted data protection with automated HIPAA audit trails and compliance monitoring.",
    icon: ShieldCheck,
    gradient: "from-cyan-500 to-blue-400",
    color: "#06b6d4",
  },
];

export default function Labs({ isActive }: { isActive?: boolean }) {
  return (
    <section
      id="labs"
      className="h-screen w-screen flex flex-col justify-center bg-dark-bg relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full h-full flex flex-col justify-center overflow-hidden px-6 md:px-16 pt-24">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="h-[1px] bg-brand-cyan"
            />
            <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-[10px]">
              Our Products
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="h-[1px] bg-brand-cyan"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-4">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Healthcare
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-light leading-relaxed">
            A complete suite of medical software products — from AI-powered EHR
            to enterprise-grade security.
          </p>
        </motion.div>

        {/* Product List — staggered from right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-6xl mx-auto w-full">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 120, rotateZ: 3 }}
              animate={{ opacity: 1, x: 0, rotateZ: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              className="relative group flex items-start gap-5 p-6 border-b border-white/5 last:border-b-0
                         md:even:border-l md:border-r-0 lg:border-r lg:last:border-r-0 
                         hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
            >
              {/* Left: Number + Colored vertical accent */}
              <div className="flex flex-col items-center gap-2 pt-1 flex-shrink-0">
                <motion.span
                  className="text-xs font-black font-mono tabular-nums"
                  style={{ color: p.color }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                >
                  {p.num}
                </motion.span>
                <motion.div
                  className="w-[2px] rounded-full"
                  style={{ background: p.color }}
                  initial={{ height: 0 }}
                  animate={{ height: 40 }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                />
              </div>

              {/* Right: Icon + Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: i * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <p.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-display font-bold text-white leading-tight group-hover:text-brand-cyan transition-colors duration-300">
                      {p.name}
                    </h3>
                    <span
                      className="text-[10px] uppercase tracking-widest font-bold"
                      style={{ color: p.color, opacity: 0.7 }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {p.desc}
                </p>
              </div>

              {/* Hover bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"
                style={{
                  background: `linear-gradient(to right, ${p.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
