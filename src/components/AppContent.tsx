import React from "react";
import { motion } from "motion/react";

const Container = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
    <div className={`max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center min-h-screen ${className}`} {...props}>
        {children}
    </div>
);

const Heading = ({ children, gradient = false }: { children: React.ReactNode, gradient?: boolean }) => (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 ${gradient ? 'text-gradient' : ''}`}
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
        <span className="text-brand-cyan font-bold tracking-[0.3em] uppercase text-xs">{children}</span>
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
                            className="w-1/2 h-1/2 bg-brand-cyan/20 rounded-full blur-2xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </Container>
);

// 2. Areas of Expertise
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all group"
                >
                    <div className="w-12 h-12 bg-white/5 rounded-xl mb-6 flex items-center justify-center group-hover:bg-brand-blue/20 transition-all">
                        <span className="text-brand-cyan font-bold leading-none">{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    </Container>
);

// 3. Services Intro
export const ServicesIntro = () => (
    <Container className="text-center items-center">
        <SubHeading>3. SERVICES</SubHeading>
        <Heading gradient>Empowering our clients amidst a digital revolution</Heading>
        <p className="max-w-4xl text-xl text-white/50 font-light leading-relaxed">
            At Revive Medical Technologies (RMT), we operate in the novel areas of healthcare innovation, providing cutting-edge software solutions designed to meet the diverse needs of the industry. Our services encompass a wide range of advanced technologies and applications, each meticulously crafted to enhance efficiency, accuracy, and patient care.
        </p>
    </Container>
);

// 4. AI Integration
export const AIIntegration = () => (
    <Container>
        <SubHeading>AI INTEGRATION</SubHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
                "Clinical Intelligence", "Automatic Clinical Workflows", "AI Assistants", "System Checker",
                "Analytics", "Auto Appointment Schedular", "Predictive & Preventive Analysis"
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-dark p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center justify-center aspect-video hover:bg-white/5 transition-all"
                >
                    <span className="text-sm font-bold tracking-tight text-white/70">{item}</span>
                </motion.div>
            ))}
        </div>
    </Container>
);

// 5. Medicine & Management
export const MedicineManagement = () => (
    <Container>
        <SubHeading>MEDICINE & MANAGEMENT</SubHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
                "Medical Research & Recommendation", "Remote Patient Monitoring Dashboard", "Medical Imaging Analysis & Management",
                "Drug Discovery, Development & Management", "AI-enabled Medical Billing Software", "Appointment Management Software"
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-dark p-6 rounded-2xl border border-white/5 flex flex-col items-start gap-4 hover:border-brand-cyan/30 transition-all"
                >
                    <div className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,223,216,1)]" />
                    <span className="text-sm font-bold text-white/80">{item}</span>
                </motion.div>
            ))}
        </div>
    </Container>
);

// 6. Quality Assurance
export const QualityAssurance = () => (
    <Container>
        <SubHeading>QUALITY ASSURANCE</SubHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
                "Software Testing Lifecycle", "Security Testing", "Software Quality Assurance",
                "API Testing", "Manual & Automated Testing", "Test Planning & Strategy"
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4"
                >
                    <div className="text-xs font-mono text-brand-blue font-bold opacity-50">0{i + 1}</div>
                    <span className="text-sm font-medium">{item}</span>
                </motion.div>
            ))}
        </div>
    </Container>
);

// 7. Products Intro
export const CareManagement = () => (
    <Container className="text-center items-center">
        <SubHeading>4. PRODUCTS</SubHeading>
        <Heading gradient>CARE MANAGEMENT</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-dark p-10 rounded-[2.5rem] text-left border border-white/10">
                <h3 className="text-3xl font-bold mb-4 text-brand-blue">EHR</h3>
                <p className="text-white/50 leading-relaxed">
                    EHR solution simplifies patient data management, offering quick access to medical records, diagnosis, treatments, and test results. It enhances data sharing and improves coordination, streamlining patient care and reducing errors.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-dark p-10 rounded-[2.5rem] text-left border border-white/10">
                <h3 className="text-3xl font-bold mb-4 text-brand-cyan">AI AUTOMATION</h3>
                <p className="text-white/50 leading-relaxed">
                    AI Automation tool leverages advanced algorithms to streamline repetitive tasks, improve efficiency, and reduce human error. By integrating AI into workflows enhances the decision-making, boosts productivity and allow teams to focus on more strategic initiatives.
                </p>
            </motion.div>
        </div>
    </Container>
);

// 8. Remote Care
export const RemoteCare = () => (
    <Container>
        <SubHeading>REMOTE CARE & TELEHEALTH</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <h3 className="text-3xl font-bold mb-4">TELEHEALTH</h3>
                    <p className="text-white/50 leading-relaxed">
                        Telehealth platform enables remote healthcare delivery, allowing patients to consult with doctors via secure video calls. It improves access to care, enhances patient convenience, and supports better health outcomes.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-4xl font-bold mb-4 tracking-tighter">REMOTE MONITORING & CARE</h3>
                    <p className="text-white/50 leading-relaxed">
                        Remote Monitoring & Care solutions allow healthcare providers to track patients' vital signs in real-time from any location. It ensures continuous care and reduces hospital visits.
                    </p>
                </motion.div>
            </div>
            <div className="hidden md:flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-full h-2/3 glass shadow-2xl rounded-[3rem] border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent" />
                    <div className="flex items-center justify-center h-full">
                        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="w-1/2 h-px bg-brand-cyan blur-sm" />
                    </div>
                </motion.div>
            </div>
        </div>
    </Container>
);

// 9. Preventive Care
export const PreventiveCare = () => (
    <Container>
        <SubHeading>POSTOP / PREVENTIVE CARE</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 glass-dark rounded-[2rem] border border-white/5">
                <h3 className="text-2xl font-bold mb-4">WELLBUDDY POSTOP CARE</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                    It is a comprehensive solution designed to support patients during their recovery after surgery. It provides remote monitoring of vital signs, medication tracking and personalized care instructions ensuring smooth recovery process and reducing hospital readmissions.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 glass-dark rounded-[2rem] border border-white/5">
                <h3 className="text-2xl font-bold mb-4">PREVENTIVE CARE</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                    Our Preventive Care solution focuses on proactive health management by monitoring key health indicators and providing early alerts for potential risks. It helps individuals maintain optimal health and promoces long-term well-being.
                </p>
            </motion.div>
        </div>
    </Container>
);

// 10. Medical Assistance
export const MedicalAssistance = () => (
    <Container>
        <SubHeading>MEDICAL ASSISTANCE</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="p-10 bg-brand-blue/5 border border-brand-blue/20 rounded-[3rem]">
                <h3 className="text-2xl font-bold mb-6 text-brand-blue">CLINICAL DECISION SUPPORT</h3>
                <p className="text-white/60 leading-relaxed font-light">
                    An intelligent support system designed to augment clinical expertise. By analyzing complex patient data in real-time, we deliver evidence-based recommendations that enhance diagnostic precision and optimize treatment planning.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="p-10 bg-brand-cyan/5 border border-brand-cyan/20 rounded-[3rem]">
                <h3 className="text-2xl font-bold mb-6 text-brand-cyan">PRECISION MEDICINE</h3>
                <p className="text-white/60 leading-relaxed font-light">
                    Our solution tailors treatments based on individual genetic profiles, lifestyle, and environment. By personalizing treatment effectiveness, minimizes side effects, and promotes better outcomes for patients.
                </p>
            </motion.div>
        </div>
    </Container>
);

// 11. Clients
export const ClientsSlide = () => (
    <Container className="items-center text-center">
        <SubHeading>3. CLIENTS</SubHeading>
        <Heading gradient>SATISFIED CLIENTS</Heading>
        <div className="flex flex-wrap justify-center gap-12 mt-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-20 glass-dark rounded-xl border border-white/5 flex items-center justify-center font-bold text-white/20 uppercase tracking-widest text-[10px]">
                    Client Logo
                </div>
            ))}
        </div>
    </Container>
);

// 12. Thank You
export const ThankYou = () => (
    <Container className="items-center text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl glass-dark p-16 md:p-24 rounded-[4rem] border border-white/10 shadow-[0_0_100px_rgba(0,112,243,0.2)]"
        >
            <Heading gradient>THANK YOU</Heading>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12">
                Your comprehensive software solution partner, guiding you from initial conceptualization to the realization of a full scale commercial reality within the dynamic landscape of medical innovation.
            </p>
            <div className="text-brand-cyan font-mono tracking-widest text-sm">
                www.rmt-usa.com
            </div>
        </motion.div>
    </Container>
);
