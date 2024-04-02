import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';

import { clientImg } from '../constants';

const Clients = () => {
  useGSAP(() => {
    animateWithGsap('#features_title2', {
      y: 0,
      opacity: 1,
      x: 30,
      duration: 2,
    });
  });

  return (
    <section>
      <div className="scrim-max-width">
        <div className="my-24 w-full">
          <h1
            id="features_title2"
            className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-x-0"
          >
            Trusted by the Bests.
          </h1>
        </div>

        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {clientImg.map((client) => (
            <img
              key={client.id}
              src={client.srcImg}
              width={158}
              height={48}
              alt="partner's logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
