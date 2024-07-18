import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { Navbar, Footer, ProgressBar, ScrollBtn } from './components';

import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://ebc6570948683f0fcdef112167375cea@o4506989683212288.ingest.us.sentry.io/4506989684195328',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProgressBar />
    <Navbar />
    <App />
    <ScrollBtn />
    <Footer />
  </React.StrictMode>
);
