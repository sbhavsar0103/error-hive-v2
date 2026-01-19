import { useEffect, useState } from "react";
import FloatingParticles from "../AIConsulting/Components/FloatingParticles";
import AIVisualization from "../AIConsulting/Components/AIVisualization";
import FloatingCard from "../AIConsulting/Components/FloatingCard";
import HeroStats from "../AIConsulting/Components/HeroStats";
import HeroButtons from "../AIConsulting/Components/HeroButtons";
import ProcessSection from "../AIConsulting/Components/ProcessSection";
import CurvedLoop from "../../../Components/CurvedLoop/CurvedLoop";
import MagicBento from "../../../Components/MagicBento/MagicBento";
import { motion } from "framer-motion";

import { Bot, LineChart, Network } from "lucide-react";

export default function AIConsultingHero() {
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
                className="relative min-h-screen bg-[#060010] overflow-hidden"
            >
                {/* Background grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                <FloatingParticles />

                <div className="relative z-10 w-full flex justify-center px-6 pt-40 pb-32">
                    <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE */}
                        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Transform Your Business with{" "}
                                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    AI Intelligence
                                </span>
                            </h1>

                            <p className="text-xl text-amber-200/70 mb-8 leading-relaxed max-w-xl">
                                Unlock the power of artificial intelligence to automate processes,
                                gain insights, and drive growth—tailored for your business.
                            </p>

                            <HeroButtons />
                            <HeroStats />
                        </div>

                        {/* RIGHT SIDE */}
                        <div className={`relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <div className="relative">

                                {/* Visualization Box */}
                                <div className="relative bg-[#1a0a22]/60 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/20">
                                    <AIVisualization />
                                </div>

                                {/* FLOATING CARDS */}
                                <FloatingCard
                                    icon={<Bot className="w-6 h-6 text-amber-400" />}
                                    title="Machine Learning"
                                    className="absolute -left-4 top-20 animate-float"
                                    delay={0}
                                />

                                <FloatingCard
                                    icon={<LineChart className="w-6 h-6 text-amber-400" />}
                                    title="Data Analytics"
                                    className="absolute -right-4 top-40 animate-float"
                                    delay={0}
                                />

                                <FloatingCard
                                    icon={<Network className="w-6 h-6 text-amber-400" />}
                                    title="Neural Networks"
                                    className="absolute -left-4 bottom-20 animate-float"
                                    delay={0}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
            <hr />
            <ProcessSection />
            <section className="bg-[#060010] flex flex-col items-center justify-center overflow-hidden">
                <CurvedLoop marqueeText="Error - Hive Solution ✦" speed={2} curveAmount={120} direction="right" interactive={true} />
                <MagicBento textAutoHide={true} enableStars={true} enableSpotlight={true} enableBorderGlow={true} enableTilt={false} enableMagnetism={false} clickEffect={false} spotlightRadius={250} particleCount={8} glowColor="245, 158, 11" />
            </section>

        </>

    );
}