import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import {
  taurus1Img,
  taurus2Img,
  genesis1Img,
  kengo1Img,
  kengo2Img,
  droneRealEstateImg,
} from '../utils';

const Features = () => {
  useGSAP(() => {
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 25 }
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
          <div className="mt-32 mb-24 max-sm:px-4">
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
                  alt="gym photo"
                  className="feature-video g_grow"
                />
              </div>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={taurus1Img}
                    alt="gym photo"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={taurus2Img}
                    alt="gym photo"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Discover the art of digital distinction with {''}
                    <span className="text-white">
                      Perseus Creative Studio. {''}
                    </span>
                    Here, strategic marketing and creative design unite to
                    enhance your online presence. Partner with us for a journey
                    of growth and standout brand recognition.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Perseus Creative Studio melds creativity with strategy to
                    transform your digital identity.{' '}
                    <span className="text-white">
                      Our custom solutions are crafted to make your brand{' '}
                    </span>
                    resonate and captivate. Step into a partnership that's set
                    on forging your legacy of digital success.
                  </p>
                </div>
              </div>
              <div className="feature-video-container mt-12 max-sm:hidden">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={kengo1Img}
                    alt="real estate image"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={kengo2Img}
                    alt="real estate image"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-video-container mt-4 max-sm:hidden">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={droneRealEstateImg}
                    alt="drone image"
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
