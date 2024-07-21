import { ServicesProductCard } from '..';

const ServicesProduct = () => {
  return (
    <section className="mt-16">
      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-8 mt-6">
        <ServicesProductCard
          tintColor="white"
          title="Your One-Stop Solution."
          description="Empower your brand with innovative strategies that drive success."
          detailContent="Discover a comprehensive approach to marketing and brand growth with our innovative strategies. We provide end-to-end solutions that ensure your brand stands out, from initial concept to full execution. Empower your brand with the tools and support needed to achieve long-term success."
        >
          <div className="relative size-full max-w-[800px]">
            <video>
              <source src="" />
            </video>
            {/* <img
              src="../../public/assets/images/services/drone-dji.png"
              alt="drone dji"
              className="h-full w-full object-contain lg:object-cover object-top"
              sizes="50vh"
            /> */}
          </div>
        </ServicesProductCard>
        <ServicesProductCard
          tintColor="white"
          title="Partner with Experts."
          description="Collaborate with a dedicated team for all your marketing needs."
          detailContent="Collaborate with a team of seasoned professionals dedicated to your brand’s growth. We offer personalized, all-encompassing marketing support, addressing every aspect of your strategy. Trust our expertise to navigate the complexities of the market and drive your brand forward."
        >
          <div className="h-full flex-1 flex flex-col justify-center items-center">
            <p className="text-[2.5rem] lg:text-[3.5rem] leading-tight tracking-tight max-sm:text-[1.5rem] mt-[-100px]">
              Seamless coordination across all media channels, for a powerful
              brand message.
            </p>
          </div>
        </ServicesProductCard>
      </div>
      <div className="mt-8 max-xl:hidden">
        <ServicesProductCard
          tintColor="white"
          title="Achieve New Heights"
          description="Elevate your brand with comprehensive solutions and lasting impact."
          detailContent="Elevate your brand with holistic solutions designed to create a lasting impact. Our comprehensive approach integrates cutting-edge strategies and innovative techniques to drive sustainable success. Reach new heights in your market and ensure your brand’s enduring prominence."
        >
          <div className="flex justify-between items-center relative size-full">
            <img
              src="../../public/assets/images/services/drone-dji.png"
              alt="drone dji"
              className="h-auto w-auto object-contain lg:object-cover object-top"
              sizes="50vh"
            />
            <p className="lg:text-[3.5rem] leading-tight tracking-tight">
              Seamless coordination across all media channels, for a powerful
              brand message.
            </p>
          </div>
        </ServicesProductCard>
      </div>
    </section>
  );
};

export default ServicesProduct;
