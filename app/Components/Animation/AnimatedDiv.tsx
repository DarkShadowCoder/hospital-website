import { motion } from "framer-motion";

export default function AnimatedDiv({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: -20,
      },

      visible: {
        opacity: 1,
        y: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
