import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import {
  InstaFeed,
  YotubeFeed,
  SecondGallery,
  ThirdGallery,
  ForthGallery,
  HeadingText,
  AnimatedRoutes,
} from '../components';
import { youtubeEmbedIds } from '../constants';
import { perseusWhiteImg } from '../utils';

const Production = () => {
  useGSAP(() => {
    gsap.to('#productionSubheading', { opacity: 1, y: 0 });
    gsap.to('#productionPageTItle', { opacity: 1, y: 0, duration: 5 });
    gsap.to('#productionSubHeading', { opacity: 1, y: 0, duration: 2 });
  }, []);

  return (
    <AnimatedRoutes>
      <section className="heading-style">
        <HeadingText
          heading="Expertise in Photography."
          subHeading="Dive into our portfolio of creative photoshoots to experience our
          commitment to quality and innovation."
          headingID="productionPageTItle"
        />
        <SecondGallery />
        <div className="flex-col flex-center w-full">
          <img src={perseusWhiteImg} alt="logo" width={240} height={240} />
        </div>
        <div className="mb-12 w-full md:flex items-end justify-between pl-24 max-sm:pl-0">
          <h1 id="productionSubHeading" className="section-heading">
            Personal Branding
          </h1>
        </div>
        <ThirdGallery />
        <div className="hiw-text-container pl-24 max-sm:pl-0 mb-24">
          <div className="flex-1 flex justify-center flex-col">
            <p className="hiw-text">Data-Driven Strategies</p>
            <p className="hiw-bigtext">Our strategic planning process</p>
            <p className="hiw-text">
              leverages data and insights to help you outcompete your rivals in
              the digital landscape.
            </p>
          </div>

          <div className="flex flex-1 justify-center flex-col gap-12">
            <p className="hiw-text">
              Unleash Your Brand's Potential. <br />{' '}
              <span className="text-white">
                We don't believe in one-size-fits-all solutions.
              </span>
            </p>

            <p className="hiw-text">
              We take the time{' '}
              <span className="text-white">
                to understand your unique needs <br />
                and craft a customized marketing{' '}
              </span>
              strategy that <br /> delivers exceptional results.
            </p>
          </div>
        </div>
        <ForthGallery />
        <div className="pl-24 max-sm:pl-0">
          <h2 className="text-5xl lg:text-7xl font-semibold mb-6">
            Immersive Videography.
          </h2>
          <p className="font-normal text-xl text-left hiw-text mb-12">
            Witness the creativity behind our social media!
            <br />
            Explore our captivating video productions.
          </p>
        </div>

        <InstaFeed />

        <div className="w-full md:flex items-end justify-center mb-6 mt-[-140px] max-sm:mt-[-80px]">
          <h1 id="productionSubheading" className="section-heading text-center">
            Our Video Portfolio
          </h1>
        </div>
        <div>
          <p className="font-normal text-xl text-center hiw-text">
            Explore our creative video projects and see our quality and
            creativity in action.
          </p>
          <div className="flex flex-wrap items-start justify-around mt-4 gap-x-6">
            {youtubeEmbedIds.map((youtubeEmbedId) => (
              <YotubeFeed
                key={youtubeEmbedId.id}
                embedId={youtubeEmbedId.embedId}
              />
            ))}
          </div>
          <div className="flex flex-col items-center translate-y-10">
            <a
              href="https://www.youtube.com/@PerseusCreativeStudio"
              target="_blank"
              className="btn"
            >
              More Videos
            </a>
          </div>
        </div>
        <div className="py-10"></div>
      </section>
    </AnimatedRoutes>
  );
};

export default Production;
