import { ServicesProductCard } from '..';

const ServicesProduct = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-2 gap-8 mt-6">
        <ServicesProductCard
          tintColor="white"
          title="All your needs in one place."
          description="We handle all aspects of your media strategy, from concept to execution."
          detailContent="Experience the convenience of a one-stop media solution. We streamline your marketing efforts by managing all aspects of your media strategy in-house. From concept development to campaign execution, we've got you covered"
        >
          <div className="relative size-full max-w-[800px]">
            <img
              src="../../public/assets/images/services/drone-dji.png"
              alt="drone dji"
              className="h-full w-full object-contain lg:object-cover object-top"
              sizes="50vh"
            />
          </div>
        </ServicesProductCard>
        <ServicesProductCard
          tintColor="white"
          title="We do drone"
          description="We handle all aspects of your media strategy, from concept to execution."
          detailContent="Experience the convenience of a one-stop media solution. We streamline your marketing efforts by managing all aspects of your media strategy in-house. From concept development to campaign execution, we've got you covered"
        >
          <div className="h-full flex-1 flex flex-col justify-center items-center">
            <p className="lg:text-[3.5rem] leading-tight tracking-tight">
              Seamless coordination across all media channels, for a powerful
              brand message.
            </p>
          </div>
        </ServicesProductCard>
      </div>
      <div className="mt-8">
        <ServicesProductCard
          tintColor="white"
          title="We do drone"
          description="We handle all aspects of your media strategy, from concept to execution."
          detailContent="Experience the convenience of a one-stop media solution. We streamline your marketing efforts by managing all aspects of your media strategy in-house. From concept development to campaign execution, we've got you covered.Experience the convenience of a one-stop media solution. We streamline your marketing efforts by managing all aspects of your media strategy in-house. From concept development to campaign execution, we've got you covered.Experience the convenience of a one-stop media solution. We streamline your marketing efforts by managing all aspects of your media strategy in-house. From concept development to campaign execution, we've got you covered."
        >
          <div className="flex justify-between items-center relative size-full">
            <img
              src="../../public/assets/images/services/drone-dji.png"
              alt="drone dji"
              className="h-full w-full object-contain lg:object-cover object-top"
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
