import { motion } from "framer-motion";

export default function FloatingCard({ icon, title, className, delay }) {
  return (
    <motion.div
      className={`bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 flex items-center gap-3 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 120,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
      }}
    >
      {icon}
      <span className="text-white font-medium text-sm">{title}</span>
    </motion.div>
  );
}
