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
          Perseus: Your full-service partner.
        </ServicesVideoSection>
        <ServicesVideoSection setBgOpacity={setBgOpacity}>
          We create winning marketing and content.
        </ServicesVideoSection>
        <ServicesVideoSection setBgOpacity={setBgOpacity}>
          Innovation drives our success.
        </ServicesVideoSection>
        <ServicesVideoSection setBgOpacity={setBgOpacity}>
          Your vision, our expertise.
        </ServicesVideoSection>
      </section>
    </section>
  );
};

export default ServicesVideoText;
