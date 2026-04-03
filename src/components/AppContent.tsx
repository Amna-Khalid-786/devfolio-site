import React, { useState } from "react";
import Globe from "react-globe.gl";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Brain, Code2, Zap, Server, ShieldCheck, ExternalLink } from "lucide-react";

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

const Heading = ({ children, gradient = false, className = "" }: { children: React.ReactNode, gradient?: boolean, className?: string }) => (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 ${gradient ? 'text-gradient' : ''} ${className}`}
    >
        {children}
    </motion.h2>
);

const SubHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`flex items-center gap-4 mb-6 ${className}`}
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
                <Heading>Empowering success amidst a digital revolution</Heading>
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
export const SoftwareTeam = () => {
    const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

    return (
        <Container>
            <SubHeading>Software Team</SubHeading>
            <Heading gradient>RMT Software Engineering Team</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                    { image: "WAK.jpg", name: "Wajahat Ali Khan", role: "Head Of Software Department" },
                    { image: "Istafa.png", name: "Istafa Malik", role: "Software Development Manager" },
                    { image: "M.Umer.png", name: "M. Umer", role: "Software Compliance Manager" },
                    { image: "M.Amir.jpg", name: "M. Amir Jamshaid", role: "AI Software Manager" }
                ].map((member, i) => (
                    <motion.div
                        key={i}
                        onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-dark p-6 rounded-3xl border border-white/10 text-center group hover:border-brand-cyan/30 transition-all duration-500 cursor-pointer"
                    >
                        <div className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-4 rounded-full bg-brand-cyan/10 border-2 border-brand-cyan/20 overflow-hidden flex items-center justify-center group-hover:scale-105 group-hover:border-brand-cyan/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,223,216,0.1)]">
                            <img
                                src={`/assets/${member.image}`}
                                alt={member.name}
                                className={`w-full h-full object-cover transition-all duration-700 ${activeIdx === i ? 'grayscale-0 opacity-100 scale-110' : 'grayscale opacity-70 group-hover:grayscale-[30%] group-hover:opacity-100'}`}
                            />
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">{member.name}</h3>
                        <p className="text-xs md:text-sm text-white/50">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

// CEO Intro Slide
export const CEOIntro = () => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <Container>
            <SubHeading>LEADERSHIP</SubHeading>
            <Heading gradient>Chief Executive Officer</Heading>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="md:col-span-5 lg:col-span-4 relative group max-w-[260px] md:max-w-[300px] mx-auto w-full">
                    <div
                        className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[3/4] lg:aspect-[3/4] bg-[#0a0a0a] cursor-pointer shadow-[0_0_20px_rgba(0,223,216,0.05)] group-hover:shadow-[0_0_30px_rgba(0,223,216,0.15)] transition-shadow duration-500"
                        onClick={() => setIsActive(!isActive)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                        <img
                            src="/assets/dr.murtaza.jpg"
                            alt="Prof Dr Murtaza Najabat Ali"
                            className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 opacity-100 scale-105' : 'grayscale opacity-80 group-hover:grayscale-[30%] group-hover:opacity-100'}`}
                        />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Prof Dr Murtaza Najabat Ali</h3>
                            <div className="h-px w-12 bg-brand-cyan my-3" />
                            <p className="text-brand-cyan font-bold tracking-widest text-[10px] uppercase mb-1">CEO & Co-Founder</p>
                            <p className="text-white/60 font-mono text-[9px] tracking-widest uppercase">Revive Medical Technologies Inc</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 lg:col-span-8 px-4 lg:px-0">
                    <div className="space-y-6 md:space-y-8">
                        {[
                            "Recipient of Mandate from PM Office of Pakistan",
                            "Founding CEO of Pakistan 1st State-owned Medical Device Industry (N-ovative Health Technologies)",
                            "Founding Director of Medical Devices Development Center (A Center of Excellence) Pakistan",
                            "20+ Years of Experience in Medical Device Design, Development, Production, Licensing and Technology Transfer",
                            "Founding HoD and Professor at NUST University Pakistan"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                className="flex gap-4 md:gap-6 group"
                            >
                                <div className="h-2 w-2 mt-2.5 rounded-full bg-white/20 group-hover:bg-brand-cyan/80 group-hover:scale-150 transition-all duration-500 shrink-0 shadow-[0_0_10px_rgba(0,223,216,0)] group-hover:shadow-[0_0_10px_rgba(0,223,216,0.5)]" />
                                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed group-hover:text-white transition-colors">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

// 4. RMT Background
export const RMTBackground = () => (
    <Container>
        <SubHeading>BACKGROUND OF RMT</SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
                <Heading gradient>Our Legacy</Heading>
                <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
                    {[
                        { color: "brand-cyan", text: "Rich history of setting up Pakistan's 1st State-owned Medical Device Industry." },
                        { color: "brand-blue", text: "Pioneer in the R&D, Production and Licensing of Medical Devices and Healthcare Technologies in Pakistan." },
                        { color: "white/20", text: "Involved for the last 02 decades in R&D of Medical Devices / Healthcare Technologies." },
                        { color: "brand-cyan", text: "Involved in Production of Medical Devices / Healthcare Technologies." },
                        { color: "brand-blue", text: "Involved in Regulatory Approvals of Medical Devices / Healthcare Technologies." }
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
            <div className="relative group lg:h-full flex items-center">
                <div className="glass-dark rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden w-full aspect-square md:aspect-video lg:aspect-auto lg:h-[80%] flex items-center justify-center relative">
                    <img src="/assets/leagacy.png" alt="RMT Legacy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute inset-4 border border-brand-cyan/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none"
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
                { title: "R & D Wing", desc: "Advanced labs for biomaterials, software, AI, and medical device design." },
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
            <div className="order-2 lg:order-1 relative group">
                <div className="glass-dark rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden aspect-video lg:aspect-square flex items-center justify-center relative">
                    <img src="/assets/pak-facility.png" alt="Pakistan Facility" className="w-full h-full object-cover object-left-top opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 text-left pointer-events-none">
                        <div className="text-brand-cyan text-3xl md:text-5xl mb-2 lg:mb-4">🇵🇰</div>
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-1">Islamabad</h3>
                        <p className="text-brand-cyan/80 font-mono text-xs tracking-widest uppercase">R&D and Production</p>
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
                <Heading gradient>United States Headquarters</Heading>
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
            <div className="relative group">
                <div className="glass-dark rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden aspect-video lg:aspect-square flex items-center justify-center relative">
                    <img src="/assets/us-facility.png" alt="United States Facility" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 text-left pointer-events-none">
                        <div className="text-brand-blue text-3xl md:text-5xl mb-2 lg:mb-4">🇺🇸</div>
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-1">Minnesota</h3>
                        <p className="text-brand-blue/80 font-mono text-xs tracking-widest uppercase">Global Headquarters</p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);

// Animated Map Global Locations
// Animated Map Global Locations
export const AnimatedMap = () => {
    const globeEl = React.useRef<any>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = React.useState({ width: 800, height: 400 });
    const [show2DMap, setShow2DMap] = React.useState(false);
    const [renderGlobeHTML, setRenderGlobeHTML] = React.useState(false);

    React.useEffect(() => {
        if (!containerRef.current) return;
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
        };
        updateDimensions();
        // Give it a small delay to ensure container is fully rendered before capturing dimension
        const timer = setTimeout(updateDimensions, 100);
        window.addEventListener('resize', updateDimensions);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateDimensions);
        };
    }, [show2DMap]); // Re-measure when toggling views

    React.useEffect(() => {
        if (!show2DMap) {
            if (globeEl.current) {
                globeEl.current.controls().autoRotate = true;
                globeEl.current.controls().autoRotateSpeed = 0.8;
                globeEl.current.controls().enableZoom = false;
                // Set initial POV so both locations are visible
                globeEl.current.pointOfView({ lat: 38, lng: -10, altitude: 2 }, 0);
            }
            // Delay rendering HTML elements slightly to ensure globe is fully mounted
            const htmlTimer = setTimeout(() => setRenderGlobeHTML(true), 200);
            return () => clearTimeout(htmlTimer);
        } else {
            setRenderGlobeHTML(false);
        }
    }, [dimensions.width, show2DMap]);

    // Marker data
    const gData = [
        { lat: 45.6083, lng: -94.2069, label: 'Head Office (USA)', color: '#0070f3' }, // Minnesota
        { lat: 33.6844, lng: 73.0479, label: 'Off-shore R&D and Production Facility (Isb)', color: '#00dfd8' }  // Islamabad
    ];

    // Arc data
    const arcsData = [
        {
            startLat: 45.6083, startLng: -94.2069,
            endLat: 33.6844, endLng: 73.0479,
        },
        {
            startLat: 33.6844, startLng: 73.0479,
            endLat: 45.6083, endLng: -94.2069,
        }
    ];

    return (
        <Container className="text-center items-center">
            <SubHeading>OUR LOCATIONS</SubHeading>
            <Heading gradient>Global Presence</Heading>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Bridging innovation across continents with our 3D scalable architecture.
            </p>

            <AnimatePresence mode="wait">
                {!show2DMap ? (
                    <motion.div
                        key="globe-view"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        ref={containerRef}
                        className="relative w-full h-[40vh] md:h-[50vh] max-w-4xl mx-auto mt-6 mb-16 rounded-[3rem] overflow-hidden glass-dark border border-white/10 shadow-[0_0_50px_rgba(0,112,243,0.15)] bg-black group"
                    >
                        {/* Fallback glow behind globe */}
                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-brand-cyan/20 blur-[100px] z-0 pointer-events-none" />

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/50 px-6 py-2 rounded-full backdrop-blur-sm text-sm font-semibold tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,223,216,0.2)]">
                                DRAG TO ROTATE • CLICK TO EXPAND
                            </div>
                        </div>

                        <div className="absolute inset-0 z-10">
                            <Globe
                                ref={globeEl}
                                width={dimensions.width}
                                height={dimensions.height}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                backgroundColor="rgba(0,0,0,0)"

                                onGlobeClick={() => setShow2DMap(true)}

                                // Arcs configuration
                                arcsData={arcsData}
                                arcColor={() => ['#0070f3', '#00dfd8']}
                                arcDashLength={0.4}
                                arcDashGap={0.2}
                                arcDashInitialGap={() => Math.random()}
                                arcDashAnimateTime={2000}
                                arcStroke={1.5}

                                // Marker dots
                                htmlElementsData={renderGlobeHTML ? gData : []}
                                htmlElement={(d: any) => {
                                    const el = document.createElement('div');
                                    el.innerHTML = `
                                        <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); pointer-events: none;">
                                            <div style="color: ${d.color}; font-weight: bold; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 13px; white-space: nowrap; background: rgba(0,0,0,0.85); padding: 6px 14px; border-radius: 8px; border: 1px solid ${d.color}60; margin-bottom: 8px; backdrop-filter: blur(8px); box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                                                ${d.label}
                                            </div>
                                            <div style="width: 16px; height: 16px; border-radius: 50%; background-color: ${d.color}; box-shadow: 0 0 20px ${d.color}, inset 0 0 5px #fff; border: 2px solid white;"></div>
                                        </div>
                                    `;
                                    return el;
                                }}
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="2d-map-view"
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative w-full aspect-square md:aspect-video max-w-7xl mx-auto mt-6 mb-16 rounded-[3rem] glass-dark border border-white/10 shadow-[0_0_50px_rgba(0,223,216,0.15)] bg-black flex items-center justify-center p-4 md:p-8"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); setShow2DMap(false); }}
                            className="absolute z-50 top-6 right-6 md:top-8 md:right-8 bg-black/60 border border-white/20 text-white/70 hover:text-brand-cyan hover:border-brand-cyan rounded-full px-6 py-2.5 backdrop-blur-md transition-all duration-300 font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-105 shadow-lg"
                        >
                            Back to 3D Globe
                        </button>

                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-brand-cyan/20 blur-[120px] z-0 pointer-events-none" />

                        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                            <img src="/world-map.svg" alt="World Map" className="w-[90%] md:w-[85%] h-auto object-contain opacity-[0.4] invert drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
                        </div>

                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0070f3" stopOpacity={0.2} />
                                    <stop offset="50%" stopColor="#00dfd8" />
                                    <stop offset="100%" stopColor="#0070f3" stopOpacity={0.2} />
                                </linearGradient>
                                <linearGradient id="glow-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00dfd8" stopOpacity={0.1} />
                                    <stop offset="100%" stopColor="#0070f3" />
                                </linearGradient>
                            </defs>

                            {/* Multiple animated global connections highlighting the network */}
                            {[
                                { d: "M 250 400 Q 500 100 700 450", duration: 3, delay: 0 },
                                { d: "M 250 400 Q 300 600 450 750", duration: 4, delay: 1 },
                                { d: "M 700 450 Q 750 650 850 750", duration: 3.5, delay: 0.5 },
                                { d: "M 500 350 Q 600 250 700 450", duration: 2.5, delay: 1.5 },
                            ].map((path, idx) => (
                                <g key={idx}>
                                    <motion.path
                                        d={path.d}
                                        fill="none"
                                        stroke={`url(#${idx % 2 === 0 ? 'gradient-line' : 'glow-line'})`}
                                        strokeWidth="2"
                                        strokeDasharray="4 6"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                                        transition={{ duration: 2, ease: "easeInOut", delay: path.delay }}
                                    />
                                    <motion.circle r={idx === 0 ? "3" : "2"} fill="#fff" filter="drop-shadow(0 0 5px #fff)">
                                        <animateMotion path={path.d} dur={`${path.duration}s`} repeatCount="indefinite" />
                                    </motion.circle>
                                </g>
                            ))}
                        </svg>

                        {/* US Marker */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute top-[38%] left-[23%] md:left-[22%] -translate-x-1/2 -translate-y-1/2 flex items-center z-30 group"
                        >
                            <div className="absolute right-full mr-2 md:mr-4 flex-row items-center whitespace-nowrap hidden sm:flex">
                                <div className="text-right mr-2 md:mr-4 bg-black/60 p-3 lg:p-4 rounded-xl border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,112,243,0.15)]">
                                    <p className="text-brand-cyan font-bold text-sm md:text-xl lg:text-2xl leading-tight mb-1">Head Office</p>
                                    <p className="text-white text-[10px] md:text-xs lg:text-sm leading-snug font-medium text-white/80 italic">in Saint Cloud<br />Edgewater Business Centre<br />Sartell, Minnesota, USA</p>
                                </div>
                                <div className="w-4 md:w-16 h-px bg-brand-cyan" />
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan -ml-1 shadow-[0_0_10px_#00dfd8]" />
                            </div>

                            <div className="relative flex items-center justify-center">
                                <motion.div animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-[-6px] border border-brand-cyan rounded-full" />
                                <div className="w-5 h-5 bg-red-600 rounded-full relative z-10 shadow-[0_0_20px_rgba(239,68,68,0.8)] border-[3px] border-white flex items-center justify-center group-hover:scale-125 transition-transform">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Pak Marker */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="absolute top-[48%] md:top-[45%] left-[66%] md:left-[68%] -translate-x-1/2 -translate-y-1/2 flex items-center z-30 group"
                        >
                            <div className="relative flex items-center justify-center">
                                <motion.div animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute inset-[-6px] border border-brand-cyan rounded-full" />
                                <div className="w-5 h-5 bg-red-600 rounded-full relative z-10 shadow-[0_0_20px_rgba(239,68,68,0.8)] border-[3px] border-white flex items-center justify-center group-hover:scale-125 transition-transform">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                            </div>

                            <div className="absolute left-full ml-2 md:ml-4 flex-row items-center whitespace-nowrap hidden sm:flex">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan -mr-1 shadow-[0_0_10px_#00dfd8]" />
                                <div className="w-4 md:w-16 h-px bg-brand-cyan" />
                                <div className="text-left ml-2 md:ml-4 bg-black/60 p-3 lg:p-4 rounded-xl border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,223,216,0.15)]">
                                    <p className="text-brand-cyan font-bold text-sm md:text-xl lg:text-2xl leading-tight mb-1">Off-shore R&D and<br />Production Facility</p>
                                    <p className="text-white text-[10px] md:text-xs lg:text-sm leading-snug font-bold">in Islamabad Pakistan</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};

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

// 12. Products Intro
export const ProductsIntro = () => (
    <Container className="text-center items-center">
        <SubHeading>PRODUCTS</SubHeading>
        <Heading gradient>Innovative Software Solutions for Modern Healthcare</Heading>
        <p className="max-w-4xl text-lg md:text-xl text-white/50 font-light leading-relaxed">
            Our suite of specialized products empowers medical professionals, streamlines clinical workflows, and enhances patient engagement. From care management software to advanced remote diagnostics, our platforms are engineered to meet the highest regulatory standards while delivering exceptional performance and reliability.
        </p>
    </Container>
);

// 12.5 RPM Demo Showcase
export const RPMDemo = () => (
    <Container className="text-center items-center justify-center py-6">
        <div className="mb-4">
            <SubHeading>RPM DEMO</SubHeading>
            <Heading gradient>Remote Patient Monitoring</Heading>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 max-w-7xl mx-auto w-full px-4 group h-auto">
            {/* Desktop Dashboard Link - Left (Wider) */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[60%] flex flex-col"
            >
                <a
                    href="https://rpm-demo-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:border-brand-blue/40 hover:shadow-brand-blue/20 group/link h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                        src="/assets/rpm-img.png"
                        alt="RPM Demo Dashboard"
                        loading="eager"
                        className="w-full h-auto max-h-[35vh] lg:max-h-[42vh] object-cover lg:object-fill transform transition-transform duration-1000 group-hover/link:scale-[1.02]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/link:opacity-100 transition-all duration-500 z-20 scale-90 group-hover/link:scale-100">
                        <div className="px-5 py-2.5 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center gap-2.5 shadow-2xl">
                            <span className="text-white font-bold tracking-[0.2em] uppercase text-[9px]">Dashboard Demo</span>
                            <ExternalLink size={14} className="text-brand-blue" />
                        </div>
                    </div>
                </a>
            </motion.div>

            {/* Mobile App Link - Right (Narrower but increased) */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-[35%] flex flex-col"
            >
                <a
                    href="https://proactivecare-rpm.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden transition-all duration-700 group/app h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 to-transparent opacity-0 group-hover/app:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                        src="/assets/mobile-img.png"
                        alt="RPM Mobile App"
                        loading="eager"
                        className="w-full h-auto max-h-[40vh] lg:max-h-[55vh] object-contain transform transition-transform duration-1000 group-hover/app:scale-[1.02]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/app:opacity-100 transition-all duration-500 z-20 scale-90 group-hover/app:scale-100">
                        <div className="px-5 py-2.5 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full flex items-center gap-2.5 shadow-2xl">
                            <span className="text-white font-bold tracking-[0.2em] uppercase text-[9px]">Mobile App</span>
                            <ExternalLink size={14} className="text-brand-cyan" />
                        </div>
                    </div>
                </a>
            </motion.div>

            {/* Ambient Background Glow */}
            <div className="absolute -inset-20 bg-brand-cyan/5 blur-[120px] rounded-full -z-10 pointer-events-none opacity-50" />
        </div>
    </Container>
);

export const ServicesCategories = ({ onSelect }: { onSelect: (index: number) => void }) => {
    const categories = [
        { title: "Artificial Intelligence", subtitle: "Advanced Analytics", icon: Brain, color: "cyan" as const },
        { title: "App Development", subtitle: "Platform Solutions", icon: Code2, color: "blue" as const },
        { title: "Automation", subtitle: "Operational Efficiency", icon: Zap, color: "cyan" as const },
        { title: "Software Compliance", subtitle: "Regulatory Standards", icon: ShieldCheck, color: "blue" as const },
        { title: "Infrastructure", subtitle: "Lifecycle Management", icon: Server, color: "cyan" as const }
    ];

    return (
        <Container className="justify-center py-4">
            <div className="text-center mb-6 md:mb-10">
                <SubHeading className="text-[10px] md:text-xs">OUR EXPERTISE</SubHeading>
                <Heading gradient className="text-3xl md:text-5xl">Medical Solutions</Heading>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 w-full max-w-7xl">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        onClick={() => onSelect(10 + i)}
                        className="group relative cursor-pointer flex flex-col h-full"
                    >
                        {/* Continuous Border Animation */}
                        <div className="absolute inset-0 rounded-[2rem] p-[2px] overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className={`absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_20%,#0070f3_40%,#00dfd8_60%,transparent_80%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
                            />
                        </div>

                        <div className="relative h-full glass-dark border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center group-hover:border-brand-cyan/40 group-hover:bg-black/90 transition-all duration-500 shadow-2xl overflow-hidden z-10">
                            {/* Animated Icon Container */}
                            <div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-brand-${cat.color}/10 text-brand-${cat.color} border border-brand-${cat.color}/20 group-hover:bg-brand-${cat.color} group-hover:text-black transition-all duration-500 shadow-lg group-hover:shadow-brand-${cat.color}/40 relative overflow-hidden shrink-0`}>
                                <cat.icon size={32} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                                {cat.title}
                            </h3>
                            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] mb-8 group-hover:text-white/60 transition-colors">
                                {cat.subtitle}
                            </p>

                            <div className="mt-auto px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-brand-cyan group-hover:text-black transition-all duration-300">
                                Explore Detail
                            </div>

                            {/* Decorative corner element */}
                            <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-white/[0.02] group-hover:text-brand-cyan/[0.05] transition-colors pointer-events-none">0{i + 1}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export const CategoryDetail = ({ title, items, categoryNum, description }: { title: string, items: { title: string, desc: string }[], categoryNum: string, description?: string }) => (
    <Container className="justify-center py-4">
        <div className="flex items-center gap-5 md:gap-8 mb-8 md:mb-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                className="text-6xl md:text-8xl font-black text-brand-cyan leading-none shrink-0"
            >
                {categoryNum}
            </motion.div>
            <div>
                <SubHeading className="text-[10px] md:text-xs mb-2">SERVICE CATEGORY</SubHeading>
                <Heading gradient className="text-2xl md:text-4xl leading-tight !mb-0">{title}</Heading>
            </div>
        </div>
        {description && (
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-white/60 text-sm md:text-base mb-8 max-w-2xl font-light"
            >
                {description}
            </motion.p>
        )}
        <div className={`grid gap-4 md:gap-5 items-stretch ${items.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : items.length <= 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5'}`}>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.2 }
                    }}
                    className="group relative flex flex-col h-full"
                >
                    {/* Continuous Border Animation for detail cards */}
                    <div className="absolute inset-0 rounded-[1.5rem] p-[1.5px] overflow-hidden">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_20%,#0070f3_40%,#00dfd8_60%,transparent_80%)] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>

                    <div className="relative h-full flex flex-col bg-[#0a0a0a]/95 backdrop-blur-md rounded-[1.5rem] p-6 md:p-8 z-10 border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/20 group-hover:shadow-[0_0_30px_rgba(0,223,216,0.15)]">
                        {/* Compact Decorative Number */}
                        <div className="absolute top-0 right-0 p-6 text-5xl font-bold text-white/[0.01] group-hover:text-brand-cyan/[0.03] transition-colors pointer-events-none">0{i + 1}</div>

                        <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 group-hover:bg-brand-cyan group-hover:text-black transition-all duration-500 shadow-lg relative overflow-hidden shrink-0">
                            <span className="text-xs font-bold z-10">{i + 1}</span>
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                        </div>

                        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-brand-cyan transition-colors duration-300 leading-snug">
                            {item.title}
                        </h3>
                        <p className="text-white/40 text-xs md:text-sm leading-relaxed group-hover:text-white/80 transition-colors flex-grow">
                            {item.desc}
                        </p>

                        {/* Minimal accent */}
                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-[9px] uppercase tracking-widest font-bold text-brand-cyan/60">Module 0{i + 1}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/40" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </Container>
);

// Detail Slides using the reusable component
export const Cat1Details = () => (
    <CategoryDetail
        categoryNum="01"
        title="Artificial Intelligence & Advanced Analytics"
        items={[
            { title: "Generative AI for Healthcare", desc: "Revolutionizing patient care with custom AI models that produce synthetic data, automate clinical notes, and create engaging patient education materials." },
            { title: "AI-Powered Clinical Decision Support", desc: "Harnessing real-time patient data to empower clinicians with intelligent, evidence-based diagnostic and treatment recommendations." },
            { title: "Predictive Health Analytics", desc: "Sophisticated algorithms identifying at-risk individuals early, transforming healthcare from reactive to proactive intervention." },
            { title: "Intelligent Audit & Compliance", desc: "Continuous, automated monitoring of software and data integrity, ensuring ironclad compliance and instant anomaly detection." },
            { title: "AI-Enabled Billing Efficiency", desc: "Strategic automation of medical coding and billing, slashing denials and accelerating reimbursement cycles." }
        ]}
    />
);

export const Cat5Details = () => (
    <CategoryDetail
        categoryNum="04"
        title="Software Compliance"
        description="This critical group demonstrates your commitment to security, quality, and ongoing reliability."
        items={[
            { title: "Quality Assurance (QA) for Medical Software", desc: "Ensuring software reliability and performance through comprehensive SQA and SDLC management." },
            { title: "IEC 62304 Compliance & Consultation (Medical Device Software)", desc: "Expert guidance on Medical Device Software lifecycle processes to meet international safety standards." },
            { title: "HIPAA Compliance & Security Implementation", desc: "Implementing enterprise-grade encryption and access controls for Protected Health Information (PHI)." },
            { title: "ONC Health IT Certification Support", desc: "Strategic assistance in navigating the certification process for health information technology." },
            { title: "Ongoing Maintenance & Technical Support (IT Support for Medical Software)", desc: "Reliable IT support, bug fixes, security patches, and continuous performance monitoring." }
        ]}
    />
);

export const Cat2Details = () => {
    const items = [
        { title: "Custom Medical Web Applications", desc: "Secure, scalable, and user-friendly web-based platforms for clinical, administrative, or patient use." },
        { title: "Medical Mobile Apps", desc: "Native and cross-platform mobile applications for patients, providers, and field researchers." },
        { title: "Remote Patient Monitoring (RPM)", desc: "Comprehensive platforms with patient-facing apps and provider dashboards for remote health tracking." },
        { title: "Electronic Health Records (EHR)", desc: "Comprehensive EHR systems enabling seamless health data management, interoperability, and regulatory compliance." },
        { title: "Medical Imaging & Analysis", desc: "Software for secure storage, viewing, annotation, and AI-powered analysis of medical images." },
        { title: "Drug Discovery Platforms", desc: "Specialized software to manage research data, streamline clinical trials, and support the drug lifecycle." }
    ];

    return (
        <Container className="justify-center py-4">
            <div className="flex items-center gap-5 md:gap-8 mb-8 md:mb-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    className="text-6xl md:text-8xl font-black text-brand-cyan leading-none shrink-0"
                >
                    02
                </motion.div>
                <div>
                    <SubHeading className="text-[10px] md:text-xs mb-2">SERVICE CATEGORY</SubHeading>
                    <Heading gradient className="text-2xl md:text-4xl leading-tight !mb-0">Application & Platform Development</Heading>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 w-full">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                        className="group relative flex flex-col h-full"
                    >
                        <div className="absolute inset-0 rounded-2xl p-[1.5px] overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_20%,#0070f3_40%,#00dfd8_60%,transparent_80%)] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                        <div className="relative h-full flex flex-col bg-[#0a0a0a]/95 backdrop-blur-md rounded-2xl p-5 md:p-6 z-10 border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/20 group-hover:shadow-[0_0_30px_rgba(0,223,216,0.15)]">
                            <div className="mb-3 w-9 h-9 flex items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shrink-0">
                                <span className="text-xs font-bold">{i + 1}</span>
                            </div>
                            <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-brand-cyan transition-colors duration-300 leading-snug">{item.title}</h3>
                            <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/70 transition-colors flex-grow">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

export const Cat3Details = () => (
    <CategoryDetail
        categoryNum="03"
        title="Operational Efficiency & Automation"
        items={[
            { title: "Intelligent Appointment & Resource Scheduler", desc: "Develops smart scheduling systems that optimize provider time, patient preferences, and resource allocation, including auto-scheduling features." },
            { title: "Automated Clinical Workflow Orchestration", desc: "Creates software that automates routine administrative and clinical tasks (e.g., referral processing, lab order tracking) to improve efficiency." },
            { title: "Medical Research & Recommendation Engines", desc: "Builds platforms that help researchers and clinicians quickly find relevant studies, guidelines, and clinical trial information." }
        ]}
    />
);

export const Cat4Details = () => {
    const items = [
        { title: "DevOps & Cloud Infrastructure", desc: "Automate deployments, manage cloud infrastructure (AWS, Azure, GCP), and ensure high availability and scalability." },
        { title: "SaaS Enablement & Modernization", desc: "Transform traditional medical software into modern, scalable Software-as-a-Service (SaaS) models." },
        { title: "Quality Assurance & Validation", desc: "Comprehensive testing including functionality, security, performance, and compliance validation (IQ/OQ/PQ)." },
        { title: "Ongoing Maintenance & Support", desc: "Reliable IT support, bug fixes, security patches, and continuous performance monitoring." }
    ];

    return (
        <Container className="justify-center py-4">
            <div className="flex items-center gap-5 md:gap-8 mb-8 md:mb-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    className="text-6xl md:text-8xl font-black text-brand-cyan leading-none shrink-0"
                >
                    05
                </motion.div>
                <div>
                    <SubHeading className="text-[10px] md:text-xs mb-2">SERVICE CATEGORY</SubHeading>
                    <Heading gradient className="text-2xl md:text-4xl leading-tight !mb-0">Infrastructure & Lifecycle Management</Heading>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="group flex gap-5 items-start"
                    >
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 group-hover:bg-brand-cyan group-hover:text-black transition-all duration-500 shadow-lg">
                            <span className="text-sm font-bold">0{i + 1}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-brand-cyan transition-colors duration-300">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
                            <div className="mt-3 h-px w-full bg-gradient-to-r from-brand-cyan/20 via-brand-blue/10 to-transparent" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Container>
    );
};

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

// 13. Pricing
export const Pricing = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const plans = [
        {
            tier: "Basic Plan / Patient",
            price: "$25 - $30",
            desc: "Essential remote monitoring for individual patients.",
            features: ["Patient-Doctor Chat", "Adjustable Clinical Values", "High/Low Alert System", "Dual Notifications"]
        },
        {
            tier: "Business Plan / Clinic",
            price: "$500 - $700",
            desc: "Comprehensive solutions for clinics to manage their practice.",
            features: [
                "Patient-Doctor Chat",
                "Adjustable Clinical Values",
                "High/Low Alert System",
                "Dual Notifications",
                "Clinic Integration",
                "Practice Dashboard",
                "Staff Access Controls"
            ]
        },
        {
            tier: "Premium Plan / Customized",
            price: "$1k - $2k",
            desc: "Unlimited scale for large organizations and RPM projects.",
            features: [
                "Patient-Doctor Chat",
                "Adjustable Clinical Values",
                "High/Low Alert System",
                "Dual Notifications",
                "Clinic Integration",
                "Practice Dashboard",
                "Staff Access Controls",
                "Unlimited Patients & Practices",
                "AI Extensions",
                "Advanced RPM project tools",
                "Custom Integration Options"
            ]
        }
    ];

    return (
        <Container className="text-center items-center pt-16 pb-8 md:pt-20 md:pb-10 !min-h-0 min-h-screen relative overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center">
                <div className="mb-4 md:mb-6 text-center">
                    <Heading gradient className="text-2xl md:text-3xl lg:text-5xl !mb-2">Flexible Software Solutions</Heading>
                    <p className="max-w-2xl mx-auto text-xs md:text-sm lg:text-base text-white/50 font-light leading-relaxed px-4">
                        Choose the perfect plan for your healthcare innovation journey, tailored to scale with your institution's needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full items-stretch max-md:max-w-md max-md:mx-auto">
                    {plans.map((plan, i) => {
                        const isHighlighted = hoveredIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`relative p-[1px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col ${isHighlighted ? 'bg-gradient-to-b from-brand-cyan/50 to-brand-blue/50 shadow-[0_0_40px_rgba(0,112,243,0.2)] scale-[1.01]' : 'bg-white/10 border border-white/5'}`}
                            >
                                <div className="bg-[#080808]/95 backdrop-blur-sm rounded-[calc(2rem-1px)] md:rounded-[calc(2.5rem-1px)] px-5 py-5 md:px-6 md:py-6 lg:px-8 lg:py-7 h-full flex flex-col items-center">
                                    <h3 className={`text-sm md:text-base lg:text-lg font-bold mb-1 transition-colors duration-300 ${isHighlighted ? 'text-brand-cyan' : 'text-white'} whitespace-nowrap`}>{plan.tier}</h3>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-2xl md:text-3xl lg:text-5xl font-black text-white">{plan.price}</span>
                                    </div>
                                    <p className="text-white/40 text-[10px] md:text-xs lg:text-sm mb-4 leading-tight text-center h-8 md:h-10 flex items-center justify-center italic">{plan.desc}</p>

                                    <div className="w-full space-y-1 md:space-y-1.5 lg:space-y-2 mb-6 border-t border-white/5 pt-4">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2 md:gap-3 text-left">
                                                <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 transition-colors duration-300 ${isHighlighted ? 'bg-brand-cyan' : 'bg-brand-cyan/40'}`} />
                                                <span className="text-[10px] md:text-[11px] lg:text-sm text-white/70 leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className={`mt-auto w-full py-2.5 md:py-3 rounded-xl font-bold tracking-widest uppercase text-[10px] md:text-xs transition-all duration-300 ${isHighlighted ? 'bg-brand-cyan text-black hover:bg-white hover:scale-[1.02] shadow-[0_0_15px_rgba(0,223,216,0.2)]' : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/20'}`}>
                                        Choose Plan
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-cyan/5 blur-[120px] -z-10 pointer-events-none opacity-50" />
        </Container>
    );
};

// Thank You Slide
export const ThankYou = () => (
    <Container className="text-center items-center justify-center p-6 md:p-12">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-dark p-6 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 max-w-2xl w-full relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />

            <Heading gradient>THANK YOU</Heading>

            <div className="h-px w-24 bg-brand-cyan/30 mx-auto mb-6" />

            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed mb-8 max-w-xl mx-auto">
                Your comprehensive software solution partner, guiding you from
                initial conceptualization to the realization of a full scale
                commercial reality.
            </p>

            <motion.a
                href="https://www.rmt-usa.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, color: '#00dfd8' }}
                className="text-sm md:text-base font-mono tracking-[0.3em] text-white/40 uppercase cursor-pointer hover:shadow-[0_0_20px_rgba(0,223,216,0.2)] px-6 py-2 rounded-full border border-white/5"
            >
                www.rmt-usa.com
            </motion.a>
        </motion.div>
    </Container>
);
