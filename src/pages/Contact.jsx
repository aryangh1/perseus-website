import { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import { Switch } from '@headlessui/react';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <section>
      <div className="mt-24 mb-8 text-center">
        <h2 className="text-5xl lg:text-7xl font-semibold capitalize max-sm:text-4xl">
          Get in touch with us
        </h2>
      </div>

      <div className="isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          {/* <div
            className="-z-10 relative left-1/2 aspect-[600/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          /> */}
        </div>
        <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Us
          </h2> */}
          <p className="text-lg leading-8 hiw-text">
            Reach out now and take the first step towards achieving your goals.
          </p>
        </div>
        <form
          action="https://perseustudio.com"
          method="POST"
          className="mx-auto mt-12 max-w-xl"
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  placeholder="Your Name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="business-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Business Name
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="Perseus Studio"
                  type="text"
                  name="business-name"
                  id="business-name"
                  autoComplete="business-name"
                  className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="website"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Website
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="www.perseustudio.com"
                  type="text"
                  name="website"
                  id="website"
                  autoComplete="given-website"
                  className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="instagram"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Instagram
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="@Perseustudio"
                  type="text"
                  name="instagram"
                  id="instagram"
                  autoComplete="instagram-id"
                  className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  placeholder="info@perseustudio.com"
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Phone Number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
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
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 pl-20 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 placeholder:pl-4 max-sm:placeholder:text-[14px]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Tell us about you
              </label>
              <div className="mt-2.5">
                <textarea
                  placeholder="Short description about your business and your goals ..."
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="max-sm:text-[14px] block w-full rounded-md border-0 px-3.5 py-2 hiw-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6 max-sm:placeholder:text-[14px]"
                  defaultValue={''}
                />
              </div>
            </div>
            {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group> */}
          </div>
          <div className="mt-8 mb-12">
            <a href="https://perseustudio.com">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
              >
                Submit
              </button>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
