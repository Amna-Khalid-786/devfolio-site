import { motion } from "motion/react";

export const BubblesBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-brand-blue/20"
                style={{
                    width: Math.random() * 300 + 100,
                    height: Math.random() * 300 + 100,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5,
                }}
            />
        ))}
    </div>
);

export const TechNetworkBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <motion.div
            animate={{
                background: [
                    "radial-gradient(circle at 20% 20%, rgba(0, 112, 243, 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 80%, rgba(0, 223, 216, 0.15) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 20%, rgba(0, 112, 243, 0.15) 0%, transparent 50%)",
                ],
            } as any}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
        />
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent w-64"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    rotate: `${Math.random() * 360}deg`,
                }}
                animate={{
                    opacity: [0, 0.8, 0],
                    scaleX: [0, 1, 0],
                    x: [0, 100, 200],
                }}
                transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                }}
            />
        ))}
    </div>
);

export const FloatingCubesBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute border border-white/10 glass-dark"
                style={{
                    width: 100 + Math.random() * 100,
                    height: 100 + Math.random() * 100,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                    y: [0, -50, 0],
                    z: [0, 100, 0],
                    opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5,
                }}
            />
        ))}
    </div>
);

export const AuroraBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-[20%] opacity-30"
            style={{
                background: 'radial-gradient(circle at 30% 30%, #0070f3 0%, transparent 40%), radial-gradient(circle at 70% 70%, #00dfd8 0%, transparent 40%)',
                filter: 'blur(100px)'
            }}
        />
    </div>
);

export const DNAHelixBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
        <div className="flex justify-around w-full h-full opacity-20">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 h-1 bg-brand-cyan rounded-full"
                    animate={{
                        y: ['0vh', '100vh'],
                        opacity: [0, 1, 0],
                        x: [Math.sin(i) * 20, Math.cos(i) * 20, Math.sin(i) * 20]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.2
                    }}
                />
            ))}
        </div>
    </div>
);

export const GridPulseBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <motion.div
            animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent"
        />
    </div>
);

export const GlowingWavesBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                animate={{
                    d: [
                        "M0,400 C300,300 600,500 900,400 C1200,300 1440,400 L1440,800 L0,800 Z",
                        "M0,400 C300,500 600,300 900,400 C1200,500 1440,400 L1440,800 L0,800 Z",
                        "M0,400 C300,300 600,500 900,400 C1200,300 1440,400 L1440,800 L0,800 Z"
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                fill="url(#wave-grad)"
                opacity="0.6"
            />
            <defs>
                <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0070f3" />
                    <stop offset="100%" stopColor="#00dfd8" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

export const CyberGridBG = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div 
            animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 via-transparent to-brand-cyan/5"
        />
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute h-px w-full bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent"
                style={{ top: `${20 * i + 10}%` }}
                animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 1, 0]
                }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'linear' }}
            />
        ))}
    </div>
);
