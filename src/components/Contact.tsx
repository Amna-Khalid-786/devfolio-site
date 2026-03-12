import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Activity, Twitter, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-blue/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tighter">
                Initiate <br />
                <span className="text-gradient">Protocol</span>
              </h2>
              
              <p className="text-xl text-white/40 font-light leading-relaxed mb-16">
                Ready to redefine the boundaries of medical technology? 
                Our team of architects and clinical experts is standing by.
              </p>

              <div className="space-y-10">
                {[
                  { icon: MapPin, title: "Nexus HQ", val: "Palo Alto, California" },
                  { icon: Mail, title: "Secure Channel", val: "hello@revivemed.tech" },
                  { icon: Phone, title: "Direct Line", val: "+1 (650) 555-0123" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-8 group">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-brand-blue/20 transition-all">
                      <item.icon className="text-brand-blue w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{item.title}</div>
                      <div className="text-lg font-medium text-white/80">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 glass p-10 md:p-16 rounded-[3rem] relative overflow-hidden group"
          >
            {/* Form Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full group-hover:bg-brand-blue/20 transition-colors" />
            
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Identity</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Digital Address</label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Objective</label>
                <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue transition-all appearance-none">
                  <option className="bg-dark-bg">Project Collaboration</option>
                  <option className="bg-dark-bg">Regulatory Strategy</option>
                  <option className="bg-dark-bg">R&D Partnership</option>
                  <option className="bg-dark-bg">Career Inquiry</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Transmission</label>
                <textarea 
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-blue transition-all resize-none"
                />
              </div>

              <button className="w-full py-5 bg-brand-blue hover:bg-brand-blue/90 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_0_40px_rgba(0,112,243,0.2)] hover:shadow-[0_0_60px_rgba(0,112,243,0.4)]">
                Send Transmission <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-48 pt-20 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center shadow-[0_0_20px_rgba(0,112,243,0.4)]">
                  <Activity className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-display font-bold tracking-tighter">
                  REVIVE<span className="text-brand-blue">MED</span>
                </span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed mb-10 font-light">
                Architecting the future of medical intelligence. 
                Silicon Valley precision, global impact.
              </p>
              <div className="flex gap-6">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-brand-blue transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-lg mb-8">Ecosystem</h4>
              <ul className="space-y-5 text-sm text-white/30 font-light">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Neural Sync</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Bio-Link OS</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Clinical Cloud</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Vault Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-8">Navigation</h4>
              <ul className="space-y-5 text-sm text-white/30 font-light">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">The Nexus</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Our Synergy</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Revive Labs</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-8">Intelligence</h4>
              <p className="text-sm text-white/30 mb-6 font-light">Subscribe to our technical briefings.</p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue w-full transition-all"
                />
                <button className="bg-brand-blue p-3 rounded-xl shadow-lg shadow-brand-blue/20">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/10 font-bold uppercase tracking-widest pb-12">
            <div>© 2026 Revive Medical Technology Inc.</div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
