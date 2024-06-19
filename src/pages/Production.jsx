import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import {
  InstaFeed,
  YotubeFeed,
  SecondGallery,
  ThirdGallery,
  ForthGallery,
} from '../components';
import { youtubeEmbedIds } from '../constants';
import { perseusWhiteImg } from '../utils';

const Production = () => {
  useGSAP(() => {
    gsap.to('#productionSubheading', { opacity: 1, y: 0 });
    gsap.to('#servicesPageTitle', { opacity: 1, y: 0, duration: 5 });
    gsap.to('#servicesSubheading', { opacity: 1, y: 0, duration: 2 });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full mt-12 px-24 max-sm:px-12">
      <div className="pl-24 max-sm:pl-0">
        <h2
          className="text-5xl lg:text-7xl font-semibold mb-6 opacity-0"
          id="servicesPageTitle"
        >
          Expertise in Photography.
        </h2>
        <p className="font-normal text-xl text-left hiw-text mb-12 ">
          Dive into our portfolio of creative photoshoots to experience our
          commitment to quality and innovation.
        </p>
      </div>
      <SecondGallery />
      <div className="flex-col flex-center w-full">
        <img src={perseusWhiteImg} alt="logo" width={240} height={240} />
      </div>
      <div className="mb-12 w-full md:flex items-end justify-between pl-24 max-sm:pl-24">
        <h1 id="servicesSubheading" className="section-heading">
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

      <div className="w-full md:flex items-end justify-between pl-24 max-sm:pl-0 mb-6 mt-[-120px] max-sm:mt-[-340px]">
        <h1 id="productionSubheading" className="section-heading">
          Our Video Portfolio
        </h1>
      </div>
      <div>
        <p className="font-normal text-xl text-center max-sm:text-left hiw-text">
          Explore our creative video projects and see our quality and creativity
          in action.
        </p>
        <div className="flex flex-wrap justify-around mt-4 max-sm:px-12 gap-x-6">
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
  );
};

export default Production;
