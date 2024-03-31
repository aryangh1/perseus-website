import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { servicesSection } from '../constants';

const Services = () => {
  useGSAP(() => {
    gsap.to('#services', {
      scrollTrigger: '#services',
      opacity: 1,
      duration: 2,
    });
  });

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mt-32 mb-24 pl-24 max-sm:pl-0">
          <h2 className="text-5xl lg:text-7xl font-semibold">Designed</h2>
          <h2 className="text-5xl lg:text-7xl font-semibold">
            for business teams like yours.
          </h2>
        </div>
        <div
          id="services"
          className="opacity-0 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
        >
          {servicesSection.map((service) => (
            <div key={service.id}>
              <div className="flex justify-start items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                <img
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  src={service.icon}
                  alt="icon"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-gray">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
