import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { perseusWhiteImg } from '../../utils';

const TextParallax = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={container} className="overflow-hidden mt-24">
      <Slide
        src={perseusWhiteImg}
        direction={'left'}
        left={'-40%'}
        progress={scrollYProgress}
      />
      <Slide
        src={perseusWhiteImg}
        direction={'right'}
        left={'-25%'}
        progress={scrollYProgress}
      />
      <Slide
        src={perseusWhiteImg}
        direction={'left'}
        left={'-75%'}
        progress={scrollYProgress}
      />
    </section>
  );
};

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} text="Exceed Expectations" />
      <Phrase src={props.src} text="Innovation Thrives" />
      <Phrase src={props.src} text="Boundless Creativity" />
    </motion.div>
  );
};

const Phrase = ({ src, text }) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className="text-[4.5vw]">{text}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img
          style={{ objectFit: 'cover' }}
          src={src}
          alt="perseus logo"
          className="h-full w-full"
        />
      </span>
    </div>
  );
};

export default TextParallax;
