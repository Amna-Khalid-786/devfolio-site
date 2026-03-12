import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Activity, Zap, Shield, Cpu } from "lucide-react";

export default function Mission() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter">
                Empowering Clients <br />
                <span className="text-brand-blue">Digital Revolution</span>
              </h2>
              <p className="text-xl text-white/40 font-light leading-relaxed mb-12">
                Our software division is at the forefront of healthcare innovation, 
                offering a comprehensive suite of services designed to address the 
                evolving needs of healthcare organizations worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Activity, label: "Biometric Sync", val: "1ms" },
                  { icon: Shield, label: "Security", val: "AES-256" }
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl">
                    <item.icon className="text-brand-cyan w-6 h-6 mb-3" />
                    <div className="text-2xl font-display font-bold">{item.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual - 3D Floating Elements */}
          <div className="lg:col-span-7 relative h-[600px] perspective-1000">
            <motion.div 
              style={{ rotateY: rotate }}
              className="relative w-full h-full preserve-3d"
            >
              {/* Central Core */}
              <motion.div 
                style={{ y: y1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 glass rounded-[3rem] flex items-center justify-center shadow-[0_0_100px_rgba(0,112,243,0.2)]"
              >
                <div className="w-32 h-32 bg-brand-blue rounded-full blur-3xl animate-pulse opacity-50" />
                <Cpu className="w-16 h-16 text-white relative z-10" />
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute top-1/4 right-10 w-40 h-40 glass rounded-3xl flex items-center justify-center rotate-12"
              >
                <Zap className="w-10 h-10 text-brand-cyan" />
              </motion.div>

              <motion.div 
                style={{ y: y1, x: -50 }}
                className="absolute bottom-1/4 left-10 w-48 h-48 glass rounded-[2rem] flex items-center justify-center -rotate-12"
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-brand-blue">99.9%</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30">Uptime</div>
                </div>
              </motion.div>

              {/* Decorative Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path
                  d="M100,100 Q300,300 500,100"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  strokeDasharray="10,10"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0070f3" />
                    <stop offset="100%" stopColor="#00dfd8" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
