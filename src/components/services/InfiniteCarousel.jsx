import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { animate, useMotionValue, motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { infiniteCarouselImgs } from '../../constants/services';
import InfiniteCarouselCard from './InfiniteCarouselCard';

const InfiniteCarousel = () => {
  useGSAP(() => {
    gsap.to('#production', { opacity: 1, y: 0 });
  }, []);

  const FAST_DURATION = 75;
  const SLOW_DURATION = 150;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <section className="py-8 mb-[500px] mt-32">
      <div className="mb-24 w-full md:flex flex-col items-start justify-between">
        <h1 id="production" className="section-heading">
          Discover Our Creativity
        </h1>
        <p className="font-normal text-xl text-left mt-6">
          Witness the results of our passion and dedication.
        </p>
      </div>
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...infiniteCarouselImgs, ...infiniteCarouselImgs].map((item, idx) => (
          <InfiniteCarouselCard image={item} key={idx} />
        ))}
      </motion.div>
    </section>
  );
};

export default InfiniteCarousel;
