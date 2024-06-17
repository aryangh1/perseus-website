import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { EmailForm } from '../components';

const Contact = () => {
  useGSAP(() => {
    gsap.to('#contactPageTitle', { opacity: 1, y: 0, duration: 5 });
  }, []);

  return (
    <section>
      <div className="mt-12 mb-8 text-center">
        <h2
          id="contactPageTitle"
          className="text-5xl lg:text-7xl font-semibold max-sm:text-4xl opacity-0"
        >
          Get in touch with us.
        </h2>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-lg leading-8 hiw-text">
          Reach out now and take the first step towards achieving your goals
        </p>
      </div>
      <EmailForm />
    </section>
  );
};

export default Contact;
