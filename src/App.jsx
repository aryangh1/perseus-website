import * as Sentry from '@sentry/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { HomePage, Contact, About, NotFound } from './pages';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Sentry.withProfiler(App);
