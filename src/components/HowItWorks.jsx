import { useRef, useState, useEffect } from 'react';
import {
  frameImg,
  perseusWhiteImg,
  coqVideo,
  coqLargeVideo,
  adsVideo,
} from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 1505 && 102 ? coqLargeVideo : coqVideo
  );

  const videoRef = useRef();

  const handleVideoSrcSet = () => {
    if (window.innerWidth > 1505) {
      setVideoSrc(coqLargeVideo);
    } else {
      setVideoSrc(coqVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.from('#logo', {
      scrollTrigger: {
        trigger: '#logo',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="sm:px-10 px-5">
      <div className="screen-max-width">
        <div id="logo" className="flex-center w-full my-20">
          <img src={perseusWhiteImg} alt="logo" width={240} height={360} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Brand Solutions
            <br /> for All Sizes and Visions.
          </h2>

          <p className="hiw-subtitle">
            Customized Marketing That Adapts to Every Brand's Scale and Scope.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                ref={videoRef}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Your Success, Our Success
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Connect With Us: Your Niche, Our Craft At Perseus Creative Studio,{' '}
              <span className="text-white">
                we embrace diversity in business sizes and niches, ensuring our
                services are meticulously tailored to meet your unique needs.
              </span>
            </p>

            <p className="hiw-text g_fadeIn">
              Let's collaborate{' '}
              <span className="text-white">
                to bring your vision to life with{' '}
              </span>
              unparalleled customization.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Dominate the Digital World</p>
            <p className="hiw-bigtext">Outcompete</p>
            <p className="hiw-text">with Strategic Planning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
