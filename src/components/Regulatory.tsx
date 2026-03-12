import { motion } from "motion/react";
import { FileText, Shield, CheckCircle, Lock } from "lucide-react";

const standards = [
  {
    code: "FDA 21 CFR 11",
    title: "Electronic Records",
    desc: "Compliance for electronic signatures and data integrity in clinical environments.",
    icon: FileText
  },
  {
    code: "EU MDR Annex IX",
    title: "European Regulation",
    desc: "Conformity assessment for software as a medical device in the European market.",
    icon: Shield
  },
  {
    code: "IEC 62304",
    title: "Lifecycle Processes",
    desc: "International standard for medical device software lifecycle management.",
    icon: CheckCircle
  },
  {
    code: "ISO 13485",
    title: "Quality Management",
    desc: "Comprehensive quality system for the design and manufacture of medical devices.",
    icon: Lock
  }
];

export default function Regulatory() {
  return (
    <section className="py-32 bg-dark-surface relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter"
          >
            The <span className="text-gradient">Vault</span> of Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-white/40 text-lg font-light leading-relaxed"
          >
            We don't just follow standards; we set them. Our regulatory 
            framework is built into the very DNA of our software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((std, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative perspective-1000"
            >
              <div className="h-full p-10 rounded-[2.5rem] glass hover:bg-white/[0.06] transition-all duration-500 preserve-3d group-hover:rotate-x-12">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8 group-hover:bg-brand-blue/20 transition-colors">
                  <std.icon className="text-brand-blue w-7 h-7" />
                </div>
                
                <div className="text-brand-cyan text-[10px] font-bold tracking-[0.3em] mb-4 uppercase opacity-60">
                  {std.code}
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-white transition-colors">
                  {std.title}
                </h3>
                
                <p className="text-white/30 text-sm leading-relaxed font-light">
                  {std.desc}
                </p>
                
                {/* Decorative Corner */}
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/5 rounded-tr-xl group-hover:border-brand-blue/30 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
