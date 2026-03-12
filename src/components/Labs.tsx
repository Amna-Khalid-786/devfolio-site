import { motion } from "motion/react";
import { Cpu, Globe, Zap, Database, ArrowUpRight } from "lucide-react";

const labsFeatures = [
  {
    title: "Care Management",
    desc: "EHR solutions and AI automation tools to streamline medical data and boost clinical productivity.",
    icon: Database
  },
  {
    title: "Remote Care",
    desc: "Telehealth platforms and real-time monitoring solutions for proactive patient management.",
    icon: Globe
  },
  {
    title: "Postop & Preventive",
    desc: "WellBuddy recovery support and preventive care monitoring for long-term well-being.",
    icon: Zap
  },
  {
    title: "Medical Assistance",
    desc: "Clinical decision support and precision medicine tailored to individual genetic profiles.",
    icon: Cpu
  }
];

export default function Labs() {
  return (
    <section id="labs" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-brand-cyan" />
              <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-[10px]">Innovation Hub</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter"
            >
              Product <span className="text-gradient">Solutions</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-white/40 font-light leading-relaxed mb-12"
            >
              Our suite of medical products ranges from care management systems 
              to intelligent remote monitoring and clinical decision support.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {labsFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                      <feature.icon className="text-brand-cyan w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-display font-bold">{feature.title}</h4>
                  </div>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group perspective-1000"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4 preserve-3d group-hover:rotate-y-6 transition-transform duration-700">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 relative overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/lab/800/1000" 
                  alt="Lab" 
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-4 border border-white/10">Active Research</div>
                  <h3 className="text-4xl font-display font-bold text-white mb-4">Project <br />Neuro-Sync</h3>
                  <button className="flex items-center gap-2 text-brand-cyan font-bold group/btn">
                    View Case Study <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating Data Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass p-8 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="text-brand-cyan font-display font-bold text-3xl mb-1">0.04ms</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30">Latency Threshold</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
