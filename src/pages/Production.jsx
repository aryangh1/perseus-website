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
          Explore our creative photoshoots and see our quality and creativity in
          action.
        </p>
      </div>

      <SecondGallery />

      <div className="flex-col flex-center w-full">
        <img src={perseusWhiteImg} alt="logo" width={240} height={240} />
      </div>

      <div className="mb-12 w-full md:flex items-end justify-between pl-24 max-sm:pl-24">
        <h1 id="servicesSubheading" className="section-heading">
          Glimpse into our work
        </h1>
      </div>

      <ThirdGallery />

      <div className="hiw-text-container pl-24 max-sm:pl-0 mb-24">
        <div className="flex flex-1 justify-center flex-col">
          <p className="hiw-text">
            Connect With Us: Your Niche, Our Craft At Perseus Creative Studio,{' '}
            <span className="text-white">
              we embrace diversity in business sizes and niches, ensuring our
              services are meticulously tailored to meet your unique needs.
            </span>
          </p>

          <p className="hiw-text">
            Let's collaborate{' '}
            <span className="text-white">
              to bring your vision to life with{' '}
            </span>
            unparalleled customization.
          </p>
        </div>

        <div className="flex-1 flex justify-center flex-col">
          <p className="hiw-text">Dominate the Digital World</p>
          <p className="hiw-bigtext">Outcompete</p>
          <p className="hiw-text">with Strategic Planning</p>
        </div>
      </div>

      <ForthGallery />

      <div className="pl-24 max-sm:pl-0">
        <h2 className="text-5xl lg:text-7xl font-semibold mb-6">
          Hands on Videopgraphy.
        </h2>
        <p className="font-normal text-xl text-left hiw-text mb-12 ">
          Explore our creative photoshoots and see our quality and creativity in
          action.
        </p>
      </div>

      <InstaFeed />

      <div className="w-full md:flex items-end justify-between pl-24 max-sm:pl-0 mb-12 mt-[-120px]">
        <h1 id="productionSubheading" className="section-heading">
          Our Video Portfolio
        </h1>
      </div>
      <div>
        <p className="font-normal text-xl text-center max-sm:text-left hiw-text">
          Explore our creative video projects and see our quality and creativity
          in action.
        </p>
        <div className="flex max-sm:flex-col justify-around gap-6 mt-4 px-24 max-sm:px-12">
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
