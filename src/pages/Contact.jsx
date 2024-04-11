import { EmailForm } from '../components';

const Contact = () => {
  return (
    <section>
      <div className="mt-24 mb-8 text-center">
        <h2 className="text-5xl lg:text-7xl font-semibold capitalize max-sm:text-4xl">
          Get in touch with us
        </h2>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-lg leading-8 hiw-text">
          Reach out now and take the first step towards achieving your goals.
        </p>
      </div>
      <EmailForm />
    </section>
  );
};

export default Contact;
