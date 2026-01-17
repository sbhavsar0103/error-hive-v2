import { motion } from "framer-motion";
import { Brain, Zap } from "lucide-react";

export default function AIVisualization() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateX: 4, rotateY: -4 }}
            className="space-y-6"
        >


            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse">
                    <Brain className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                    <div className="h-3 bg-gradient-to-r from-cyan-500 to-transparent rounded-full mb-2 animate-pulse"></div>
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-transparent rounded-full w-3/4 animate-pulse"></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                    >
                        <Zap className="w-6 h-6 text-cyan-400 mb-2" />
                        <div className="h-2 bg-slate-600 rounded-full mb-2"></div>
                        <div className="h-2 bg-slate-600 rounded-full w-2/3"></div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-lg animate-wave"
                        style={{ height: `${40 + Math.random() * 60}px` }}
                    ></div>
                ))}
            </div>

        </motion.div>

    );
}
