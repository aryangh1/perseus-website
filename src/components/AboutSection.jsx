import { aboutSection } from '../constants';

const AboutSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl sm:heading-style">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-6">
          {aboutSection.map((about) => (
            <div className="p-2 sm:px-2" key={about.id}>
              <h3 className="mb-7 text-2xl font-medium md:text-3xl">
                {about.label}
              </h3>
              <p className="mb-7 text-lg hiw-text">{about.desc}</p>
              <p className="mb-7 text-lg hiw-text">{about.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
