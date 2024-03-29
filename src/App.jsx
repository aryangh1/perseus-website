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
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
