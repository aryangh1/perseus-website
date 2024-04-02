import { footerLinks } from '../constants';

const Footer = () => {
  const updatedDate = new Date().getFullYear();

  return (
    <footer className="py-5 sm:px-10 px-5" id="contact">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to contact us:{' '}
            <a
              href="mailto:info@perseustudio.com"
              className="underline text-blue"
            >
              By sending an E-mail{' '}
            </a>
            or{' '}
            <a
              href="https://www.instagram.com/perseustudio/"
              className="underline text-blue"
            >
              Instagram
            </a>{' '}
            for collabration,
          </p>
          <span className="font-semibold text-gray text-xs">
            Or call{' '}
            <a href="tel:+1 (778) 887-8363" className="underline text-blue">
              +1 (778) 887-8363
            </a>
          </span>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright &copy; {updatedDate} Perseus Inc. All rights reserved.
          </p>
          <div className="flex max-sm:hidden">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
