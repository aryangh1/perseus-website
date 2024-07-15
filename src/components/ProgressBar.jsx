import { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="progress-container"
      className="w-full h-1 bg-zinc z-50 fixed top-0 left-0 right-0"
    >
      <div
        className="progress-fill h-full bg-white"
        style={{
          width: `${scrollPercentage}%`,
        }}
      ></div>
    </section>
  );
};

export default ProgressBar;
