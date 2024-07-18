import { stats } from '../../constants';

export const ServicesStats = () => {
  return (
    <section className="mx-auto max-w-7xl mt-48 mb-24">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="mx-auto flex max-w-xs flex-col gap-y-4 max-lg:last:hidden"
          >
            <dt className="text-base leading-7 max-md:text-sm">{stat.name}</dt>
            <dd className="order-first text-md font-semibold tracking-tight sm:text-3xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default ServicesStats;
