import { AboutSection, HeadingText, Team, AnimatedRoutes } from '../components';

const About = () => {
  return (
    <AnimatedRoutes>
      <section className="heading-style">
        <HeadingText
          heading="Transform brands in the digital world."
          subHeading={`We are your partner in every step of your brand's evolution
            dedicated to turning your vision into reality and ensuring a
            successful journey.`}
          headingID="aboutPageTitle"
          parentHeadingStyle="!pl-0"
          headingStyle="text-center"
          subHeadingStyle="text-center"
        />

        <Team />

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 text-center">
          <a href="/contact" className="btn px-12">
            Get started
          </a>
        </div>

        <AboutSection />
      </section>
    </AnimatedRoutes>
  );
};

export default About;
