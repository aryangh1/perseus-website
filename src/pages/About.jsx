import { AboutSection } from '../components';

const About = () => {
  return (
    <section>
      <div className="mt-24 mb-24">
        <h1 className="text-5xl lg:text-7xl font-semibold capitalize text-center">
          About us
        </h1>

        <div className="mx-auto max-w-screen-xl text-center py-12">
          <h2 className="mb-4 text-4xl tracking-tight leading-none text-white md:text-5xl lg:text-6xl capitalize">
            We transform brand in the digital world.
          </h2>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 hiw-text">
            We are your partner in every step of your brand's evolution,
            dedicated to turning your vision into reality and ensuring a
            successful journey.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/contact" className="btn px-12">
              Get started
            </a>
          </div>
        </div>

        <AboutSection />
      </div>
    </section>
  );
};

export default About;
