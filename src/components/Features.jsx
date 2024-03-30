import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { animateWithGsap } from '../utils/animations';
import {
  taurus1Img,
  taurus2Img,
  genesis1Img,
  kengo1Img,
  kengo2Img,
  CFR1Img,
} from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="scrim-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Blending</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              strategies with creativity.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="feature-video-container mb-4 mt-16">
              <div className="overflow-hidden flex-1 h-[50vh]">
                <img
                  src={genesis1Img}
                  alt="titanium"
                  className="feature-video g_grow"
                />
              </div>
            </div>

            {/* <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div> */}

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={taurus1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={taurus2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    At Perseus Studio{' '}
                    <span className="text-white">
                      we blend innovative strategies and creative storytelling
                      to elevate your brand
                    </span>
                    , from impactful online campaigns to visually stunning
                    content.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Perseus Studio specializes in creating strong digital
                    presences. we combine strategic thinking with creative flair{' '}
                    <span className="text-white">
                      to develop unique brand identities.{' '}
                    </span>
                  </p>
                </div>
              </div>

              <div className="feature-video-container mt-12">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={kengo1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={kengo2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-video-container mt-4">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={CFR1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
