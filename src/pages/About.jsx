import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { AboutSection } from '../components';

const About = () => {
  useGSAP(() => {
    gsap.to('#aboutPageTitle', { opacity: 1, y: 0, duration: 5 });
  }, []);

  return (
    <section className="max-sm:px-4">
      <div className="mt-12 mb-24">
        <h1
          className="text-5xl lg:text-7xl font-semibold text-center opacity-0 max-sm:text-4xl"
          id="aboutPageTitle"
        >
          We transform brands in the digital world.
        </h1>

        <div className="mx-auto max-w-screen-xl text-center py-12 px-4">
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 hiw-text max-sm:text-md">
            We are your partner in every step of your brand's evolution,
            dedicated to turning your vision into reality and ensuring a
            successful journey.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/contact" className="btn px-12">
              Get started
            </a>
          </div>
        </div>

        <AboutSection />
      </div>
    </section>
  );
};

export default About;
