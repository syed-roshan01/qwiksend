import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-surface-darker" />
      
      <div className="absolute inset-0 grid-pattern" />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: '#20C65A',
          filter: 'blur(120px)',
          top: '-10%',
          right: '-10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.02]"
        style={{
          background: '#20C65A',
          filter: 'blur(100px)',
          bottom: '20%',
          left: '-5%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="absolute inset-0 bg-surface-darker/50" />
    </div>
  );
}
