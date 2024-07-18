import { HeadingText, ServicesCarousel, AnimatedRoutes } from '../components';
import { stats } from '../constants/index';

const ServicesPage = () => {
  return (
    <AnimatedRoutes>
      <section className="heading-style">
        <HeadingText
          heading="Build your Vision"
          subHeading="change your business path from 0 to 100 real quick"
          headingID="servicesPageTitle"
        />

        <ServicesCarousel />

        <section className="mx-auto max-w-7xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7">{stat.name}</dt>
                <dd className="order-first text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </section>
    </AnimatedRoutes>
  );
};

export default ServicesPage;
