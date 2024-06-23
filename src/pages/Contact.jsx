import { EmailForm, HeadingText } from '../components';

const Contact = () => {
  return (
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
  );
};

export default Contact;
