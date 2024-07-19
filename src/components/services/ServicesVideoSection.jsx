import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const ServicesVideoSection = ({ setBgOpacity, children, ...props }) => {
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['start end', 'start start'],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.8, 0.9, 1],
    [0, 0, 1, 1, 0, 0]
  );

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 0.3, 0.3, 0.7]
  );

  bgOpacity.on('change', (val) => {
    setBgOpacity(val);
  });

  return (
    <section
      className="relative flex flex-col items-center justify-center mt-[300px] mb-[-900px]"
      {...props}
    >
      <motion.div
        ref={contentRef}
        className="min-h-screen text-5xl font-bold leading-snug text-center max-w-[80ch] text-white"
        style={{ opacity: contentOpacity }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ServicesVideoSection;
