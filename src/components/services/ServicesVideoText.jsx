import { useState } from 'react';

import ServicesVideoSection from './ServicesVideoSection';

const ServicesVideoText = () => {
  const [bgOpacity, setBgOpacity] = useState(0.7);

  return (
    <section className="min-h-screen">
      <section className="bg-black/70">
        <div className="sticky inset-0">
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: bgOpacity }}
          />
        </div>
        <ServicesVideoSection setBgOpacity={setBgOpacity}>
          Welcome to the era of scroll animations.
        </ServicesVideoSection>
        <ServicesVideoSection setBgOpacity={setBgOpacity}>
          This demo seamlessly blends video content with aesthetic interactions.
        </ServicesVideoSection>
        <ServicesVideoSection setBgOpacity={setBgOpacity}>
          You navigate simply by scrolling.
        </ServicesVideoSection>
        <ServicesVideoSection setBgOpacity={setBgOpacity}>
          You've never seen everything like this before.
        </ServicesVideoSection>
      </section>
    </section>
  );
};

export default ServicesVideoText;
