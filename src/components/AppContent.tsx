import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

const Container = ({ children, className = "", isActive, ...props }: { children: React.ReactNode, className?: string, isActive?: boolean, [key: string]: any }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className={`max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center min-h-screen ${className}`} {...props}>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-brand-cyan origin-left z-50"
                style={{ scaleX }}
            />
            {children}
        </div>
    );
};

const Heading = ({ children, gradient = false }: { children: React.ReactNode, gradient?: boolean }) => (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 ${gradient ? 'text-gradient' : ''}`}
    >
        {children}
    </motion.h2>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-6"
    >
        <div className="h-px w-12 bg-brand-cyan" />
        <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">{children}</span>
    </motion.div>
);

// 1. About Us
export const AboutUs = ({ ...props }) => (
    <Container {...props}>
        <SubHeading>About Us</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <Heading>Empowering Our Clients Amidst a Digital Revolution</Heading>
                <p className="text-xl text-white/60 font-light leading-relaxed">
                    Software division is at the forefront of this mission, offering a comprehensive suite of services designed to address the evolving needs of healthcare organizations worldwide. We empower our clients to stay ahead in an increasingly digital landscape.
                </p>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="glass-dark p-8 rounded-[2rem] border border-white/10"
            >
                <div className="aspect-square bg-brand-blue/10 rounded-xl flex items-center justify-center border border-brand-blue/20 overflow-hidden">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                        className="w-2/3 h-2/3 border-2 border-dashed border-brand-blue/30 rounded-full flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="w-1/2 h-1/2 bg-brand-cyan/20 rounded-full"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </Container>
);

// 2. AREAS OF EXPERTISE
export const Expertise = () => (
    <Container>
        <SubHeading>2. AREAS OF EXPERTISE</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Data-Driven Solutions", desc: "Leverage data science, AI, and ML for actionable insights and improved patient outcomes." },
                { title: "Interface Engineering", desc: "Create high-performance mobile, desktop, and web applications with user-centric design." },
                { title: "AI Integration", desc: "Seamlessly embed artificial intelligence into existing systems to enhance automation, decision-making, and operational efficiency." },
                { title: "Software Quality Assurance", desc: "Ensure software reliability and performance through comprehensive SQA and SDLC management." }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="relative group p-[1px] rounded-3xl overflow-hidden bg-white/5 shadow-[0_0_20px_rgba(0,112,243,0.1)]"
                >
                    {/* Rotating Border - Always Visible */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_20%,#0070f3_40%,#00dfd8_60%,transparent_80%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="relative h-full w-full bg-[#080808] rounded-[calc(1.5rem-1px)] p-8 flex flex-col z-10 transition-colors group-hover:bg-black/80">
                        <div className="w-12 h-12 bg-white/5 rounded-xl mb-6 flex items-center justify-center group-hover:bg-brand-blue/20 transition-all border border-white/10 group-hover:border-brand-blue/30">
                            <span className="text-brand-cyan font-bold leading-none">{i + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </Container>
);

// New Intro Sections from PDF

// 3. Software Team
export const SoftwareTeam = () => (
    <Container>
        <SubHeading>Software Team</SubHeading>
        <Heading gradient>RMT Software Engineering Team</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
                { initial: "W", name: "Wajahat Ali Khan", role: "Software Application Manager" },
                { initial: "I", name: "Istafa Malik", role: "Software Development Manager" },
                { initial: "M", name: "M. Umer", role: "Software Compliance Manager" },
                { initial: "M", name: "M. Amir Jamshaid", role: "Software AI Manager" }
            ].map((member, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-dark p-6 rounded-3xl border border-white/10 text-center group hover:border-brand-cyan/50 transition-all duration-500"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-xl md:text-2xl font-bold text-brand-cyan">{member.initial}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">{member.name}</h3>
                    <p className="text-xs md:text-sm text-white/50">{member.role}</p>
                </motion.div>
            ))}
        </div>
    </Container>
);

// 4. RMT Background
export const RMTBackground = () => (
    <Container>
        <SubHeading>RMT Background</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
                <Heading gradient>Pioneering Healthcare Innovation Since 2004</Heading>
                <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
                    {[
                        { color: "brand-cyan", text: "Rich History of Setting up Pakistan's 1st State-owned Medical Device Industry (N-ovative Health Technologies)." },
                        { color: "brand-blue", text: "Pioneer in the R&D, Production and Licensing of Medical Devices and Healthcare Technologies in Pakistan." },
                        { color: "white/20", text: "Cross functional RMT Team has been involved for the last 02 decades in R&D, Production and Regulatory Approvals." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 md:gap-6">
                            <div className={`h-10 md:h-12 w-1 bg-${item.color} rounded-full shrink-0`} />
                            <p className="text-base md:text-lg lg:text-xl text-white/70 font-light leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full" />
                <div className="relative glass-dark p-1 rounded-[3rem] border border-white/10 overflow-hidden aspect-video flex items-center justify-center">
                    <div className="text-brand-cyan/20 text-9xl font-bold opacity-10">RMT</div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute inset-0 border-2 border-brand-cyan/30 rounded-[3rem]"
                    />
                </div>
            </div>
        </div>
    </Container>
);

// 5. Our Company
export const OurCompany = () => (
    <Container className="text-center items-center">
        <SubHeading>Our Company</SubHeading>
        <Heading gradient>A One-Stop Shop for Health-Tech</Heading>
        <p className="text-lg md:text-2xl text-white/60 font-light max-w-3xl mb-12 lg:mb-16 leading-relaxed">
            Turning <span className="text-brand-cyan font-bold">HEALTH-TECH IDEAS</span> into <span className="text-brand-blue font-bold">MARKETABLE PRODUCTS</span> by centralizing and streamlining diverse activities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {[
                { title: "R&D Wing", desc: "Advanced labs for biomaterials, software, AI, and medical device design." },
                { title: "Production Wing", desc: "ISO Class 5, 7 and 8 cleanrooms for medical grade manufacturing." },
                { title: "Regulatory Wing", desc: "Expert approvals including FDA, CE, UKCA, and SFDA." }
            ].map((wing, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="glass-dark p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 relative overflow-hidden group text-left sm:text-center"
                >
                    <div className="absolute top-0 right-0 p-6 md:p-8 text-4xl md:text-6xl font-bold text-white/[0.03] group-hover:text-brand-cyan/10 transition-colors">0{i + 1}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-cyan">{wing.title}</h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">{wing.desc}</p>
                </motion.div>
            ))}
        </div>
    </Container>
);

// 6. Pak Facility
export const PakFacility = () => (
    <Container>
        <SubHeading>Off-Shore Facility</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="glass-dark rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden aspect-video lg:aspect-square flex items-center justify-center">
                    <div className="text-center p-8 md:p-12">
                        <div className="text-brand-cyan text-4xl md:text-6xl mb-4 md:mb-6">🇵🇰</div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Islamabad</h3>
                        <p className="text-brand-cyan/60 font-mono text-xs md:text-sm tracking-widest">Off-shore R&D and Production</p>
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <Heading gradient>Pakistan Facility</Heading>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-6 md:mb-8">
                    Our state-of-the-art facility in Islamabad serves as our primary off-shore R&D and production hub, featuring advanced laboratories and certified cleanrooms.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Biomaterials Lab", "Software & AI Suite", "ISO Class Cleanrooms", "Mechanical Workshop"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                            <span className="font-medium text-sm md:text-base">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Container>
);

// 7. US Facility
export const USFacility = () => (
    <Container>
        <SubHeading>Head Office</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
                <Heading gradient>United States Facility</Heading>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-6 md:mb-8">
                    Our global headquarters in Minnesota oversees our international operations, regulatory compliance, and strategic partnerships.
                </p>
                <div className="glass-dark p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10">
                    <h3 className="text-brand-blue font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4">Location</h3>
                    <p className="text-white/80 text-sm md:text-base">
                        Saint Cloud Office<br />
                        Edgewater Business Centre<br />
                        Sartell, Minnesota, USA
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="glass-dark rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden aspect-video lg:aspect-square flex items-center justify-center">
                    <div className="text-center p-8 md:p-12">
                        <div className="text-brand-blue text-4xl md:text-6xl mb-4 md:mb-6">🇺🇸</div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Minnesota</h3>
                        <p className="text-brand-blue/60 font-mono text-xs md:text-sm tracking-widest">Global Headquarters</p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

// 8. Services Intro
export const ServicesIntro = () => (
    <Container className="text-center items-center">
        <SubHeading>SERVICES</SubHeading>
        <Heading gradient>Empowering our clients amidst a digital revolution</Heading>
        <p className="max-w-4xl text-lg md:text-xl text-white/50 font-light leading-relaxed">
            At Revive Medical Technologies (RMT), we operate in the novel areas of healthcare innovation, providing cutting-edge software solutions designed to meet the diverse needs of the industry. Our services encompass a wide range of advanced technologies and applications, each meticulously crafted to enhance efficiency, accuracy, and patient care.
        </p>
    </Container>
);

// 4. AI Integration
export const AIIntegration = ({ slideActive }: { slideActive?: boolean }) => {
    const aiServices = [
        {
            title: "Clinical Intelligence",
            desc: "Advanced clinical decision support leveraging ML models to provide evidence-based insights.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    <path d="M12 8v4l3 3" />
                </svg>
            )
        },
        {
            title: "Automatic Workflows",
            desc: "Streamline administrative and clinical processes to reduce manual overhead and improve efficiency.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            )
        },
        {
            title: "AI Assistants",
            desc: "Virtual health assistants providing preliminary triage and personalized patient engagement continuously.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            )
        },
        {
            title: "System Checker",
            desc: "Automated real-time monitoring of medical systems for predictable anomalies and compliance.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            )
        },
        {
            title: "Analytics",
            desc: "Predictive modeling and comprehensive data analysis for actionable healthcare insights.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
            )
        },
        {
            title: "Auto Scheduler",
            desc: "Intelligent resource allocation and patient scheduling to optimize clinic and hospital workflows.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            )
        },
        {
            title: "Predictive & Preventive",
            desc: "Forecast potential health risks and implement proactive care measures for better patient outcomes.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            )
        }
    ];

    return (
        <Container className="w-full mx-auto relative px-4 md:px-6">
            {/* Awesome glowing background effect - Hide on small mobile to avoid clutter */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-cyan/10 rounded-full"
                />
            </div>

            <div className="relative z-10 w-full">
                <SubHeading>AI INTEGRATION</SubHeading>
                <div className="flex flex-wrap justify-center items-stretch gap-4 w-full mt-4 md:mt-8">
                    {aiServices.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={slideActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
                            className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] min-w-[160px] max-w-[280px] h-[180px] md:h-[220px] perspective-[1000px] cursor-pointer"
                        >
                            <div className="relative w-full h-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_0_20px_rgba(0,223,216,0.05)] hover:shadow-[0_0_30px_rgba(0,223,216,0.15)] rounded-2xl">

                                {/* FRONT OF CARD */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[1rem] bg-white/5 border border-white/5 overflow-hidden">
                                    <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-[calc(1rem-1px)] z-0" />

                                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center">
                                        <div className="mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-brand-cyan group-hover:text-white group-hover:bg-brand-cyan/20 transition-all duration-500">
                                            <div className="scale-75 md:scale-100">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-white/70 group-hover:text-white transition-colors duration-500 uppercase px-2 leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* BACK OF CARD */}
                                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[1rem] bg-gradient-to-br from-[#0a0a0a] to-[#041a1a] border border-brand-cyan/30 flex flex-col items-center justify-center p-4 md:p-6 text-center shadow-[0_0_30px_rgba(0,223,216,0.15)]">
                                    <h4 className="text-brand-cyan font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2 md:mb-3">{item.title}</h4>
                                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

// 10. Medicine & Management
export const MedicineManagement = () => {
    const managementServices = [
        {
            title: "Medical Research & Recommendation",
            desc: "Advanced AI algorithms for clinical research support and data synthesis.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
            )
        },
        {
            title: "Remote Patient Monitoring Dashboard",
            desc: "Real-time vitals tracking and alerting system for proactive patient care.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            )
        },
        {
            title: "Medical Imaging Analysis & Management",
            desc: "AI-powered diagnostic imaging interpretation and workflow optimization.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M15 3h6v6" />
                    <path d="M9 21H3v-6" />
                    <path d="M21 3l-7 7" />
                    <path d="M3 21l7-7" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            title: "Drug Discovery & Development",
            desc: "Accelerating pharmaceutical innovation with machine learning models.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M4.5 12.5l10-10a3.53 3.53 0 0 1 5 5l-10 10a3.53 3.53 0 0 1-5-5z" />
                    <path d="M9 6.5l5 5" />
                </svg>
            )
        },
        {
            title: "AI-enabled Medical Billing",
            desc: "Automated coding and claims processing to reduce operational overhead.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
                </svg>
            )
        },
        {
            title: "Appointment Management Software",
            desc: "Intelligent scheduling and patient flow management for modern clinics.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 md:w-6 md:h-6">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        }
    ];

    return (
        <Container>
            <SubHeading>MEDICINE & MANAGEMENT</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {managementServices.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative p-[1px] rounded-[2rem] overflow-hidden bg-white/5"
                    >
                        <div className="relative h-full w-full bg-[#0a0a0a] rounded-[calc(2rem-1px)] p-6 md:p-8 flex flex-col z-10 transition-all duration-500 group-hover:bg-black/80">
                            <div className="absolute top-4 right-8 text-6xl md:text-8xl font-display font-bold text-white/[0.02] group-hover:text-brand-blue/[0.05] transition-colors duration-500 pointer-events-none select-none">
                                0{i + 1}
                            </div>

                            <div className="mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue/50 transition-all duration-500 shadow-lg">
                                {item.icon}
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:text-brand-cyan transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-0 sm:h-0 sm:opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 md:group-hover:mt-4 transition-all duration-500">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

// 11. Quality Assurance
export const QualityAssurance = () => (
    <Container>
        <SubHeading>QUALITY ASSURANCE</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
                "Software Testing Lifecycle", "Security Testing", "Software Quality Assurance",
                "API Testing", "Manual & Automated Testing", "Test Planning & Strategy"
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 flex items-center gap-4"
                >
                    <div className="text-[10px] md:text-xs font-mono text-brand-blue font-bold opacity-50">0{i + 1}</div>
                    <span className="text-xs md:text-sm font-medium">{item}</span>
                </motion.div>
            ))}
        </div>
    </Container>
);

// 12. Products Intro
export const CareManagement = () => (
    <Container className="text-center items-center px-4 md:px-6">
        <SubHeading>PRODUCTS</SubHeading>
        <Heading gradient>CARE MANAGEMENT</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group p-[1px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white/5"
            >
                <div className="relative card-content text-left bg-[#080808] h-full w-full rounded-[calc(2rem-1px)] md:rounded-[calc(2.5rem-1px)] z-10 p-6 md:p-10 group-hover:bg-black/80 transition-colors">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-blue">EHR</h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        EHR solution simplifies patient data management, offering quick access to medical records, diagnosis, treatments, and test results. It enhances data sharing and improves coordination, streamlining patient care and reducing errors.
                    </p>
                    <div className="mt-6 md:mt-8 h-1 w-20 md:w-24 bg-brand-blue/30 rounded-full" />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group p-[1px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white/5"
            >
                <div className="relative card-content text-left bg-[#080808] h-full w-full rounded-[calc(2rem-1px)] md:rounded-[calc(2.5rem-1px)] z-10 p-6 md:p-10 group-hover:bg-black/80 transition-colors">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-cyan">AI AUTOMATION</h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        AI Automation tool leverages advanced algorithms to streamline repetitive tasks, improve efficiency, and reduce human error. By integrating AI into workflows enhances the decision-making, boosts productivity and allow teams to focus on more strategic initiatives.
                    </p>
                    <div className="mt-6 md:mt-8 h-1 w-20 md:w-24 bg-brand-cyan/30 rounded-full" />
                </div>
            </motion.div>
        </div>
    </Container>
);

// 13. Remote Care
export const RemoteCare = () => (
    <Container>
        <SubHeading>REMOTE CARE & TELEHEALTH</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8 md:space-y-12">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">TELEHEALTH</h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        Telehealth platform enables remote healthcare delivery, allowing patients to consult with doctors via secure video calls. It improves access to care, enhances patient convenience, and supports better health outcomes.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tighter">REMOTE MONITORING & CARE</h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        Remote Monitoring & Care solutions allow healthcare providers to track patients' vital signs in real-time from any location. It ensures continuous care and reduces hospital visits.
                    </p>
                </motion.div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-full h-[300px] lg:h-[400px] glass shadow-2xl rounded-[3rem] border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent" />
                    <div className="flex items-center justify-center h-full">
                        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="w-1/2 h-px bg-brand-cyan" />
                    </div>
                </motion.div>
            </div>
        </div>
    </Container>
);

// 14. Preventive Care
export const PreventiveCare = () => (
    <Container>
        <SubHeading>POSTOP / PREVENTIVE CARE</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {[
                { title: "WELLBUDDY POSTOP CARE", color: "brand-blue", desc: "It is a comprehensive solution designed to support patients during their recovery after surgery. It provides remote monitoring of vital signs, medication tracking and personalized care instructions ensuring smooth recovery process and reducing hospital readmissions." },
                { title: "PREVENTIVE CARE", color: "brand-cyan", desc: "Our Preventive Care solution focuses on proactive health management by monitoring key health indicators and providing early alerts for potential risks. It helps individuals maintain optimal health and promoces long-term well-being." }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.color === 'brand-blue' ? 'from-brand-blue to-purple-600' : 'from-brand-cyan to-blue-500'} rounded-[2rem] opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`} />
                    <div className="relative p-6 md:p-10 glass-dark rounded-[2rem] border border-white/10 h-full flex flex-col justify-center">
                        <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${item.color === 'brand-blue' ? 'text-brand-blue' : 'text-brand-cyan'}`}>{item.title}</h3>
                        <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">
                            {item.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </Container>
);


// 15. Medical Assistance
export const MedicalAssistance = () => (
    <Container>
        <SubHeading>MEDICAL ASSISTANCE</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative group p-[1px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/5"
            >
                <div className="relative p-6 md:p-10 bg-[#0a0a0a] rounded-[calc(2rem-1px)] md:rounded-[calc(3rem-1px)] z-10 h-full transition-all duration-500 group-hover:bg-black/80">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-brand-blue flex items-center gap-3 text-left">
                        <div className="w-1 md:w-1.5 h-6 bg-brand-blue rounded-full shrink-0" />
                        CLINICAL DECISION SUPPORT
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-light group-hover:text-white transition-colors">
                        An intelligent support system designed to augment clinical expertise. By analyzing complex patient data in real-time, we deliver evidence-based recommendations that enhance diagnostic precision and optimize treatment planning.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative group p-[1px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/5"
            >
                <div className="relative p-6 md:p-10 bg-[#0a0a0a] rounded-[calc(2rem-1px)] md:rounded-[calc(3rem-1px)] z-10 h-full transition-all duration-500 group-hover:bg-black/80">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-brand-cyan flex items-center gap-3 text-left">
                        <div className="w-1 md:w-1.5 h-6 bg-brand-cyan rounded-full shrink-0" />
                        PRECISION MEDICINE
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed font-light group-hover:text-white transition-colors">
                        Our solution tailors treatments based on individual genetic profiles, lifestyle, and environment. By personalizing treatment effectiveness, minimizes side effects, and promotes better outcomes for patients.
                    </p>
                </div>
            </motion.div>
        </div>
    </Container>
);

// 16. Clients
export const ClientsSlide = () => (
    <Container className="items-center text-center">
        <SubHeading>CLIENTS</SubHeading>
        <Heading gradient>SATISFIED CLIENTS</Heading>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 md:mt-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-28 md:w-32 h-16 md:h-20 glass-dark rounded-xl border border-white/5 flex items-center justify-center font-bold text-white/20 uppercase tracking-widest text-[8px] md:text-[10px]">
                    Client Logo
                </div>
            ))}
        </div>
    </Container>
);

// 17. Thank You
export const ThankYou = () => (
    <Container className="items-center text-center p-4">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl glass-dark p-8 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[4rem] border border-white/10 shadow-[0_0_100px_rgba(0,112,243,0.2)]"
        >
            <Heading gradient>THANK YOU</Heading>
            <p className="text-lg md:text-xl lg:text-2xl text-white/60 font-light leading-relaxed mb-8 md:mb-12">
                Your comprehensive software solution partner, guiding you from initial conceptualization to the realization of a full scale commercial reality within the dynamic landscape of medical innovation.
            </p>
            <div className="text-brand-cyan font-mono tracking-widest text-xs md:text-sm">
                www.rmt-usa.com
            </div>
        </motion.div>
    </Container>
);
