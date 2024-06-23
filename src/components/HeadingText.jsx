import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const HeadingText = ({
  heading,
  subHeading,
  headingID,
  parentHeadingStyle,
  headingStyle,
  subHeadingStyle,
}) => {
  useGSAP(() => {
    gsap.to(`#${headingID}`, { opacity: 1, y: 0, duration: 5 });
  }, []);

  return (
    <div className={`pl-24 max-sm:pl-0 ${parentHeadingStyle}`}>
      <h2
        className={`text-5xl lg:text-7xl font-semibold mb-6 opacity-0 ${headingStyle}`}
        id={headingID}
      >
        {heading}
      </h2>
      <p
        className={`font-normal text-xl text-left hiw-text mb-6 ${subHeadingStyle}`}
      >
        {subHeading}
      </p>
    </div>
  );
};

HeadingText.propTypes = {
  heading: PropTypes.string.isRequired,
  headingID: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  parentHeadingStyle: PropTypes.string,
  headingStyle: PropTypes.string,
  subHeadingStyle: PropTypes.string,
};

export default HeadingText;
