import { AnimatedRoutes } from '../components';
import { perseusWhiteImg } from '../utils';

const NotFound = () => {
  return (
    <AnimatedRoutes>
      <section className="relative z-10 bg-primary py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                  Oops! That page can’t be found.
                </h4>
                <p className="mb-8 text-lg text-white">
                  The page you are looking for it maybe deleted.
                </p>
                <a href="/" className="btn">
                  Go To Home
                </a>
                <div className="flex-center w-full">
                  <img
                    src={perseusWhiteImg}
                    alt="logo"
                    width={240}
                    height={360}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedRoutes>
  );
};

export default NotFound;
