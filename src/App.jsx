import './App.css';

import {
  Navbar,
  Hero,
  Highlights,
  Features,
  Footer,
  HowItWorks,
} from './components';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Hero />
        <Highlights />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
};

export default Sentry.withProfiler(App);
