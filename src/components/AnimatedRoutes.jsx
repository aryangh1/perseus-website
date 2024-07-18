import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 12, transition: { duration: 1 } },
  exit: { opacity: 0, y: 0 },
};

const AnimatedRoutes = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoutes;
