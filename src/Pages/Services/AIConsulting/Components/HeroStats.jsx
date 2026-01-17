import { motion } from "framer-motion";

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-12 grid grid-cols-3 gap-8"
    >
      {[
        ["500+", "Projects Delivered"],
        ["98%", "Client Satisfaction"],
        ["50+", "AI Experts"],
      ].map(([value, label], i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="text-3xl font-bold text-white mb-1">{value}</div>
          <div className="text-slate-400 text-sm">{label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
