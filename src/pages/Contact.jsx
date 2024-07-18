import { EmailForm, HeadingText, AnimatedRoutes } from '../components';

const Contact = () => {
  return (
    <AnimatedRoutes mode="wait">
      <section className="heading-style">
        <HeadingText
          heading="Get in touch with us."
          subHeading="Reach out now and take the first step towards achieving your goals."
          headingID="contactPageTitle"
          parentHeadingStyle="!pl-0"
          headingStyle="text-center"
          subHeadingStyle="text-center"
        />
        <EmailForm />
      </section>
    </AnimatedRoutes>
  );
};

export default Contact;
