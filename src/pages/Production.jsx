import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { InstaFeed, YotubeFeed } from '../components';
import { youtubeEmbedIds } from '../constants';

const Production = () => {
  useGSAP(() => {
    gsap.to('#productionPageTitle', { opacity: 1, y: 0, duration: 5 });
    gsap.to('#productionSubheading', { opacity: 1, y: 0 });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full mt-12 px-24 max-sm:px-12">
      <div
        className="mb-24 pl-24 max-sm:pl-0 py-0 opacity-0"
        id="productionPageTitle"
      >
        <h2 className="text-5xl lg:text-7xl font-semibold">A closer look</h2>
        <h2 className="text-5xl lg:text-7xl font-semibold">
          at what we've done.
        </h2>
      </div>

      <div className="w-full md:flex items-end justify-between pl-24 max-sm:pl-0 mb-12">
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
