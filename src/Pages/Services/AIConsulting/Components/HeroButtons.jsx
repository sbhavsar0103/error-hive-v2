import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="flex flex-col sm:flex-row gap-4 mt-8"
    >
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
      >
        Get Started
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:bg-cyan-500/10"
      >
        View Services
      </motion.button>
    </motion.div>
  );
}
