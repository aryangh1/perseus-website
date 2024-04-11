import { useRef } from 'react';

import emailjs, { sendForm } from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

// import { ChevronDownIcon } from '@heroicons/react/20/solid';

const success = () =>
  toast.success('Success! Your email has been delivered.', {
    position: 'top-right',
  });

const failed = () =>
  toast.error(
    'Uh oh! There was a problem sending your email. Please try again.',
    {
      position: 'top-right',
    }
  );

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z81y0qf', 'template_ouffgaa', form.current, {
        publicKey: 'ZrpEFlSxHIMO_gZwj',
      })
      .then(
        () => {
          success();
        },
        () => {
          failed();
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mx-auto mt-12 max-w-xl">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Name
          </label>
          <div className="mt-2.5">
            <input
              autoFocus
              required
              placeholder="Your Name"
              type="text"
              name="user_name"
              id="user_name"
              autoComplete="given-name"
              className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="business_name"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Business Name
          </label>
          <div className="mt-2.5">
            <input
              placeholder="Perseus Studio"
              type="text"
              name="business_name"
              id="business_name"
              autoComplete="business_name"
              className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="website_name"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Website
          </label>
          <div className="mt-2.5">
            <input
              placeholder="www.perseustudio.com"
              type="text"
              name="website_name"
              id="website_name"
              autoComplete="given-website"
              className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="instagram_id"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Instagram
          </label>
          <div className="mt-2.5">
            <input
              placeholder="@Perseustudio"
              type="text"
              name="instagram_id"
              id="instagram_id"
              autoComplete="instagram-id"
              className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="user_email"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              placeholder="info@perseustudio.com"
              required
              type="email"
              name="user_email"
              id="user_email"
              autoComplete="email"
              className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="user_phoneNumber"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Phone Number
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="user_country" className="sr-only">
                Country
              </label>
              <select
                id="user_country"
                name="user_country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-4 hiw-text text-sm"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              {/* <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  /> */}
            </div>
            <input
              placeholder="+1 (778) 887-8363"
              type="tel"
              name="user_phoneNumber"
              id="user_phoneNumber"
              autoComplete="tel"
              className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 pl-20 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 placeholder:pl-4 max-sm:placeholder:text-[14px]"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="user_message"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Tell us about you
          </label>
          <div className="mt-2.5">
            <textarea
              placeholder="Short description about your business and your goals ..."
              required
              name="user_message"
              id="user_message"
              rows={4}
              className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
              defaultValue={''}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 mb-12 btn block w-full text-center cursor-pointer">
        <button type="submit" onClick={}>
          Submit
        </button>
        <Toaster />
      </div>
    </form>
  );
};

export default EmailForm;
