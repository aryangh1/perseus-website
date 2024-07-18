import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const ServicesProductCard = ({
  tintColor = '#000000',
  title,
  description = '',
  detailContent = '',
  children,
  ...props
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const hasDetail = detailContent.length > 0;

  const animationVariants = {
    main: {
      color: tintColor,
      transition: { delay: 0.5 },
    },
    detail: { color: '#000' },
  };

  return (
    <motion.div
      className="relative h-[800px] max-sm:h-[400px] rounded-xl bg-zinc px-8 pt-8 overflow-hidden flex-col gap-2"
      {...props}
      initial={false}
      animate={showDetail ? 'detail' : 'main'}
    >
      <motion.h2
        className="relative text-3xl font-medium z-50 text-white"
        variants={animationVariants}
      >
        {title}
      </motion.h2>
      <p className="font-medium hiw-text !text-sm mt-2">{description}</p>
      <>{children}</>
      {hasDetail && <ToggleButton onClick={() => setShowDetail(!showDetail)} />}
      <AnimatePresence>
        {showDetail && (
          <DetailContainer tintColor={tintColor} content={detailContent} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DetailContainer = ({ tintColor, content }) => {
  const animationVariants = {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { delay: 0.5 } },
    },

    content: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { delay: 0.5 }, bounce: 0 },
      exit: { y: -100, opacity: 0 },
    },
  };

  return (
    <motion.div
      className="bg-white absolute inset-0 flex justify-center items-center p-8"
      variants={animationVariants['container']}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.p
        className="text-xl max-w-[80ch] mx-auto text-zinc font-bold max-sm:text-sm"
        style={{ backgroundColor: tintColor }}
        variants={animationVariants['content']}
      >
        {content}
      </motion.p>
    </motion.div>
  );
};

const ToggleButton = ({ ...props }) => {
  const animationVariants = {
    main: {
      rotate: 0,
    },
    detail: { rotate: 45 },
  };

  return (
    <motion.button
      className="absolute right-8 bottom-8 size-10 rounded-full cursor-pointer flex justify-center items-center z-50 bg-zinc"
      {...props}
      variants={animationVariants}
      transition={{ bounce: 0 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
          clipRule="evenodd"
        />
      </svg>
    </motion.button>
  );
};

export default ServicesProductCard;
