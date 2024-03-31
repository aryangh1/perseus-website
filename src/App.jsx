import './App.css';

import {
  Hero,
  Highlights,
  Features,
  Services,
  Gallery,
  Clients,
  HowItWorks,
} from './components';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Hero />
        <Highlights />
        <Features />
        <Gallery />
        <Services />
        <Clients />
        <HowItWorks />
      </main>
    </>
  );
};

export default Sentry.withProfiler(App);
