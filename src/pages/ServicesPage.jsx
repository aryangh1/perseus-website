import {
  HeadingText,
  ServicesCarousel,
  AnimatedRoutes,
  TextParallax,
  ServicesStats,
  ServicesProduct,
  ServicesVideoText,
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
        {/* <ServicesVideoText /> */}
        <ServicesProduct />
        <TextParallax />
        <ServicesCarousel />
        <ServicesStats />
      </section>
    </AnimatedRoutes>
  );
};

export default ServicesPage;
