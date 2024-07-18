import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import ServicesVideoSection from './ServicesVideoSection';
import { adsVideo } from '../../utils';

const ServicesVideoText = () => {
  const [video, setVideo] = useState(adsVideo);
  const [bgOpacity, setBgOpacity] = useState(0.7);

  return (
    <section className="min-h-screen">
      <section className="min-h-screen flex justify-center items-center bg-neutral-50">
        <h1 className="font-bold text-neutral-900 text-5xl">Hero section</h1>
      </section>
      <section className="bg-black/70">
        <div className="sticky h-screen inset-0">
          <AnimatePresence mode="popLayout">
            <motion.video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full object-cover"
              key={video}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: bgOpacity }}
          />
        </div>
        <ServicesVideoSection
          video={adsVideo}
          setVideo={setVideo}
          setBgOpacity={setBgOpacity}
        >
          Welcome to the era of scroll animations.
        </ServicesVideoSection>
        <ServicesVideoSection
          video={adsVideo}
          setVideo={setVideo}
          setBgOpacity={setBgOpacity}
        >
          This demo seamlessly blends video content with aesthetic interactions.
        </ServicesVideoSection>
        <ServicesVideoSection
          video={adsVideo}
          setVideo={setVideo}
          setBgOpacity={setBgOpacity}
          n
        >
          You navigate simply by scrolling.
        </ServicesVideoSection>
        <ServicesVideoSection
          video={adsVideo}
          setVideo={setVideo}
          setBgOpacity={setBgOpacity}
        >
          You've never seen everything like this before.
        </ServicesVideoSection>
      </section>
      <section className="min-h-screen flex justify-center items-center bg-neutral-50">
        <h1 className="font-bold text-neutral-900 text-5xl">Another section</h1>
      </section>
    </section>
  );
};

export default ServicesVideoText;
