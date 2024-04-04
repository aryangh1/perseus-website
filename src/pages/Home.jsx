import {
  Hero,
  Highlights,
  Features,
  Services,
  Gallery,
  Clients,
  HowItWorks,
} from '../components';

const HomePage = () => {
  return (
    <>
      <main className="bg-black">
        <Hero />
        <Highlights />
        <Services />
        <Features />
        <Gallery />
        <Clients />
        <HowItWorks />
      </main>
    </>
  );
};

export default HomePage;
