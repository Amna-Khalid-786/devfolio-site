import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Brain, ShieldCheck, Layout, Terminal, Palette, Microscope } from "lucide-react";
import { useRef } from "react";

const capabilities = [
  {
    title: "AI Integration",
    desc: "Seamlessly embed artificial intelligence into clinical workflows, assistants, and predictive analytics.",
    icon: Brain,
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Interface Engineering",
    desc: "Create high-performance mobile, desktop, and web applications with user-centric medical design.",
    icon: Layout,
    color: "from-emerald-600 to-teal-500"
  },
  {
    title: "Medicine & Management",
    desc: "Advanced solutions for medical imaging, research, drug discovery, and billing software.",
    icon: Microscope,
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Remote Care Systems",
    desc: "Remote patient monitoring dashboards and intelligent appointment management platforms.",
    icon: Terminal,
    color: "from-orange-600 to-red-500"
  },
  {
    title: "Data-Driven Solutions",
    desc: "Leveraging data science, AI, and ML for actionable insights and improved patient outcomes.",
    icon: Palette,
    color: "from-indigo-600 to-blue-500"
  },
  {
    title: "Quality Assurance",
    desc: "Comprehensive SQA, security testing, and automated validation for medical software reliability.",
    icon: ShieldCheck,
    color: "from-cyan-600 to-blue-500"
  }
];

function TiltCard({ cap, index }: { cap: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full glass rounded-[2.5rem] p-8 cursor-pointer group perspective-1000"
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500`}>
          <cap.icon className="text-white w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-cyan transition-colors">
          {cap.title}
        </h3>
        
        <p className="text-white/40 text-sm leading-relaxed font-light">
          {cap.desc}
        </p>
        
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">Expertise</span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
            <span className="text-white text-xs">→</span>
          </div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 mb-2"
          >
            <div className="w-12 h-[1px] bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-[10px]">Capabilities</span>
            <div className="w-12 h-[1px] bg-brand-blue" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter"
          >
            The Architecture <br />
            <span className="text-white/20">of Excellence</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl text-white/40 text-lg font-light leading-relaxed"
          >
            We deploy multi-disciplinary teams to solve the most critical 
            engineering challenges in modern healthcare.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <TiltCard key={i} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
