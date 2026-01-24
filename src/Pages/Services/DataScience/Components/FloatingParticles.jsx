import { motion } from "framer-motion";

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.random() * 0.6 + 0.2 }}
          transition={{ duration: 1.5, delay: i * 0.05 }}
          className="absolute w-1 h-1 bg-amber-400 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
