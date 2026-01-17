import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroTag() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6"
    >
      <Sparkles className="w-4 h-4 text-cyan-400" />
    </motion.div>
  );
}
