import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Linkedin,
  Github,
  Activity,
} from "lucide-react";

export default function Contact({ isActive }: { isActive?: boolean }) {
  return (
    <section
      id="contact"
      className="h-screen w-screen flex flex-col bg-dark-bg relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 pt-20 pb-6 relative z-10 min-h-0">
        {/* Centered Header — slides up */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 flex-shrink-0"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="h-[1px] bg-brand-cyan"
            />
            <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-[10px]">
              Get In Touch
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="h-[1px] bg-brand-cyan"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-none mb-2">
            Initiate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              Protocol
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto font-light">
            Ready to redefine the boundaries of medical technology? Our team is
            standing by.
          </p>
        </motion.div>

        {/* Two-column layout — left slides up, right slides down */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-6xl mx-auto w-full flex-1 min-h-0">
          {/* Left: Info Panel — slides up */}
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              damping: 16,
            }}
            className="lg:col-span-4 flex flex-col glass-dark rounded-3xl border border-white/10 p-6"
          >
            {/* Contact Items */}
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: MapPin,
                  title: "HQ Location",
                  val: "Palo Alto, California",
                },
                {
                  icon: Mail,
                  title: "Secure Channel",
                  val: "hello@revivemed.tech",
                },
                { icon: Phone, title: "Direct Line", val: "+1 (650) 555-0123" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 + 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/20 transition-colors"
                  >
                    <item.icon className="text-brand-cyan w-4 h-4" />
                  </motion.div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-white/30 font-bold">
                      {item.title}
                    </div>
                    <div className="text-sm font-medium text-white/70">
                      {item.val}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="h-px bg-white/5 mb-5 origin-left"
            />

            {/* Brand + Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-auto"
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-7 h-7 bg-brand-blue rounded-lg flex items-center justify-center shadow-lg shadow-brand-blue/30"
                >
                  <Activity className="text-white w-4 h-4" />
                </motion.div>
                <span className="text-base font-display font-bold tracking-tighter">
                  REVIVE<span className="text-brand-blue">MED</span>
                </span>
              </div>
              <p className="text-white/25 text-xs leading-relaxed mb-4 font-light">
                Architecting the future of medical intelligence. Silicon Valley
                precision, global impact.
              </p>
              <div className="flex gap-2">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.1 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-8 h-8 rounded-xl glass border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer strip */}
            <div className="mt-5 pt-4 border-t border-white/5 flex gap-4 text-[9px] text-white/15 font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white/40 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white/40 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white/40 transition-colors">
                Compliance
              </a>
              <span className="ml-auto">© 2026 RMT</span>
            </div>
          </motion.div>

          {/* Right: Contact Form — slides down */}
          <motion.div
            initial={{ opacity: 0, y: -80, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 60,
              damping: 16,
            }}
            className="lg:col-span-8 glass rounded-3xl border border-white/10 p-6 relative overflow-hidden flex flex-col"
          >
            {/* Form glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none" />

            <form className="relative z-10 flex flex-col gap-4 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:shadow-[0_0_20px_rgba(0,112,243,0.15)] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:shadow-[0_0_20px_rgba(0,112,243,0.15)] transition-all"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 ml-1">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Organization"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:shadow-[0_0_20px_rgba(0,112,243,0.15)] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 ml-1">
                    Subject
                  </label>
                  <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-brand-blue focus:shadow-[0_0_20px_rgba(0,112,243,0.15)] transition-all appearance-none">
                    <option className="bg-dark-bg">Project Collaboration</option>
                    <option className="bg-dark-bg">Regulatory Strategy</option>
                    <option className="bg-dark-bg">R&D Partnership</option>
                    <option className="bg-dark-bg">Career Inquiry</option>
                  </select>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-1.5 flex-1"
              >
                <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project or inquiry..."
                  className="w-full h-full min-h-[100px] bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:shadow-[0_0_20px_rgba(0,112,243,0.15)] transition-all resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(0,112,243,0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue/90 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(0,112,243,0.2)] text-sm"
              >
                Send Transmission <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
