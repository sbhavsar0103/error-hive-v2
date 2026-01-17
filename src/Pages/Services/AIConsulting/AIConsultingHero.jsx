import { useEffect, useState } from "react";
import FloatingParticles from "../AIConsulting/Components/FloatingParticles";
import AIVisualization from "../AIConsulting/Components/AIVisualization";
import FloatingCard from "../AIConsulting/Components/FloatingCard";
import HeroStats from "../AIConsulting/Components/HeroStats";
import HeroButtons from "../AIConsulting/Components/HeroButtons";
import HeroTag from "../AIConsulting/Components/HeroTag";
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
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
        >

            {/* Background grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            {/* Floating particles */}
            <FloatingParticles />

            {/* MAIN WRAPPER — FULL WIDTH CENTER */}
            <div className="relative z-10 w-full flex justify-center px-6 pt-40 pb-32">

                {/* CENTERED GRID CONTAINER */}
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT COLUMN */}
                    <div
                        className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <HeroTag />

                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Transform Your Business with{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                AI Intelligence
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                            Unlock the power of artificial intelligence to automate processes,
                            gain insights, and drive growth. Our expert consultants deliver tailored
                            AI solutions for your unique challenges.
                        </p>

                        <HeroButtons />
                        <HeroStats />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div
                        className={`relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <div className="relative">

                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>

                            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                                <AIVisualization />
                            </div>

                            <FloatingCard
                                icon={<Bot className="w-6 h-6 text-cyan-400" />}
                                title="Machine Learning"
                                className="absolute -left-4 top-20 animate-float"
                                delay={0}
                            />

                            <FloatingCard
                                icon={<LineChart className="w-6 h-6 text-blue-400" />}
                                title="Data Analytics"
                                className="absolute -right-4 top-40 animate-float"
                                delay={0}
                            />

                            <FloatingCard
                                icon={<Network className="w-6 h-6 text-purple-400" />}
                                title="Neural Networks"
                                className="absolute -left-4 bottom-20 animate-float"
                                delay={0}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </motion.div>
    );
}
