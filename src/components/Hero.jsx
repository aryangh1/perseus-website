import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { perseusSmallHeroVideo, perseusLogoMotion } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? perseusSmallHeroVideo : perseusLogoMotion
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(perseusSmallHeroVideo);
    } else {
      setVideoSrc(perseusLogoMotion);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, y: -120, delay: 1.5 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative mt-6">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            loop
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-120"
      >
        <a href="/contact" className="btn">
          Get In Touch
        </a>
        <p className="font-normal text-xl max-sm:text-center">
          Your Path to Online Excellence and Business Growth
        </p>
      </div>
    </section>
  );
};

export default Hero;
