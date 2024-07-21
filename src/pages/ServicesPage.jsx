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
          heading="Accelerate Your Reach"
          subHeading="Turn your marketing vision into reality fast."
          headingID="servicesPageTitle"
        />
        <ServicesProduct />
        <ServicesVideoText />
        <ServicesCarousel />
        <TextParallax />
        <InfiniteCarousel />
        <ServicesStats />
      </section>
    </AnimatedRoutes>
  );
};

export default ServicesPage;
