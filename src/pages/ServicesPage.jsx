import {
  HeadingText,
  ServicesCarousel,
  AnimatedRoutes,
  TextParallax,
  ServicesStats,
  ServicesProduct,
  ServicesVideoText,
  InfiniteCarousel,
} from '../components';

const ServicesPage = () => {
  return (
    <AnimatedRoutes>
      <section className="heading-style">
        <HeadingText
          heading="Build your Vision"
          subHeading="change your business path from 0 to 100 real quick"
          headingID="servicesPageTitle"
        />
        <ServicesProduct />
        <ServicesVideoText />
        <TextParallax />
        <InfiniteCarousel />
        <ServicesStats />
        <ServicesCarousel />
      </section>
    </AnimatedRoutes>
  );
};

export default ServicesPage;
