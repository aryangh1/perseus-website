import './App.css';

import { Hero, Highlights, Features, Services, HowItWorks } from './components';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Hero />
        <Highlights />
        <Features />
        <Services />
        <HowItWorks />
      </main>
    </>
  );
};

export default Sentry.withProfiler(App);
