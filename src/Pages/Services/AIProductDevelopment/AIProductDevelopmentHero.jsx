import { useEffect, useState } from "react";
import FloatingParticles from "../AIProductDevelopment/Components/FloatingParticles";
import HeroButtons from "../AIProductDevelopment/Components/HeroButtons";
import AIBusinessGrowthSection from "../AIProductDevelopment/Components/AIBusinessGrowthSection";
import AIBusinessProcessSection from "../AIProductDevelopment/Components/AIBusinessProcessSection";
import CurvedLoop from "../../../Components/CurvedLoop/CurvedLoop";
import MagicBento from "../../../Components/MagicBento/MagicBento";
import { motion } from "framer-motion";

export default function AIProductDevelopment() {
    const [mounted, setMounted] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.3,
            },
        },
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative min-h-screen bg-[#060010] overflow-hidden flex items-center justify-center"
            >
                {/* Background grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                <FloatingParticles />

                {/* Centered content */}
                <div className="relative z-10 w-full flex justify-center px-6">
                    <div className="max-w-7xl w-full flex flex-col items-center text-center">

                        <div
                            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Transforming Ideas into Scalable <br />
                                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    AI Products and Solutions
                                </span>
                            </h1>

                            <p className="text-xl text-amber-200/70 mb-8 leading-relaxed max-w-xl mx-auto">
                                We design and develop AI products that drive efficiency, automation, and smarter decisions. Our teams build scalable solutions tailored to your needs, working closely with you to turn ideas into AI products aligned with business goals.
                            </p>

                            <HeroButtons />
                        </div>

                    </div>
                </div>
            </motion.div>
            <hr />
            <AIBusinessGrowthSection />
            <hr />
            <AIBusinessProcessSection />
            <section className="bg-[#060010] flex flex-col items-center justify-center overflow-hidden">
                <CurvedLoop marqueeText="Error - Hive Solution ✦" speed={2} curveAmount={120} direction="right" interactive={true} />
                <MagicBento textAutoHide={true} enableStars={true} enableSpotlight={true} enableBorderGlow={true} enableTilt={false} enableMagnetism={false} clickEffect={false} spotlightRadius={250} particleCount={8} glowColor="245, 158, 11" />
            </section>

        </>

    );
}